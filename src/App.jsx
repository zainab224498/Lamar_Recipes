import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import Home from "./pages/home/Home";
import Blog from "./pages/blog/Blog";
import AllBlogs from "./pages/allBlogs/AllBlogs";
import NoPage from "./pages/nopage/NoPage";
import BlogInfo from "./pages/blogInfo/BlogInfo";
import AdminLogin from "./pages/admin/adminLogin/AdminLogin";
import Dashboard from "./pages/admin/dashboard/Dashboard";
import MyState from "./context/data/myState";
import CreateBlog from "./pages/admin/createBlog/CreateBlog";
import { Toaster } from "react-hot-toast";
import EditBlog from "./pages/admin/editBlog/EditBlog";
import CreateFood from "./pages/admin/createFood/CreateFood";
import CreateDessert from "./pages/admin/createDessert/CreateDessert";
import CreateSnack from "./pages/admin/createSnack/CreateSnack";
import CreateDrink from "./pages/admin/createDrink/CreateDrink";
import AllFoods from "./pages/allFoods/AllFoods";
import AllDesserts from "./pages/allDesserts/AllDesserts";
import AllSnacks from "./pages/allSnacks/AllSnacks";
import AllDrinks from "./pages/allDrinks/AllDrinks";
import FoodInfo from "./pages/foodInfo/FoodInfo";
import DessertInfo from "./pages/dessertInfo/DessertInfo";
import SnackInfo from "./pages/snackInfo/SnackInfo";
import DrinkInfo from "./pages/drinkInfo/DrinkInfo";
import AboutUs from "./pages/aboutUs/AboutUs";

function App() {
  return (
    <MyState>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/allBlogs" element={<AllBlogs />} />
          <Route path="/bloginfo/:id" element={<BlogInfo />} />
          <Route path="/allfoods" element={<AllFoods />} />
          <Route path="/foodinfo/:id" element={<FoodInfo />} />
          <Route path="/alldesserts" element={<AllDesserts />} />
          <Route path="/dessertinfo/:id" element={<DessertInfo />} />
          <Route path="/allsnacks" element={<AllSnacks />} />
          <Route path="/snackinfo/:id" element={<SnackInfo />} />
          <Route path="/alldrinks" element={<AllDrinks />} />
          <Route path="/drinkinfo/:id" element={<DrinkInfo />} />
          <Route path="/adminlogin" element={<AdminLogin />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/editblog" element={<EditBlog />} />
          <Route path="/dashboard" element={
            <ProtectedRouteForAdmin>
              <Dashboard />
            </ProtectedRouteForAdmin>
          } />
          <Route path="/createfood" element={
            <ProtectedRouteForAdmin>
              <CreateFood />
            </ProtectedRouteForAdmin>
          } />
          <Route path="/createdessert" element={
            <ProtectedRouteForAdmin>
              <CreateDessert />
            </ProtectedRouteForAdmin>
          } />
          <Route path="/createsnack" element={
            <ProtectedRouteForAdmin>
              <CreateSnack />
            </ProtectedRouteForAdmin>
          } />
          <Route path="/createdrink" element={
            <ProtectedRouteForAdmin>
              <CreateDrink />
            </ProtectedRouteForAdmin>
          } />
          <Route path="/createblog" element={
            <ProtectedRouteForAdmin>
              <CreateBlog />
            </ProtectedRouteForAdmin>
          } />
          <Route path="/*" element={<NoPage />} />
        </Routes>
        <Toaster />
      </Router>
    </MyState>
  )
}

export default App

export const ProtectedRouteForAdmin = ({ children }) => {
  const admin = JSON.parse(localStorage.getItem('admin'))
  if (admin?.user?.email === "testuser@gmail.com") {
    return children
  }
  else {
    return <Navigate to={'/adminlogin'} />
  }
}
import React, { useEffect, useState } from 'react'
import MyContext from './myContext';
import { collection, deleteDoc, doc, onSnapshot, orderBy, query } from 'firebase/firestore';
import { fireDb } from '../../firebase/FirebaseConfig';
import toast from 'react-hot-toast';

function MyState(props) {
    const [mode, setMode] = useState('light'); // Whether dark mode is enabled or not
    const toggleMode = () => {
        if (mode === 'light') {
            setMode('dark');
            document.body.style.backgroundColor = 'rgb(17, 24, 39)';
        }
        else {
            setMode('light');
            document.body.style.backgroundColor = 'white';
        }
    }

    //* search state
    const [searchkey, setSearchkey] = useState('');

    //* loading state
    const [loading, setloading] = useState(false);

    //* getAllBlog State 
    const [getAllBlog, setGetAllBlog] = useState([]);

    //* getAllBlogs Function
    function getAllBlogs() {
        setloading(true);
        try {
            const q = query(
                collection(fireDb, "blogPost"),
                orderBy('time')
            );
            const data = onSnapshot(q, (QuerySnapshot) => {
                let blogArray = [];
                QuerySnapshot.forEach((doc) => {
                    blogArray.push({ ...doc.data(), id: doc.id });
                });

                setGetAllBlog(blogArray)
                console.log(blogArray)
                setloading(false)
            });
            return () => data;
        } catch (error) {
            console.log(error)
            setloading(false)
        }
    }

    useEffect(() => {
        getAllBlogs();
    }, []);

    // Blog Delete Function 
    const deleteBlogs = async (id) => {
        try {
            await deleteDoc(doc(fireDb, "blogPost", id));
            getAllBlogs()
            toast.success("Blogs deleted successfully")
        } catch (error) {
            console.log(error)
        }
    }

    //* getAllFood State 
    const [getAllFood, setGetAllFood] = useState([]);

    //* getAllFoods Function
    function getAllFoods() {
        setloading(true);
        try {
            const q = query(
                collection(fireDb, "foodPost"),
                orderBy('time')
            );
            const data = onSnapshot(q, (QuerySnapshot) => {
                let foodArray = [];
                QuerySnapshot.forEach((doc) => {
                    foodArray.push({ ...doc.data(), id: doc.id });
                });

                setGetAllFood(foodArray)
                console.log(foodArray)
                setloading(false)
            });
            return () => data;
        } catch (error) {
            console.log(error)
            setloading(false)
        }
    }

    useEffect(() => {
        getAllFoods();
    }, []);

    // Food Delete Function 
    const deleteFoods = async (id) => {
        try {
            await deleteDoc(doc(fireDb, "foodPost", id));
            getAllFoods()
            toast.success("Food deleted successfully")
        } catch (error) {
            console.log(error)
        }
    }

    //* getAllDessert State 
    const [getAllDessert, setGetAllDessert] = useState([]);

    //* getAllDesserts Function
    function getAllDesserts() {
        setloading(true);
        try {
            const q = query(
                collection(fireDb, "dessertPost"),
                orderBy('time')
            );
            const data = onSnapshot(q, (QuerySnapshot) => {
                let dessertArray = [];
                QuerySnapshot.forEach((doc) => {
                    dessertArray.push({ ...doc.data(), id: doc.id });
                });

                setGetAllDessert(dessertArray)
                console.log(dessertArray)
                setloading(false)
            });
            return () => data;
        } catch (error) {
            console.log(error)
            setloading(false)
        }
    }

    useEffect(() => {
        getAllDesserts();
    }, []);

    // Dessert Delete Function 
    const deleteDesserts = async (id) => {
        try {
            await deleteDoc(doc(fireDb, "dessertPost", id));
            getAllDessert()
            toast.success("Dessert deleted successfully")
        } catch (error) {
            console.log(error)
        }
    }

    
    //* getAllSnack State 
    const [getAllSnack, setGetAllSnack] = useState([]);

    //* getAllSnacks Function
    function getAllSnacks() {
        setloading(true);
        try {
            const q = query(
                collection(fireDb, "snackPost"),
                orderBy('time')
            );
            const data = onSnapshot(q, (QuerySnapshot) => {
                let snackArray = [];
                QuerySnapshot.forEach((doc) => {
                    snackArray.push({ ...doc.data(), id: doc.id });
                });

                setGetAllSnack(snackArray)
                console.log(snackArray)
                setloading(false)
            });
            return () => data;
        } catch (error) {
            console.log(error)
            setloading(false)
        }
    }

    useEffect(() => {
        getAllSnacks();
    }, []);

    // Snack Delete Function 
    const deleteSnacks = async (id) => {
        try {
            await deleteDoc(doc(fireDb, "snackPost", id));
            getAllSnacks()
            toast.success("Snack deleted successfully")
        } catch (error) {
            console.log(error)
        }
    }

       //* getAllDrink State 
       const [getAllDrink, setGetAllDrink] = useState([]);

       //* getAllDrinks Function
       function getAllDrinks() {
           setloading(true);
           try {
               const q = query(
                   collection(fireDb, "drinkPost"),
                   orderBy('time')
               );
               const data = onSnapshot(q, (QuerySnapshot) => {
                   let drinkArray = [];
                   QuerySnapshot.forEach((doc) => {
                       drinkArray.push({ ...doc.data(), id: doc.id });
                   });
   
                   setGetAllDrink(drinkArray)
                   console.log(drinkArray)
                   setloading(false)
               });
               return () => data;
           } catch (error) {
               console.log(error)
               setloading(false)
           }
       }
   
       useEffect(() => {
           getAllDrinks();
       }, []);
   
       // drink Delete Function 
       const deleteDrinks = async (id) => {
           try {
               await deleteDoc(doc(fireDb, "drinkPost", id));
               getAllDrinks()
               toast.success("Drinks deleted successfully")
           } catch (error) {
               console.log(error)
           }
       }


    return (
        <MyContext.Provider value={{
            mode,
            toggleMode,
            searchkey,
            setSearchkey,
            loading,
            setloading,
            getAllBlog,
            deleteBlogs,
            getAllFood,
            deleteFoods,
            getAllDessert,
            deleteDesserts,
            getAllSnack,
            deleteSnacks,
            getAllDrink,
            deleteDrinks
        }}>
            {props.children}
        </MyContext.Provider>
    )
}

export default MyState
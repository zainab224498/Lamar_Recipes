import { Fragment, useContext, useState } from "react";
import {
    Dialog,
    DialogBody,
    Input,
} from "@material-tailwind/react";
import myContext from "../../context/data/myContext";
import { AiOutlineSearch } from "react-icons/ai";
import { useNavigate } from "react-router";

export default function SearchDialog() {
    const [open, setOpen] = useState(false);

    const handleOpen = () => setOpen(!open);

    const context = useContext(myContext);
    const { mode, searchkey, setSearchkey, getAllBlog, getAllFood, getAllDessert, getAllSnack, getAllDrink } = context;

    const navigate = useNavigate();

    const filteredBlogs = getAllBlog.filter((obj) => obj.blogs.title.toLowerCase().includes(searchkey));
    const filteredFoods = getAllFood.filter((obj) => obj.foods.title.toLowerCase().includes(searchkey));
    const filteredDrinks = getAllDrink.filter((obj) => obj.drinks.title.toLowerCase().includes(searchkey));
    const filteredDesserts = getAllDessert.filter((obj) => obj.desserts.title.toLowerCase().includes(searchkey));
    const filteredSnacks = getAllSnack.filter((obj) => obj.snacks.title.toLowerCase().includes(searchkey));

    return (
        <Fragment>
            {/* Search Icon  */}
            <div onClick={handleOpen}>
                <AiOutlineSearch size={20} color="white" />
            </div>
            {/* Dialog  */}
            <Dialog className=" relative right-[1em] w-[25em]  md:right-0 md:w-0 lg:right-0 lg:w-0" open={open} handler={handleOpen} style={{ background: mode === 'light' ? '#2f3542' : '#2f3542', color: mode === 'dark' ? 'white' : 'black' }}>
                {/* Dialog Body  */}
                <DialogBody >
                    <div className="flex w-full   justify-center">
                        {/* Input  */}
                        <Input
                            color="white"
                            type="search"
                            label="Type here..."
                            value={searchkey}
                            onChange={(e) => setSearchkey(e.target.value)}
                            className=" bg-[#2C3A47]"
                            name="searchkey"
                            containerProps={{
                                className: "min-w-[288px]",
                            }}
                        />
                    </div>

                    {/* Blog Card  */}
                    <div className="flex justify-center flex-wrap  sm:mx-auto sm:mb-2 -mx-2  mt-4 mb-2 ">
                        {searchkey && (
                            <>
                                {filteredBlogs.map((item, index) => (
                                    <div key={index} className="p-2 sm:w-1/4 w-full " >
                                        <div onClick={() => navigate(`/bloginfo/${item.id}`)} className=" container cursor-pointer mx-auto px-4 bg-gray-200 p-2 rounded-lg ">
                                            {/* Blog Thumbnail  */}
                                            <img className="w-28 mb-2 rounded-lg" src={item.thumbnail} alt="" />
                                            {/* Blog Title  */}
                                            <h1>{item.blogs.title}</h1>
                                        </div>
                                    </div>
                                ))}
                                {filteredFoods.map((item, index) => (
                                    <div key={index} className="p-2 sm:w-1/4 w-full " >
                                        <div onClick={() => navigate(`/foodinfo/${item.id}`)} className=" container cursor-pointer mx-auto px-4 bg-gray-200 p-2 rounded-lg ">
                                            {/* Food Thumbnail  */}
                                            <img className="w-28 mb-2 rounded-lg" src={item.thumbnail} alt="" />
                                            {/* Food Title  */}
                                            <h1>{item.foods.title}</h1>
                                        </div>
                                    </div>
                                ))}
                                {filteredDrinks.map((item, index) => (
                                    <div key={index} className="p-2 sm:w-1/4 w-full " >
                                        <div onClick={() => navigate(`/drinkinfo/${item.id}`)} className=" container cursor-pointer mx-auto px-4 bg-gray-200 p-2 rounded-lg ">
                                            {/* Drink Thumbnail  */}
                                            <img className="w-28 mb-2 rounded-lg" src={item.thumbnail} alt="" />
                                            {/* Drink Title  */}
                                            <h1>{item.drinks.title}</h1>
                                        </div>
                                    </div>
                                ))}
                                {filteredDesserts.map((item, index) => (
                                    <div key={index} className="p-2 sm:w-1/4 w-full " >
                                        <div onClick={() => navigate(`/dessertinfo/${item.id}`)} className=" container cursor-pointer mx-auto px-4 bg-gray-200 p-2 rounded-lg ">
                                            {/* dessert Thumbnail  */}
                                            <img className="w-28 mb-2 rounded-lg" src={item.thumbnail} alt="" />
                                            {/* dessert Title  */}
                                            <h1>{item.desserts.title}</h1>
                                        </div>
                                    </div>
                                ))}
                                {filteredSnacks.map((item, index) => (
                                    <div key={index} className="p-2 sm:w-1/4 w-full " >
                                        <div onClick={() => navigate(`/snackinfo/${item.id}`)} className=" container cursor-pointer mx-auto px-4 bg-gray-200 p-2 rounded-lg ">
                                            {/* snack Thumbnail  */}
                                            <img className="w-28 mb-2 rounded-lg" src={item.thumbnail} alt="" />
                                            {/* snack Title  */}
                                            <h1>{item.snacks.title}</h1>
                                        </div>
                                    </div>
                                ))}
                            </>
                        )}
                    </div>

                    {/* Heading  */}
                    <div className=" text-center">
                        <h1 className=" text-gray-600">Powered By LAMAR Recipes</h1>
                    </div>
                </DialogBody>
            </Dialog>
        </Fragment>
    );
}
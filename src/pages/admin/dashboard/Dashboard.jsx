import React, { useContext, useEffect } from 'react'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import Layout from '../../../components/layout/Layout'
import myContext from '../../../context/data/myContext';
import { Button } from '@material-tailwind/react';
import { Link, useNavigate } from 'react-router-dom';

function Dashboard() {
    const context = useContext(myContext);
    const { mode, getAllFood, deleteFoods, getAllDessert, deleteDesserts,
        getAllSnack, deleteSnacks, getAllDrink, deleteDrinks, getAllBlog, deleteBlogs, } = context;


    const navigate = useNavigate();

    //* Logout Function 
    const logout = () => {
        localStorage.clear();
        navigate('/')
    }

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <Layout>
            <div className="py-10">
                <div
                    className="flex flex-wrap justify-start items-center lg:justify-center gap-2 lg:gap-10 px-4 lg:px-0 mb-8">
                    <div className="left">
                        <img
                            className=" w-40 h-40  object-cover rounded-full border-2 p-1"
                            src={'https://cdn-icons-png.flaticon.com/128/3135/3135715.png'} alt="profile"
                        />
                    </div>
                    <div className="right">
                        <h1
                            className='text-center font-bold text-2xl mb-2'
                            style={{ color: mode === 'dark' ? 'white' : 'black' }}
                        >
                            Kamal Nayan Upadhyay
                        </h1>

                        <h2
                            style={{ color: mode === 'dark' ? 'white' : 'black' }} className="font-semibold">
                            Software Developer
                        </h2>
                        <h2
                            style={{ color: mode === 'dark' ? 'white' : 'black' }} className="font-semibold">knupadhyay784@gmail.com
                        </h2>
                        <div className=" flex gap-2 mt-2">
                            <div className="mb-2">
                                <Button
                                    onClick={logout}
                                    style={{
                                        background: mode === 'dark'
                                            ? 'rgb(226, 232, 240)'
                                            : 'rgb(55, 179, 77)',
                                        color: mode === 'dark'
                                            ? 'black'
                                            : 'white'
                                    }}
                                    className='px-8 py-2'
                                >
                                    Logout
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Line  */}
                <hr className={`border-2
                    ${mode === 'dark'
                        ? 'border-gray-300'
                        : 'border-gray-400'}`
                }
                />

                {/** tab dashboard */}
                <div className="container mx-auto">
                    <div className="tab container mx-auto my-12 ">
                        <Tabs defaultIndex={0} className=" " >
                            <TabList className="lg:flex md:space-x-8 bg-  grid grid-cols-2 text-center gap-4   md:justify-center mb-10 ">
                                <Tab>
                                    <button type="button" style={{
                                        background: mode === 'dark'
                                            ? 'rgb(226, 232, 240)'
                                            : 'rgb(55, 179, 77)',
                                        color: mode === 'dark'
                                            ? 'black'
                                            : 'white'
                                    }}
                                        className='px-8 py-2'>
                                        <div className="flex gap-2 items-center">
                                            Food</div> </button>
                                </Tab>
                                <Tab>
                                    <button type="button" style={{
                                        background: mode === 'dark'
                                            ? 'rgb(226, 232, 240)'
                                            : 'rgb(55, 179, 77)',
                                        color: mode === 'dark'
                                            ? 'black'
                                            : 'white'
                                    }}
                                        className='px-8 py-2'>
                                        <div className="flex gap-2 items-center">
                                            Desserts</div> </button>
                                </Tab>
                                <Tab>
                                    <button type="button" style={{
                                        background: mode === 'dark'
                                            ? 'rgb(226, 232, 240)'
                                            : 'rgb(55, 179, 77)',
                                        color: mode === 'dark'
                                            ? 'black'
                                            : 'white'
                                    }}
                                        className='px-8 py-2'>
                                        <div className="flex gap-2 items-center">
                                            Snacks</div> </button>
                                </Tab>
                                <Tab>
                                    <button type="button" style={{
                                        background: mode === 'dark'
                                            ? 'rgb(226, 232, 240)'
                                            : 'rgb(55, 179, 77)',
                                        color: mode === 'dark'
                                            ? 'black'
                                            : 'white'
                                    }}
                                        className='px-8 py-2'>
                                        <div className="flex gap-2 items-center">
                                            Drinks</div> </button>
                                </Tab>
                                <Tab>
                                    <button type="button" style={{
                                        background: mode === 'dark'
                                            ? 'rgb(226, 232, 240)'
                                            : 'rgb(55, 179, 77)',
                                        color: mode === 'dark'
                                            ? 'black'
                                            : 'white'
                                    }}
                                        className='px-8 py-2'>
                                        <div className="flex gap-2 items-center">
                                            Kitchen Tips
                                        </div>
                                    </button>
                                </Tab>
                            </TabList>
                            {/* food  */}
                            <TabPanel>
                                <div className='  px-4 md:px-0 mb-16'>
                                    <h1 className=' text-center mb-5 text-3xl font-semibold underline' style={{ color: mode === 'dark' ? 'white' : '' }}>Food Details</h1>
                                    <div className=" flex justify-end">
                                        <Link to={'/createfood'}>
                                            <button
                                                type="button"
                                                style={{
                                                    background: mode === 'dark'
                                                        ? 'rgb(226, 232, 240)'
                                                        : 'rgb(55, 179, 77)',
                                                    color: mode === 'dark'
                                                        ? 'black'
                                                        : 'white'
                                                }}
                                                className='px-8 py-2' > <div className="flex gap-2 items-center">
                                                    Create Food
                                                </div></button>
                                        </Link>
                                    </div>
                                    <div className="relative overflow-x-auto ">
                                        <table className="w-full border-2 border-white shadow-md text-sm text-left text-gray-500 dark:text-gray-400">
                                            <thead style={{
                                                background: mode === 'dark'
                                                    ? 'white'
                                                    : 'rgb(55, 179, 77)'
                                            }}
                                                className="text-xs " >
                                                <tr>
                                                    <th style={{ color: mode === 'dark' ? 'rgb(55, 179, 77)' : 'white' }} scope="col" className="px-6 py-3">
                                                        S.No
                                                    </th>
                                                    <th style={{ color: mode === 'dark' ? 'rgb(55, 179, 77)' : 'white' }} scope="col" className="px-6 py-3">
                                                        Thumbnail
                                                    </th>
                                                    <th style={{ color: mode === 'dark' ? 'rgb(55, 179, 77)' : 'white' }} scope="col" className="px-6 py-3">
                                                        Title
                                                    </th>
                                                    <th style={{ color: mode === 'dark' ? 'rgb(55, 179, 77)' : 'white' }} scope="col" className="px-6 py-3">
                                                        Category
                                                    </th>
                                                    <th style={{ color: mode === 'dark' ? 'rgb(55, 179, 77)' : 'white' }} scope="col" className="px-6 py-3">
                                                        Date
                                                    </th>
                                                    <th style={{ color: mode === 'dark' ? 'rgb(55, 179, 77)' : 'white' }} scope="col" className="px-6 py-3">
                                                        Action
                                                    </th>
                                                </tr>
                                            </thead>

                                            {/* tbody  */}
                                            {getAllFood.length > 0
                                                ?
                                                <>
                                                    {getAllFood.map((item, index) => {
                                                        const { thumbnail, date, id } = item;
                                                        console.log(item)
                                                        return (
                                                            <tbody key={index}>
                                                                <tr className=" border-b-2" style={{ background: mode === 'dark' ? 'rgb(55, 179, 77)' : 'white' }}>
                                                                    {/* S.No   */}
                                                                    <td style={{ color: mode === 'dark' ? 'white' : 'black' }} className="px-6 py-4">
                                                                        {index + 1}.
                                                                    </td>
                                                                    {/* food Thumbnail  */}
                                                                    <th style={{ color: mode === 'dark' ? 'white' : 'black' }} scope="row" className="px-6 py-4 font-medium ">
                                                                        {/* thumbnail  */}
                                                                        <img className='w-16 rounded-lg'
                                                                            src={thumbnail} alt="thumbnail" />
                                                                    </th>
                                                                    {/* food Title  */}
                                                                    <td style={{ color: mode === 'dark' ? 'white' : 'black' }} className="px-6 py-4">
                                                                        {item.foods.title}
                                                                    </td>
                                                                    {/* food Category  */}
                                                                    <td style={{ color: mode === 'dark' ? 'white' : 'black' }} className="px-6 py-4">
                                                                        {item.foods.category}
                                                                    </td>
                                                                    {/* food Date  */}
                                                                    <td style={{ color: mode === 'dark' ? 'white' : 'black' }} className="px-6 py-4">
                                                                        {date}
                                                                    </td>
                                                                    {/* Delete food  */}
                                                                    <td onClick={() => deleteFoods(id)} style={{ color: mode === 'dark' ? 'white' : 'black' }} className="px-6 py-4">
                                                                        <button className=' px-4 py-1 rounded-lg text-white font-bold bg-red-500'>
                                                                            Delete
                                                                        </button>
                                                                    </td>
                                                                </tr>
                                                            </tbody>
                                                        )
                                                    })}</>
                                                :
                                                <>
                                                    <h1>Not Found</h1>
                                                </>
                                            }
                                        </table>

                                    </div>
                                </div>
                            </TabPanel>

                            {/* dessert  */}
                            <TabPanel>
                                <div className='  px-4 md:px-0 mb-16'>
                                    <h1 className=' text-center mb-5 text-3xl font-semibold underline' style={{ color: mode === 'dark' ? 'white' : '' }}>Desserts Details</h1>
                                    <div className=" flex justify-end">
                                        <Link to={'/createdessert'}>
                                            <button
                                                type="button"
                                                style={{
                                                    background: mode === 'dark'
                                                        ? 'rgb(226, 232, 240)'
                                                        : 'rgb(55, 179, 77)',
                                                    color: mode === 'dark'
                                                        ? 'black'
                                                        : 'white'
                                                }}
                                                className='px-8 py-2' > <div className="flex gap-2 items-center">
                                                    Create Dessert
                                                </div></button>
                                        </Link>
                                    </div>
                                    <div className="relative overflow-x-auto ">
                                        <table className="w-full border-2 border-white shadow-md text-sm text-left text-gray-500 dark:text-gray-400">
                                            <thead style={{
                                                background: mode === 'dark'
                                                    ? 'white'
                                                    : 'rgb(55, 179, 77)'
                                            }}
                                                className="text-xs " >
                                                <tr>
                                                    <th style={{ color: mode === 'dark' ? 'rgb(55, 179, 77)' : 'white' }} scope="col" className="px-6 py-3">
                                                        S.No
                                                    </th>
                                                    <th style={{ color: mode === 'dark' ? 'rgb(55, 179, 77)' : 'white' }} scope="col" className="px-6 py-3">
                                                        Thumbnail
                                                    </th>
                                                    <th style={{ color: mode === 'dark' ? 'rgb(55, 179, 77)' : 'white' }} scope="col" className="px-6 py-3">
                                                        Title
                                                    </th>
                                                    <th style={{ color: mode === 'dark' ? 'rgb(55, 179, 77)' : 'white' }} scope="col" className="px-6 py-3">
                                                        Category
                                                    </th>
                                                    <th style={{ color: mode === 'dark' ? 'rgb(55, 179, 77)' : 'white' }} scope="col" className="px-6 py-3">
                                                        Date
                                                    </th>
                                                    <th style={{ color: mode === 'dark' ? 'rgb(55, 179, 77)' : 'white' }} scope="col" className="px-6 py-3">
                                                        Action
                                                    </th>
                                                </tr>
                                            </thead>

                                            {/* tbody  */}
                                            {getAllDessert.length > 0
                                                ?
                                                <>
                                                    {getAllDessert.map((item, index) => {
                                                        const { thumbnail, date, id } = item;
                                                        console.log(item)
                                                        return (
                                                            <tbody key={index}>
                                                                <tr className=" border-b-2" style={{ background: mode === 'dark' ? 'rgb(55, 179, 77)' : 'white' }}>
                                                                    {/* S.No   */}
                                                                    <td style={{ color: mode === 'dark' ? 'white' : 'black' }} className="px-6 py-4">
                                                                        {index + 1}.
                                                                    </td>
                                                                    {/* dessert Thumbnail  */}
                                                                    <th style={{ color: mode === 'dark' ? 'white' : 'black' }} scope="row" className="px-6 py-4 font-medium ">
                                                                        {/* thumbnail  */}
                                                                        <img className='w-16 rounded-lg'
                                                                            src={thumbnail} alt="thumbnail" />
                                                                    </th>
                                                                    {/* dessert Title  */}
                                                                    <td style={{ color: mode === 'dark' ? 'white' : 'black' }} className="px-6 py-4">
                                                                        {item.desserts.title}
                                                                    </td>
                                                                    {/* dessert Category  */}
                                                                    <td style={{ color: mode === 'dark' ? 'white' : 'black' }} className="px-6 py-4">
                                                                        {item.desserts.category}
                                                                    </td>
                                                                    {/* dessert Date  */}
                                                                    <td style={{ color: mode === 'dark' ? 'white' : 'black' }} className="px-6 py-4">
                                                                        {date}
                                                                    </td>
                                                                    {/* Delete dessert  */}
                                                                    <td onClick={() => deleteDesserts(id)} style={{ color: mode === 'dark' ? 'white' : 'black' }} className="px-6 py-4">
                                                                        <button className=' px-4 py-1 rounded-lg text-white font-bold bg-red-500'>
                                                                            Delete
                                                                        </button>
                                                                    </td>
                                                                </tr>
                                                            </tbody>
                                                        )
                                                    })}</>
                                                :
                                                <>
                                                    <h1>Not Found</h1>
                                                </>
                                            }
                                        </table>

                                    </div>
                                </div>
                            </TabPanel>

                            {/* snack  */}
                            <TabPanel>
                                <div className='  px-4 md:px-0 mb-16'>
                                    <h1 className=' text-center mb-5 text-3xl font-semibold underline' style={{ color: mode === 'dark' ? 'white' : '' }}>Snacks Details</h1>
                                    <div className=" flex justify-end">
                                        <Link to={'/createsnack'}>
                                            <button
                                                type="button"
                                                style={{
                                                    background: mode === 'dark'
                                                        ? 'rgb(226, 232, 240)'
                                                        : 'rgb(55, 179, 77)',
                                                    color: mode === 'dark'
                                                        ? 'black'
                                                        : 'white'
                                                }}
                                                className='px-8 py-2' > <div className="flex gap-2 items-center">
                                                    Create Snack
                                                </div></button>
                                        </Link>
                                    </div>
                                    <div className="relative overflow-x-auto ">
                                        <table className="w-full border-2 border-white shadow-md text-sm text-left text-gray-500 dark:text-gray-400">
                                            <thead style={{
                                                background: mode === 'dark'
                                                    ? 'white'
                                                    : 'rgb(55, 179, 77)'
                                            }}
                                                className="text-xs " >
                                                <tr>
                                                    <th style={{ color: mode === 'dark' ? 'rgb(55, 179, 77)' : 'white' }} scope="col" className="px-6 py-3">
                                                        S.No
                                                    </th>
                                                    <th style={{ color: mode === 'dark' ? 'rgb(55, 179, 77)' : 'white' }} scope="col" className="px-6 py-3">
                                                        Thumbnail
                                                    </th>
                                                    <th style={{ color: mode === 'dark' ? 'rgb(55, 179, 77)' : 'white' }} scope="col" className="px-6 py-3">
                                                        Title
                                                    </th>
                                                    <th style={{ color: mode === 'dark' ? 'rgb(55, 179, 77)' : 'white' }} scope="col" className="px-6 py-3">
                                                        Category
                                                    </th>
                                                    <th style={{ color: mode === 'dark' ? 'rgb(55, 179, 77)' : 'white' }} scope="col" className="px-6 py-3">
                                                        Date
                                                    </th>
                                                    <th style={{ color: mode === 'dark' ? 'rgb(55, 179, 77)' : 'white' }} scope="col" className="px-6 py-3">
                                                        Action
                                                    </th>
                                                </tr>
                                            </thead>

                                            {/* tbody  */}
                                            {getAllSnack.length > 0
                                                ?
                                                <>
                                                    {getAllSnack.map((item, index) => {
                                                        const { thumbnail, date, id } = item;
                                                        console.log(item)
                                                        return (
                                                            <tbody key={index}>
                                                                <tr className=" border-b-2" style={{ background: mode === 'dark' ? 'rgb(55, 179, 77)' : 'white' }}>
                                                                    {/* S.No   */}
                                                                    <td style={{ color: mode === 'dark' ? 'white' : 'black' }} className="px-6 py-4">
                                                                        {index + 1}.
                                                                    </td>
                                                                    {/* snack Thumbnail  */}
                                                                    <th style={{ color: mode === 'dark' ? 'white' : 'black' }} scope="row" className="px-6 py-4 font-medium ">
                                                                        {/* thumbnail  */}
                                                                        <img className='w-16 rounded-lg'
                                                                            src={thumbnail} alt="thumbnail" />
                                                                    </th>
                                                                    {/* snack Title  */}
                                                                    <td style={{ color: mode === 'dark' ? 'white' : 'black' }} className="px-6 py-4">
                                                                        {item.snacks.title}
                                                                    </td>
                                                                    {/* snack Category  */}
                                                                    <td style={{ color: mode === 'dark' ? 'white' : 'black' }} className="px-6 py-4">
                                                                        {item.snacks.category}
                                                                    </td>
                                                                    {/* snack Date  */}
                                                                    <td style={{ color: mode === 'dark' ? 'white' : 'black' }} className="px-6 py-4">
                                                                        {date}
                                                                    </td>
                                                                    {/* Delete snack  */}
                                                                    <td onClick={() => deleteSnacks(id)} style={{ color: mode === 'dark' ? 'white' : 'black' }} className="px-6 py-4">
                                                                        <button className=' px-4 py-1 rounded-lg text-white font-bold bg-red-500'>
                                                                            Delete
                                                                        </button>
                                                                    </td>
                                                                </tr>
                                                            </tbody>
                                                        )
                                                    })}</>
                                                :
                                                <>
                                                    <h1>Not Found</h1>
                                                </>
                                            }
                                        </table>

                                    </div>
                                </div>
                            </TabPanel>

                            {/* drink  */}
                            <TabPanel>
                                <div className='  px-4 md:px-0 mb-16'>
                                    <h1 className=' text-center mb-5 text-3xl font-semibold underline' style={{ color: mode === 'dark' ? 'white' : '' }}>Drinks Details</h1>
                                    <div className=" flex justify-end">
                                        <Link to={'/createdrink'}>
                                            <button
                                                type="button"
                                                style={{
                                                    background: mode === 'dark'
                                                        ? 'rgb(226, 232, 240)'
                                                        : 'rgb(55, 179, 77)',
                                                    color: mode === 'dark'
                                                        ? 'black'
                                                        : 'white'
                                                }}
                                                className='px-8 py-2' > <div className="flex gap-2 items-center">
                                                    Create Drink
                                                </div></button>
                                        </Link>
                                    </div>
                                    <div className="relative overflow-x-auto ">
                                        <table className="w-full border-2 border-white shadow-md text-sm text-left text-gray-500 dark:text-gray-400">
                                            <thead style={{
                                                background: mode === 'dark'
                                                    ? 'white'
                                                    : 'rgb(55, 179, 77)'
                                            }}
                                                className="text-xs " >
                                                <tr>
                                                    <th style={{ color: mode === 'dark' ? 'rgb(55, 179, 77)' : 'white' }} scope="col" className="px-6 py-3">
                                                        S.No
                                                    </th>
                                                    <th style={{ color: mode === 'dark' ? 'rgb(55, 179, 77)' : 'white' }} scope="col" className="px-6 py-3">
                                                        Thumbnail
                                                    </th>
                                                    <th style={{ color: mode === 'dark' ? 'rgb(55, 179, 77)' : 'white' }} scope="col" className="px-6 py-3">
                                                        Title
                                                    </th>
                                                    <th style={{ color: mode === 'dark' ? 'rgb(55, 179, 77)' : 'white' }} scope="col" className="px-6 py-3">
                                                        Category
                                                    </th>
                                                    <th style={{ color: mode === 'dark' ? 'rgb(55, 179, 77)' : 'white' }} scope="col" className="px-6 py-3">
                                                        Date
                                                    </th>
                                                    <th style={{ color: mode === 'dark' ? 'rgb(55, 179, 77)' : 'white' }} scope="col" className="px-6 py-3">
                                                        Action
                                                    </th>
                                                </tr>
                                            </thead>

                                            {/* tbody  */}
                                            {getAllDrink.length > 0
                                                ?
                                                <>
                                                    {getAllDrink.map((item, index) => {
                                                        const { thumbnail, date, id } = item;
                                                        console.log(item)
                                                        return (
                                                            <tbody key={index}>
                                                                <tr className=" border-b-2" style={{ background: mode === 'dark' ? 'rgb(55, 179, 77)' : 'white' }}>
                                                                    {/* S.No   */}
                                                                    <td style={{ color: mode === 'dark' ? 'white' : 'black' }} className="px-6 py-4">
                                                                        {index + 1}.
                                                                    </td>
                                                                    {/* drink Thumbnail  */}
                                                                    <th style={{ color: mode === 'dark' ? 'white' : 'black' }} scope="row" className="px-6 py-4 font-medium ">
                                                                        {/* thumbnail  */}
                                                                        <img className='w-16 rounded-lg'
                                                                            src={thumbnail} alt="thumbnail" />
                                                                    </th>
                                                                    {/* drink Title  */}
                                                                    <td style={{ color: mode === 'dark' ? 'white' : 'black' }} className="px-6 py-4">
                                                                        {item.drinks.title}
                                                                    </td>
                                                                    {/* drink Category  */}
                                                                    <td style={{ color: mode === 'dark' ? 'white' : 'black' }} className="px-6 py-4">
                                                                        {item.drinks.category}
                                                                    </td>
                                                                    {/* drink Date  */}
                                                                    <td style={{ color: mode === 'dark' ? 'white' : 'black' }} className="px-6 py-4">
                                                                        {date}
                                                                    </td>
                                                                    {/* Delete drink  */}
                                                                    <td onClick={() => deleteDrinks(id)} style={{ color: mode === 'dark' ? 'white' : 'black' }} className="px-6 py-4">
                                                                        <button className=' px-4 py-1 rounded-lg text-white font-bold bg-red-500'>
                                                                            Delete
                                                                        </button>
                                                                    </td>
                                                                </tr>
                                                            </tbody>
                                                        )
                                                    })}</>
                                                :
                                                <>
                                                    <h1>Not Found</h1>
                                                </>
                                            }
                                        </table>

                                    </div>
                                </div>
                            </TabPanel>

                            {/* blog  */}
                            <TabPanel>
                                <div className='  px-4 md:px-0 mb-16'>
                                    <h1 className=' text-center mb-5 text-3xl font-semibold underline' style={{ color: mode === 'dark' ? 'white' : '' }}>Kitchen Tips Details</h1>
                                    <div className=" flex justify-end">
                                        <Link to={'/createblog'}>
                                            <button
                                                type="button"
                                                style={{
                                                    background: mode === 'dark'
                                                        ? 'rgb(226, 232, 240)'
                                                        : 'rgb(55, 179, 77)',
                                                    color: mode === 'dark'
                                                        ? 'black'
                                                        : 'white'
                                                }}
                                                className='px-8 py-2' > <div className="flex gap-2 items-center">
                                                    Create Tip
                                                </div></button>
                                        </Link>
                                    </div>
                                    <div className="relative overflow-x-auto ">
                                        <table className="w-full border-2 border-white shadow-md text-sm text-left text-gray-500 dark:text-gray-400">
                                            <thead style={{
                                                background: mode === 'dark'
                                                    ? 'white'
                                                    : 'rgb(55, 179, 77)'
                                            }}
                                                className="text-xs " >
                                                <tr>
                                                    <th style={{ color: mode === 'dark' ? 'rgb(55, 179, 77)' : 'white' }} scope="col" className="px-6 py-3">
                                                        S.No
                                                    </th>
                                                    <th style={{ color: mode === 'dark' ? 'rgb(55, 179, 77)' : 'white' }} scope="col" className="px-6 py-3">
                                                        Thumbnail
                                                    </th>
                                                    <th style={{ color: mode === 'dark' ? 'rgb(55, 179, 77)' : 'white' }} scope="col" className="px-6 py-3">
                                                        Title
                                                    </th>
                                                    <th style={{ color: mode === 'dark' ? 'rgb(55, 179, 77)' : 'white' }} scope="col" className="px-6 py-3">
                                                        Category
                                                    </th>
                                                    <th style={{ color: mode === 'dark' ? 'rgb(55, 179, 77)' : 'white' }} scope="col" className="px-6 py-3">
                                                        Date
                                                    </th>
                                                    <th style={{ color: mode === 'dark' ? 'rgb(55, 179, 77)' : 'white' }} scope="col" className="px-6 py-3">
                                                        Action
                                                    </th>
                                                </tr>
                                            </thead>

                                            {/* tbody  */}
                                            {getAllBlog.length > 0
                                                ?
                                                <>
                                                    {getAllBlog.map((item, index) => {
                                                        const { thumbnail, date, id } = item;
                                                        console.log(item)
                                                        return (
                                                            <tbody key={index}>
                                                                <tr className=" border-b-2" style={{ background: mode === 'dark' ? 'rgb(55, 179, 77)' : 'white' }}>
                                                                    {/* S.No   */}
                                                                    <td style={{ color: mode === 'dark' ? 'white' : 'black' }} className="px-6 py-4">
                                                                        {index + 1}.
                                                                    </td>
                                                                    {/* blog Thumbnail  */}
                                                                    <th style={{ color: mode === 'dark' ? 'white' : 'black' }} scope="row" className="px-6 py-4 font-medium ">
                                                                        {/* thumbnail  */}
                                                                        <img className='w-16 rounded-lg'
                                                                            src={thumbnail} alt="thumbnail" />
                                                                    </th>
                                                                    {/* blog Title  */}
                                                                    <td style={{ color: mode === 'dark' ? 'white' : 'black' }} className="px-6 py-4">
                                                                        {item.blogs.title}
                                                                    </td>
                                                                    {/* blog Category  */}
                                                                    <td style={{ color: mode === 'dark' ? 'white' : 'black' }} className="px-6 py-4">
                                                                        {item.blogs.category}
                                                                    </td>
                                                                    {/* blog Date  */}
                                                                    <td style={{ color: mode === 'dark' ? 'white' : 'black' }} className="px-6 py-4">
                                                                        {date}
                                                                    </td>
                                                                    {/* Delete blog  */}
                                                                    <td onClick={() => deleteBlogs(id)} style={{ color: mode === 'dark' ? 'white' : 'black' }} className="px-6 py-4">
                                                                        <button className=' px-4 py-1 rounded-lg text-white font-bold bg-red-500'>
                                                                            Delete
                                                                        </button>
                                                                    </td>
                                                                </tr>
                                                            </tbody>
                                                        )
                                                    })}</>
                                                :
                                                <>
                                                    <h1>Not Found</h1>
                                                </>
                                            }
                                        </table>

                                    </div>
                                </div>
                            </TabPanel>



                            <div>{/** = {clothe.map((item, index) => {
                                const { title, price, imageUrl, category, date } = item;
                                return (
                                    <tbody className=''>
                                        <tr className="bg-gray-50 border-b  dark:border-gray-700" style={{ backgroundColor: mode === 'dark' ? 'rgb(46 49 55)' : '', color: mode === 'dark' ? 'white' : '', }} >
                                            <td className="px-6 py-4 text-black " style={{ color: mode === 'dark' ? 'white' : '' }}>
                                                {index + 1}.
                                            </td>
                                            <th scope="row" className="px-6 py-4 font-medium text-black whitespace-nowrap">
                                                <img className='w-16' src={imageUrl} alt="img" />
                                            </th>
                                            <td className="px-6 py-4 text-black " style={{ color: mode === 'dark' ? 'white' : '' }}>
                                                {title}
                                            </td>
                                            <td className="px-6 py-4 text-black " style={{ color: mode === 'dark' ? 'white' : '' }}>
                                                ${price}
                                            </td>
                                            <td className="px-6 py-4 text-black " style={{ color: mode === 'dark' ? 'white' : '' }}>
                                                {category}
                                            </td>
                                            <td className="px-6 py-4 text-black " style={{ color: mode === 'dark' ? 'white' : '' }}>
                                                {date}
                                            </td>
                                            <td className="px-6 py-4">
                                                <div className=" flex gap-2">
                                                    <div className=" flex gap-2 cursor-pointer text-black " style={{ color: mode === 'dark' ? 'white' : '' }}>
                                                        <div onClick={() => deleteClothe(item)}  >
                                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                                                <path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                                                            </svg>
                                                        </div>
                                                        <div onClick={() => edithandleClothes(item)}  >
                                                            <Link to={'/updateclothe'}>
                                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
                                                                </svg>
                                                            </Link>
                                                        </div>
                                                    </div>
                                                </div>
                                            </td>
                                        </tr>

                                    </tbody>
                                )
                            })} */}</div>

                        </Tabs>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default Dashboard
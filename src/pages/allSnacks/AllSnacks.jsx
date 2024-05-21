import React, { useContext } from 'react'
import myContext from '../../context/data/myContext';
import Layout from '../../components/layout/Layout';
import { useNavigate } from 'react-router';

function AllSnacks() {
    const context = useContext(myContext);
    const { mode, getAllSnack } = context;

    const navigate = useNavigate();
    return (
        <Layout>
            <section className="text-gray-600 body-font">
                <div className="container px-5 py-10 mx-auto max-w-7xl ">
                    {/* Top Heading  */}
                    <div className="mb-5">
                        <h1 className=' text-center text-2xl font-bold'
                            style={{ color: mode === 'dark' ? 'white' : 'black' }}>
                            All Snacks
                        </h1>
                    </div>
                    {/* Main Content  */}
                    <div className="flex flex-wrap justify-center -m-4 mb-5">
                        {/* Card 1  */}
                        {getAllSnack.length > 0
                            ?
                            <>
                                {getAllSnack.map((item, index) => {
                                    const { thumbnail, id, date } = item
                                    console.log(item)
                                    return (
                                        <div className="p-4 md:w-1/3" key={index}>
                                            <div
                                                style={{
                                                    background: mode === 'dark'
                                                        ? 'rgb(55, 179, 77)'
                                                        : 'white',
                                                    borderBottom: mode === 'dark'
                                                        ?
                                                        ' 4px solid rgb(226, 232, 240)'
                                                        : ' 4px solid rgb(55, 179, 77)'
                                                }}
                                                className={`h-full shadow-lg  hover:-translate-y-1 cursor-pointer hover:shadow-gray-400
                                                ${mode === 'dark'
                                                    ? 'shadow-gray-700'
                                                    : 'shadow-xl'
                                                    } 
                                                rounded-xl overflow-hidden`} 
                                            >
                                                {/* snack Thumbnail  */}
                                                <img onClick={() => navigate(`/snackinfo/${id}`)} className=" w-full" src={thumbnail} alt="snack" />

                                                {/* Top Items  */}
                                                <div className="p-6">
                                                    {/* snack Date  */}
                                                    <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1" style={{
                                                        color: mode === 'dark'
                                                            ? 'rgb(226, 232, 240)'
                                                            : ' #373737'
                                                    }}>
                                                        {date}
                                                    </h2>

                                                    {/* snack Title  */}
                                                    <h1 className="title-font text-lg font-bold text-gray-900 mb-3" style={{
                                                        color: mode === 'dark'
                                                            ? 'rgb(226, 232, 240)'
                                                            : ' #373737'
                                                    }}>
                                                        {item.snacks.title}
                                                    </h1>

                                                    {/* snack Description  */}
                                                    <p className="leading-relaxed mb-3" style={{
                                                        color: mode === 'dark'
                                                            ? 'rgb(226, 232, 240)'
                                                            : ' #373737'
                                                    }}>
                                                       {item.snacks.category}
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })}
                            </>
                            :
                            <>
                                <h1 className='text-xl font-bold'>Not Found</h1>
                            </>
                        }
                    </div>
                </div>
            </section >
        </Layout >
    )
}

export default AllSnacks
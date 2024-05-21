import React, { useContext, useEffect, useState } from 'react'
import myContext from '../../context/data/myContext';
import { useParams } from 'react-router';
import { Timestamp, addDoc, collection, doc, getDoc, onSnapshot, orderBy, query } from 'firebase/firestore';
import { fireDb } from '../../firebase/FirebaseConfig';
import Layout from '../../components/layout/Layout';
import Loader from '../../components/loader/Loader';
import Comment from '../../components/comment/Comment';
import toast from 'react-hot-toast';

function AboutUs() {
    const context = useContext(myContext);
    const { mode, } = context;

    const params = useParams()




    return (
        <Layout>
            <section className="rounded-lg h-full overflow-hidden max-w-4xl mx-auto px-4 ">
                <div className=" py-4 lg:py-8">
                    <div>
                        <h1 style={{ color: mode === 'dark' ? 'white' : 'black' }}
                            className=' flex justify-center text-xl md:text-2xl lg:text-4xl font-semibold'>
                            About Us
                        </h1>
                        {/* title And date  */}
                        <div className="flex flex-col justify-center mb-3">
                            <h2 style={{ color: mode === 'dark' ? 'white' : 'black' }}
                            className=' flex  text-xl md:text-2xl lg:text-2xl font-semibold mb-2 mt-12'>Who We Are</h2>
                            <p style={{ color: mode === 'dark' ? 'white' : 'black' }}  className=' text-xl my-2'>
                                Home cooks are our heroes—it's as simple as that. Allrecipes is a community built by and for kitchen experts: The cooks who will dedicate the weekend to a perfect beef bourguignon but love the simplicity of a slow-cooker rendition, too. The bakers who labor over a showstopping 9-layer cake but will just as happily doctor boxed brownies for a decadent weeknight dessert. The entertainers who just want a solid snack spread, without tons of dirty dishes at the end of the night.
                                Most importantly, Allrecipes connects home cooks with their greatest sources of inspiration — other home cooks. We're the world's leading digital food brand, and that inspires us to do everything possible to keep our community connected. Sixty-million home cooks deserve no less.
                            </p>
                            <h2 style={{ color: mode === 'dark' ? 'white' : 'black' }}
                            className=' flex  text-xl md:text-2xl lg:text-2xl font-semibold mb-2 mt-12'>The Allrecipes Community
                            </h2>
                            <p style={{ color: mode === 'dark' ? 'white' : 'black' }}  className=' text-xl my-2'>
                            The heart of Allrecipes is our community of home cooks who share their beloved family recipes, create new recipes, and photograph, rate, and review each other's recipes. Each week, more than 15 million registered members add more than 2,000 recipe ratings, 800 new recipe photos, and almost 200 new recipes to the site. And every minute of every day, 27 people are saving recipes they love or want to try later.
                            </p>
                        </div>
                    </div>

                </div>
            </section>
        </Layout>
    )
}

export default AboutUs
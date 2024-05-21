import React, { useState, useContext, useEffect } from 'react';
import { Editor } from '@tinymce/tinymce-react';
import { BsFillArrowLeftCircleFill } from "react-icons/bs"
import myContext from '../../../context/data/myContext';
import { Link, useNavigate, useParams } from "react-router-dom";
import {
    Button,
    Typography,
} from "@material-tailwind/react";
import { Timestamp, doc, getDoc, updateDoc } from 'firebase/firestore';
import toast from 'react-hot-toast';
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage';
import { fireDb, storage } from '../../../firebase/FirebaseConfig';

function EditBlog() {
    const context = useContext(myContext);
    const { mode } = context;


    const navigate = useNavigate();
    const { id } = useParams();

    const [blogs, setBlogs] = useState({
        title: '',
        category: '',
        content: '',
        thumbnail: '',
        time: Timestamp.now(),
    });
    const [thumbnail, setThumbnail] = useState();

    useEffect(() => {
        fetchBlogData();
    }, []);

    const fetchBlogData = async () => {
        try {
            const blogDocRef = doc(fireDb, 'blogPost', 'KNC2UzIBtaIClvFZfSQh');
            const blogDocSnap = await getDoc(blogDocRef);
            if (blogDocSnap.exists()) {
                const blogData = blogDocSnap.data();
                setBlogs(blogData.blogs);
                setThumbnail(blogData.blogs.thumbnail); // Set the thumbnail state with the correct value
                setText(blogData.blogs.content); // Set the text state
            } else {
                toast.error('Blog not found');
                navigate('/dashboard');
            }
        } catch (error) {
            console.error(error);
            toast.error('Failed to fetch blog data');
        }
    }

    const editBlog = async () => {
        if (blogs.title === "" || blogs.category === "" || blogs.content === "") {
            toast.error('Please Fill All Fields');
            return;
        }

        setLoading(true);
        try {
            if (thumbnail) {
                const imageRef = ref(storage, `blogimage/${thumbnail.name}`);
                await uploadBytes(imageRef, thumbnail);
                const imageUrl = await getDownloadURL(imageRef);
                setBlogs({ ...blogs, thumbnail: imageUrl });
            }

            const blogDocRef = doc(fireDb, 'blogPost', id);
            await updateDoc(blogDocRef, { blogs });
            navigate('/dashboard');
            toast.success('Blog Updated Successfully');
        } catch (error) {
            console.error(error);
            toast.error('Failed to update blog');
        }
        setLoading(false);
    };

    const [text, setText] = useState('');

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    //* Create markup function 
    function createMarkup(c) {
        return { __html: c };
    }
    return (
        <div className=' container mx-auto max-w-5xl py-6'>
            <div className="p-5" style={{
                background: mode === 'dark'
                    ? '#353b48'
                    : 'rgb(226, 232, 240)',
                borderBottom: mode === 'dark'
                    ? ' 4px solid rgb(226, 232, 240)'
                    : ' 4px solid rgb(55, 179, 77)'
            }}>
                {/* Top Item  */}
                <div className="mb-2 flex justify-between">
                    <div className="flex gap-2 items-center">
                        {/* Dashboard Link  */}
                        <Link to={'/dashboard'}>
                            <BsFillArrowLeftCircleFill size={25} />
                        </Link>

                        {/* Text  */}
                        <Typography
                            variant="h4"
                            style={{
                                color: mode === 'dark'
                                    ? 'white'
                                    : 'black'
                            }}
                        >
                            Edit blog
                        </Typography>
                    </div>
                </div>

                {/* main Content  */}
                <div className="mb-3">
                    {/* Thumbnail  */}
                    {(typeof thumbnail === 'string' || thumbnail instanceof File) && (
                        <img
                            className="w-full rounded-md mb-3"
                            src={typeof thumbnail === 'string' ? thumbnail : URL.createObjectURL(thumbnail)}
                            alt="thumbnail"
                        />
                    )}

                    {/* Text  */}
                    <Typography
                        variant="small"
                        color="blue-gray"
                        className="mb-2 font-semibold"
                        style={{ color: mode === 'dark' ? 'white' : 'black' }}
                    >
                        Upload Thumbnail
                    </Typography>

                    {/* First Thumbnail Input  */}
                    <input
                        type="file"
                        label="Upload thumbnail"
                        className="shadow-[inset_0_0_4px_rgba(0,0,0,0.6)] placeholder-black w-full rounded-md p-1"
                        style={{
                            background: mode === 'dark'
                                ? '#dcdde1'
                                : 'rgb(226, 232, 240)'
                        }}
                        onChange={(e) => setThumbnail(e.target.files[0])}
                    />
                </div>

                {/* Second Title Input */}
                <div className="mb-3">
                    <input
                        label="Enter your Title"
                        className={`shadow-[inset_0_0_4px_rgba(0,0,0,0.6)] w-full rounded-md p-1.5 
         outline-none ${mode === 'dark'
                                ? 'placeholder-black'
                                : 'placeholder-black'}`}
                        placeholder="Enter Your Title"
                        style={{
                            background: mode === 'dark'
                                ? '#dcdde1'
                                : 'rgb(226, 232, 240)'
                        }}
                        name="title"
                        onChange={(e) => setBlogs({ ...blogs, title: e.target.value })}
                        value={blogs.title}
                    />
                </div>

                {/* Third Category Input  */}
                <div className="mb-3">
                    <input
                        label="Enter your Category"
                        className={`shadow-[inset_0_0_4px_rgba(0,0,0,0.6)] w-full rounded-md p-1.5 
         outline-none ${mode === 'dark'
                                ? 'placeholder-black'
                                : 'placeholder-black'}`}
                        placeholder="Enter Your Category"
                        style={{
                            background: mode === 'dark'
                                ? '#dcdde1'
                                : 'rgb(226, 232, 240)'
                        }}
                        name="category"
                        onChange={(e) => setBlogs({ ...blogs, category: e.target.value })}
                        value={blogs.category}

                    />
                </div>

                {/* Four Editor  */}
                <Editor
                    apiKey='p53dqss8r6sw1vthip39ukgkkscn1aljtoq8sf0z9v9ssuhl'
                    initialValue={text}
                    onEditorChange={(newValue, editor) => {
                        setBlogs({ ...blogs, content: newValue });
                        setText(editor.getContent({ format: 'text' }));
                    }}
                    onInit={(evt, editor) => {
                        setText(editor.getContent({ format: 'text' }));
                    }}
                    init={{
                        plugins: 'a11ychecker advcode advlist advtable anchor autocorrect autolink autoresize autosave casechange charmap checklist code codesample directionality editimage emoticons export footnotes formatpainter fullscreen help image importcss inlinecss insertdatetime link linkchecker lists media mediaembed mentions mergetags nonbreaking pagebreak pageembed permanentpen powerpaste preview quickbars save searchreplace table tableofcontents template  tinydrive tinymcespellchecker typography visualblocks visualchars wordcount'
                    }}
                />

                {/* Five Submit Button  */}
                <Button className=" w-full mt-5"
                    onClick={editBlog}
                    style={{
                        background: mode === 'dark'
                            ? 'rgb(226, 232, 240)'
                            : 'rgb(55, 179, 77)',
                        color: mode === 'dark'
                            ? 'rgb(55, 179, 77)'
                            : 'rgb(226, 232, 240)'
                    }}
                >
                    Send
                </Button>

                {/* Six Preview Section  */}
                <div className="">
                    <h1 className=" text-center mb-3 text-2xl">Preview</h1>
                    <div className="content">
                        <div className={`[&> h1]:text-[32px] [&>h1]:font-bold  [&>h1]:mb-2.5
                ${mode === 'dark' ? '[&>h1]:text-[#ff4d4d]' : '[&>h1]:text-black'}

                [&>h2]:text-[24px] [&>h2]:font-bold [&>h2]:mb-2.5
                ${mode === 'dark' ? '[&>h2]:text-white' : '[&>h2]:text-black'}

                [&>h3]:text-[18.72] [&>h3]:font-bold [&>h3]:mb-2.5
                ${mode === 'dark' ? '[&>h3]:text-white' : '[&>h3]:text-black'}

                [&>h4]:text-[16px] [&>h4]:font-bold [&>h4]:mb-2.5
                ${mode === 'dark' ? '[&>h4]:text-white' : '[&>h4]:text-black'}

                [&>h5]:text-[13.28px] [&>h5]:font-bold [&>h5]:mb-2.5
                ${mode === 'dark' ? '[&>h5]:text-white' : '[&>h5]:text-black'}

                [&>h6]:text-[10px] [&>h6]:font-bold [&>h6]:mb-2.5
                ${mode === 'dark' ? '[&>h6]:text-white' : '[&>h6]:text-black'}

                [&>p]:text-[16px] [&>p]:mb-1.5
                ${mode === 'dark' ? '[&>p]:text-[#7efff5]' : '[&>p]:text-black'}

                [&>ul]:list-disc [&>ul]:mb-2
                ${mode === 'dark' ? '[&>ul]:text-white' : '[&>ul]:text-black'}

                [&>ol]:list-decimal [&>li]:mb-10
                ${mode === 'dark' ? '[&>ol]:text-white' : '[&>ol]:text-black'}

                [&>li]:list-decimal [&>ol]:mb-2
                ${mode === 'dark' ? '[&>ol]:text-white' : '[&>ol]:text-black'}

                [&>img]:rounded-lg
                `} dangerouslySetInnerHTML={createMarkup(blogs.content)}></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EditBlog
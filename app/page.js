"use client";
import React, {useState} from 'react';
import styles from './page.module.css';
import {IoIosArrowBack, IoIosArrowForward, IoIosLogOut} from "react-icons/io";
import {FiSearch} from "react-icons/fi";
import {IoCopyOutline} from "react-icons/io5";



const Page = () => {

    const [myInp,setMyInp]=useState("");
    const [webSrc,setWebSrc]=useState("");

    const handleFn=()=>{
        setWebSrc(myInp);
    }
    const copyToClipboard = async () => {
        try {
            // Use navigator.clipboard.writeText to copy text to the clipboard
            await navigator.clipboard.writeText(webSrc);

            // Provide user feedback if needed
            console.log('Data copied to clipboard:', webSrc);
        } catch (err) {
            // Handle any errors that might occur
            console.error('Unable to copy to clipboard', err);
        }
    };

    return (
        <div className={` flex justify-center overflow-hidden`}>
            <div className="absolute left-0 top-0 flex place-items-center before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px] z-[-1]"></div>
            <div className={`${styles.window} border-2 mt-28 mb-5 `}>
                <div className={`w-full h-[5vh] rounded-t-[10px] bg-slate-200 flex justify-between`}>
                    <div className={`flex`}>
                    <div className={` w-24 h-10 items-center flex gap-2 justify-center`}>
                        <div className={`w-4 h-4 bg-red-400 rounded-full duration-150 active:scale-90 hover:cursor-pointer`}></div>
                        <div className={`w-4 h-4 bg-yellow-400 rounded-full duration-150 active:scale-90 hover:cursor-pointer`}></div>
                        <div className={`w-4 h-4 bg-green-400 rounded-full duration-150 active:scale-90 hover:cursor-pointer`}></div>
                    </div>
                    <div className={`w-12 h-10 items-center flex gap-1 justify-center`}>
                        <IoIosArrowBack size={20} className={`text-slate-400 bg-slate-100 rounded w-12 h-6 duration-150 active:scale-90 hover:cursor-pointer`}/>
                        <IoIosArrowForward size={20} className={`text-slate-400 bg-slate-100 rounded w-12 h-6 duration-150 active:scale-90 hover:cursor-pointer`}/>
                    </div>
                </div>
                    <div className={`w-1/2 h-10 items-center flex gap-2 justify-center `}>
                        <input type={"text"}
                               className={`w-full h-6 bg-white rounded px-3 text-slate-400 text-sm outline-0`}
                               placeholder={"Enter url here..."}
                               onBlur={(e)=>setMyInp(e.target.value)}
                        />
                        <FiSearch size={20} className={`text-slate-500 active:scale-90 duration-150 hover:cursor-pointer`} onClick={handleFn}/>
                    </div>

                    <div className={`w-20 h-10 items-center flex gap-1 justify-center pr-5`}>
                        <IoIosLogOut size={20} className={`text-slate-500 bg-slate-100 rounded w-12 h-6 -rotate-90 p-1`}/>
                        <IoCopyOutline size={20} className={`text-slate-500 bg-slate-100 rounded w-12 h-6 p-1 duration-150 active:scale-90 hover:cursor-pointer`} onClick={copyToClipboard} />
                    </div>



                </div>
                <div className={`h-[65vh]  rounded-b-[10px] bg-white`}>

                    <iframe
                        src={webSrc}
                        width="1004"
                        title="Embedded Website"
                        className={`rounded-b-[10px] h-[65vh]`}
                    />

                </div>

            </div>



        </div>
    );
};

export default Page;
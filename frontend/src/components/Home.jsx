import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
    return (
        <div className="mx-auto w-full max-w-7xl">
            <aside className="relative overflow-hidden text-black rounded-lg sm:mx-16 mx-2 sm:py-16 ">
                <div className="relative z-10 max-w-screen-xl px-2  pb-20 pt-10 sm:py-24 mx-auto sm:px-6 lg:px-8 ml-3.5">
                    <div className="max-w-xl sm:mt-1 mt-80 space-y-8 text-center sm:text-right sm:ml-auto">
                        <h2 className="text-4xl font-bold sm:text-5xl">
                            myProfession.com
                            <span className="hidden sm:block text-4xl">
                                Get your dream job
                            </span>
                            <span>
                                <input
                                    className="border-2 border-gray-300 bg-white h-10 px-5 pr-16 rounded-lg text-sm focus:outline-none w-full"
                                    type="text"
                                    name="searchInput"
                                    id="searchInput"
                                />
                            </span>
                        </h2>
                    </div>
                </div>

                <div className="absolute inset-0 w-full sm:my-20 sm:pt-1 pt-12 h-full ">
                    <img
                        className="w-96"
                        src="https://i.ibb.co/5BCcDYB/Remote2.png"
                        alt="image1"
                    />
                </div>
            </aside>
        </div>
    );
}

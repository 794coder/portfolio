


import React from 'react';

const Page = () => {
    return (
        <>
                <div className="bg-black">
                <div className="h-screen w-full " style={{
                    background:"url(/Profile.jpg)",
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "contain",
                    backgroundPosition: "top center",
                }}>
                    <div className="flex flex-col justify-end items-center h-screen text-white p-10">
                        <h1 className="text-3xl font-bold">
                        Hamza Goraya
                        </h1>
                        <h3 className="text-xl font-bold">I&#39;m a full stack developer.</h3>
                    </div>
                </div>
                </div>
        </>
    );
};

export default Page;
import React from 'react';
import CarouselComponent from '../components/carousel';
import crowLogo from '../assets/crowLogo.jpg';

const Home = () => {
    const imageUrls = [
        crowLogo,
        crowLogo,
        crowLogo
        // ... more image URLs
      ];

    return (
        <div className="">
            <b className="text-3xl pl-8 pr-8 ">CROW REPORT</b>
            {/* ... additional content ... */}
            
            <div className='flex flex-row'>
                <div className='topicsRow1 w-4/5 p-8'>
                <div className='flex justify-between space-x-16 px-4'>
                <a href="#" class="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                    <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021</h5>
                    <p class="font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
                </a>
                <a href="#" class="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                    <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021</h5>
                    <p class="font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
                </a>
                <a href="#" class="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                    <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021</h5>
                    <p class="font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
                </a>
                </div>
                <div className='py-8'>
                    <CarouselComponent images={imageUrls}/>
                </div>
                
                </div>
                <div className='w-1/5 h-screen px-2'>
                    <div className='h-screen border-slate-600 border-2 border-dotted text-center'>ad space</div>
                </div>
            </div>
        </div>
    );
};

export default Home;

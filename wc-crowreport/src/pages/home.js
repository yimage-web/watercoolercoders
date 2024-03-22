import React from 'react';
import CarouselComponent from '../components/carousel';
import crowLogo from '../assets/crowLogo.jpg';
import Card from '../components/card';
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
                <div className='topics w-4/5 p-8'>
                    <div className='flex justify-between space-x-8 px-4'>
                        <Card 
                        title="Noteworthy technology acquisitions 2021" 
                        content="Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order." 
                        />
                        <Card 
                        title="Noteworthy technology acquisitions 2021" 
                        content="Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order." 
                        />
                        
                        <Card 
                        title="Noteworthy technology acquisitions 2021" 
                        content="Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order." 
                        />
                    </div>

                    <div className='py-8 pb-14'>
                        <CarouselComponent images={imageUrls}/>
                    </div>

                    <div className='flex justify-between space-x-8 px-4'>
                        <Card 
                        title="Noteworthy technology acquisitions 2021" 
                        content="Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order." 
                        />
                        <Card 
                        title="Noteworthy technology acquisitions 2021" 
                        content="Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order." 
                        />
                        
                        <Card 
                        title="Noteworthy technology acquisitions 2021" 
                        content="Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order." 
                        />
                    </div>

                    <div className='py-8 pb-14'>
                        <CarouselComponent images={imageUrls}/>
                    </div>

                    <div className='flex justify-between space-x-8 px-4'>
                        <Card 
                        title="Noteworthy technology acquisitions 2021" 
                        content="Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order." 
                        />
                        <Card 
                        title="Noteworthy technology acquisitions 2021" 
                        content="Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order." 
                        />
                        
                        <Card 
                        title="Noteworthy technology acquisitions 2021" 
                        content="Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order." 
                        />
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

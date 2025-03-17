import React from 'react';

const Home = () => {
  return (
    <div className='min-h-screen flex-[3] transition-all duration-500 dark:bg-black dark:text-white'>
      <main className='flex max-w-[1000px] flex-col gap-10 p-5 md:mx-10 md:py-14'>
        <div className="space-y-5">
          <h1 className='text-2xl font-bold md:text-4xl'>About</h1>
           <p className='text-sm text-gray-600 dark:text-gray-400 md:text-base'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illum, repellendus! At sequi quos fugit corrupti quas accusamus dolor soluta veniam. Earum voluptates itaque sequi enim cupiditate tempora commodi error corrupti ducimus deserunt. Quibusdam facilis doloremque nemo? Vel voluptas architecto soluta corrupti reprehenderit cupiditate ducimus! Ut fugit sint cum consequatur assumenda.</p>
        </div>

        <div className="space-y-10">
         <h1 className='text-2xl font-bold md:text-4xl'>Experience</h1>
          <div className="flex flex-col lg:flex-row lg:gap-20">
           {/* Contenido acá */}

           <ul>
            <li className="relative flex flex-col gap-1 border-l p-6 before:absolute before:left-[-6px] before:top-1/2 before:h-3 before:w-3 before:-translate-y-1/2 before:rounded-full before:bg-black dark:before:bg-white before:transform">
             <span className='text-lg font-semibold'>Junior Web Developer</span>
             <span className='font-light'> Company X</span>
             <span className='text-sm text-gray-400'>2016-2018</span>
             <p className='text-sm text-gray-600 dark:text-gray-400'>Let it be the pain itself, it will be followed, adipisicing the developer.
               The error of the pains of hatred, blinded by the pleasure he receives, he is bound to be pursued, he will do the reason of the fall 
               of the elders of the accusers! To be repulsed, nothing of the mind? They pursue the accusers with free hatred!</p>
               

            </li>

            <li className="relative flex flex-col gap-1 border-l p-6 before:absolute before:left-[-6px] before:top-1/2 before:h-3 before:w-3 before:-translate-y-1/2 before:rounded-full before:bg-black dark:before:bg-white before:transform">
             <span className='text-lg font-semibold'>Junior Web Developer</span>
             <span className='font-light'> Company Y</span>
             <span className='text-sm text-gray-400'>2019-2021</span>
             <p className='text-sm text-gray-600 dark:text-gray-400'>Let it be the pain itself, it will be followed, adipisicing the developer.
               The error of the pains of hatred, blinded by the pleasure he receives, he is bound to be pursued, he will do the reason of the fall 
               of the elders of the accusers! To be repulsed, nothing of the mind? They pursue the accusers with free hatred!</p>


            </li>


          </ul>


          <ul>
            <li className="relative flex flex-col gap-1 border-l p-6 before:absolute before:left-[-6px] before:top-1/2 before:h-3 before:w-3 before:-translate-y-1/2 before:rounded-full before:bg-black dark:before:bg-white before:transform">
            <span className='text-lg font-semibold'>System Designer</span>
             <span className='font-light'> Company Z</span>
             <span className='text-sm text-gray-400'>2016-2018</span>
             <p className='text-sm text-gray-600 dark:text-gray-400'>Let it be the pain itself, it will be followed, adipisicing the developer.
               The error of the pains of hatred, blinded by the pleasure he receives, he is bound to be pursued, he will do the reason of the fall 
               of the elders of the accusers! To be repulsed, nothing of the mind? They pursue the accusers with free hatred!</p>
            </li>

            <li className="relative flex flex-col gap-1 border-l p-6 before:absolute before:left-[-6px] before:top-1/2 before:h-3 before:w-3 before:-translate-y-1/2 before:rounded-full before:bg-black dark:before:bg-white before:transform">
            <span className='text-lg font-semibold'>System Designer</span>
             <span className='font-light'> Company XY</span>
             <span className='text-sm text-gray-400'>2016-2018</span>
             <p className='text-sm text-gray-600 dark:text-gray-400'>Let it be the pain itself, it will be followed, adipisicing the developer.
               The error of the pains of hatred, blinded by the pleasure he receives, he is bound to be pursued, he will do the reason of the fall 
               of the elders of the accusers! To be repulsed, nothing of the mind? They pursue the accusers with free hatred!</p>
            </li>


          </ul>


          </div>
     </div>



     
      </main>
    </div>

  );
};

export default Home;

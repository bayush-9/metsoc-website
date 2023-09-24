import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import Anveshan from "../assets/Anveshan.png"
import Robo2 from "../assets/Robo2.png"
const Updates = () => {
  return (
  <>
  <Navbar/>
  <p className='text-4xl bold text-center m-auto'>Updates</p>


<section className="py-0 md:py-0 btn w-[90vw] h-full m-auto rounded-xl  text-white mt-12 ">
	<div className=' flex space-between lg:flex-column border '>
		<div><div className='p-10 py-20 '>
			<p className='m-auto text-[50px] sm:text-[55px] font-bold'>Important <br/> Announcements </p>
		</div></div>
		
		<div >
		<img
      src={Robo2}
      className='lg:max-w-sm  '
      alt='logo'
    />
		</div>
	</div>
</section>


<section className="py-0 md:py-0 w-[90vw] h-full m-auto text-white mt-12">
	
		

			<article className="flex flex-col bg-offwhite rounded-xl">
  <div className="flex flex-col flex-1 p-4 pb-4 text-left">
  <div className='flex'>
  <div>
    <p className="text-base lg:text-xl font-bold text-black">
      Anveshan 2023
    </p>
  </div>
  <div className='h-9 w-9 bg-black flex items-center justify-center ml-2'>
    <img
      className='h-8 w-8 rounded-full'
      src="https://media.licdn.com/dms/image/C4D0BAQFOqEhhWAl8oQ/company-logo_200_200/0/1617951714469?e=2147483647&v=beta&t=pT0ZQM5KVMIrdkdQab34XKPTbJHsm1KC0kpBbsq0z9A"
      alt="Image 1"
    />
  </div>
</div>

 
	<div className='flex space-x-20 pt-5'>
		
		<div className='flex justify-end'>
  <div>
    <p className="text-base lg:text-sm font-bold text-purple">
      www.anveshaniitbhu.ac.in
      <br />
      ----------------------------------------
      <br />
      ----------------------------------------
      <br />
      ----------------------------------------
      <br />
      ----------------------------------------
      <br />
      ----------------------------------------
    </p>
  </div>
  <div className='ml-auto pl-10'>
    <img
      src={Anveshan}
      className='h-25 border border-solid border-black mt-5 lg:ml-80 lg:h-30 w-60'
      alt='logo'
    />
  </div>
</div>

	</div>
	<div className='px-5'>
		<button className='text-white rounded-md px-2 py-0.5 mt-2 bg-purple'>
			Learn More
		</button>
	</div>
  </div>


    
			</article>
			
			<div className="flex flex-col flex-1 p-4 pb-4  ">
				<div className='text-grey bg-purple rounded-md p-1.5 font-bold pl-5'>Past News :</div>
				</div>
				
	
</section>
<section className="py-0 md:py-0 m-auto text-white mt-12">
	<div className='flex'>
		<div className='p-4 w-25 flex flex-col flex-1 spacex-2 lg:mx-20 '>
			<div className='text-white bg-purple text-center text-lg'>Maitri Shield Event</div>
			<div className='text-white bg-offwhite font-medium text-lg px-5 py-3'><p>The tournament was conducted succesfully on..............</p>
			<button className='text-white text-sm rounded-md px-1 py-0.5 mt-2 bg-purple'>
			Learn More
		</button>
			</div>
		</div>
		<div className='p-4 w-25 flex flex-col flex-1 spacex-2 lg:mx-20'>
		<div className='text-white bg-purple text-center text-lg'>MET Waste</div>
			<div className='text-white bg-offwhite font-medium text-lg px-5 py-3'><p>The seminar was conducted succesfully on..............</p>
			<button className='text-white text-sm rounded-md px-1 py-0.5 mt-2 bg-purple'>
			Learn More
		</button>
			</div>
			
		</div>
	</div>
	<div className='flex'>
		<div className='p-4 w-25 flex flex-col flex-1 spacex-2 lg:mx-20 '>
			<div className='text-white bg-purple text-center text-lg'>IIM Quiz</div>
			<div className='text-white bg-offwhite font-medium text-lg px-5 py-3'><p>The quiz was conducted succesfully on..............</p>
			<button className='text-white text-sm rounded-md px-1 py-0.5 mt-2 bg-purple'>
			Learn More
		</button>
			</div>
		</div>
		<div className='p-4 w-25 flex flex-col flex-1 spacex-2 lg:mx-20'>
		<div className='text-white bg-purple text-center text-lg'>Nabarun Sports Tournament</div>
			<div className='text-white bg-offwhite font-medium text-lg px-5 py-3'><p>The tournament was conducted succesfully on..............</p>
			<button className='text-white text-sm rounded-md px-1 py-0.5 mt-2 bg-purple'>
			Learn More
		</button>
			</div>
			
		</div>

	</div>

</section>
  <Footer/>
  </>
  )
}

export default Updates

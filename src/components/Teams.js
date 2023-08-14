import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import teams from "../assets/teams.png"

const Teams = () => {
  return (
   <>
    <Navbar/>
    <section className="py-0 md:py-0 btn w-[90vw] h-full m-auto rounded-xl text-white">
	<div className="container p-6 mx-auto space-y-8">
		<div className="w-[90%] h-full m-auto grid grid-cols-1  gap-x-10 gap-y-8 md:grid-cols-2 ">
			{/* First card */}
			<article className="flex flex-col rounded-xl">
				
				<div className="flex flex-col flex-1 p-0 text-center ">
				<p className='m-auto text-[50px] sm:text-[75px] font-bold'>Meet<br/>Our Team</p>
				</div>
			</article>
			<article className="flex flex-col rounded-xl">
      <div className="flex flex-col flex-1 p-0 text-center ">
				<p className='m-auto text-[50px] sm:text-[75px] font-bold'>
        <img src={teams} className='m-auto' alt='robot'/>
        </p>
				</div>
			</article>
			
		
		</div>
	</div>
</section>
    <Footer/>
  
   </>
  )
}

export default Teams

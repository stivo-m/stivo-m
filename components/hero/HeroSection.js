import React from "react";
import Navigation from "../navigation/Navigation";

function HeroSection() {
	return (
		<div className='bg-gray-700 w-full h-screen'>
			<Navigation />
			<div className='lg:flex lg:flex-row flex flex-col justify-between items-center align-start mt-10  mx-20 h-2/3  '>
				{/* left image */}
				<div className='text-white flex-1'>
					<h3 className='text-7xl lg:text-8xl font-light text-right'>Steven</h3>
					<h3 className='text-7xl lg:text-8xl font-black text-right text-white'>
						Maina
					</h3>

					<span className='w-4 bg-white h-1'></span>

					<p className='text-2xl lg:text-3xl font-black text-right text-yellow-500 my-3'>
						Software Engineer
					</p>

					{/* social links */}
				</div>
				{/* right description */}
				<div className='items-start text-left lg:ml-5 flex-1'>
					{/* introduction tagline  */}
					<p className='text-gray-500 font-bold '>-- Introduction</p>
					<h3 className='text-white font-bold text-4xl mt-2 mb-5'>
						Product designer and developer
					</h3>
					<p className='text-gray-300'>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur
						officia autem, nobis natus laboriosam animi! Voluptates temporibus
						quos sint iure.
					</p>
				</div>
			</div>
		</div>
	);
}

export default HeroSection;

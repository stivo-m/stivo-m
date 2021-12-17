import React from "react";
import DottedLabel from "../shared/DottedLabel";

function AboutSection() {
	return (
		<div className='w-full h-full bg-gray-800 mx-20 p-20 flex flex-col items-start lg:flex-row lg:items-start justify-between'>
			{/* left section */}
			<div className='text-left flex-1'>
				<DottedLabel text={"About me"} />
				<h3 className='text-gray-300 font-bold text-3xl mt-2 mb-5'>
					Get to know more about me
				</h3>
				<p className='text-gray-400 '>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur
					officia autem, nobis natus laboriosam animi! Voluptates temporibus
					quos sint iure.
				</p>
			</div>

			{/* right section */}
			<div className='text-left flex-1 my-10 lg:my-0'>
				<DottedLabel text={"Interests and Skills"} />
				<h3 className='text-gray-300 font-bold text-3xl mt-2 mb-5'>
					A diverse engineer
				</h3>
				<p className='text-gray-400 '>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur
					officia autem, nobis natus laboriosam animi! Voluptates temporibus
					quos sint iure.
				</p>
			</div>
		</div>
	);
}

export default AboutSection;

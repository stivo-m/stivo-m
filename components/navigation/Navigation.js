import React from "react";
import NavItem from "./NavItem";

function Navigation() {
	return (
		<div className='flex flex-row justify-between align-middle items-center mx-20'>
			<div>
				{/* logo here */}
				<h3 className='text-2xl text-yellow-500'>App Logo</h3>
			</div>
			<div className='flex flex-row justify-end my-10 '>
				<NavItem name={"Services"} isActive={true} />
				<NavItem name={"Works"} />
				<NavItem name={"Blog"} />
			</div>
		</div>
	);
}

export default Navigation;

import React from "react";

function NavItem({ name, isActive = false }) {
	return (
		<div
			className={
				isActive
					? "text-white text-lg px-5 flex flex-col justify-center align-middle items-center cursor-pointer transition-all group "
					: "text-gray-400 text-lg px-5 flex flex-col justify-center align-middle items-center cursor-pointer transition-all group hover:text-white"
			}
		>
			{name}

			<span
				className={
					isActive
						? "bg-yellow-500 w-2 h-2 rounded-full mt-2 transition-all "
						: "w-2 h-2 rounded-full mt-2 transition-all group-hover:bg-yellow-300"
				}
			></span>
		</div>
	);
}

export default NavItem;

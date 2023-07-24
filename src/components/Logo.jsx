import React from "react"

const Logo = () => {
	return (
		<div className='flex relative flex-row-reverse t-0 r-0 w-full h-20'>
			<a href='#' className='absolute h-full'>
				<img
					src='smartFridge.png'
					alt=''
					className='object-fit w-full h-full'
				/>
			</a>
		</div>
	)
}

export default Logo

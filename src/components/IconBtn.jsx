import React from "react"

const IconBtn = ({ iconSrc, altText }) => {
	return (
		<button className='flex absolute w-10 h-10 right-0 m-4 cursor-pointer hover:scale-125 duration-300'>
			<img src={iconSrc} alt={altText} className='object-fit w-full h-full' />
		</button>
	)
}

export default IconBtn

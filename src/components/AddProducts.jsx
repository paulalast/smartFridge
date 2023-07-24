import React from "react"
import IconBtn from "./IconBtn"
import Button from "./Button"
import SearchPanel from "./SearchPanel"

function AddProducts() {
	return (
		<div className='flex flex-col items-center absolute w-3/4 h-4/5 bg-white border-2'>
			<IconBtn iconSrc='exit.svg' altText='exit icon' />
			<div className='flex flex-col w-full h-full  mt-14 p-2'>
				<SearchPanel />
			</div>
			<Button buttonText='Włóż do lodówki' className='flex  bottom-0' />
		</div>
	)
}

export default AddProducts

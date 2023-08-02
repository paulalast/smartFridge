import React, { useState } from "react"
import Logo from "../components/Logo"
import Button from "../components/Button"
import AddProducts from "../components/AddProducts"

function EmptyFridgeHome() {
	const [isModalOpen, setIsModalOpen] = useState(false)

	const handleAddProductsClick = () => {
		setIsModalOpen(true)
		console.log("ok")
	}

	const handleCloseModal = () => {
		setIsModalOpen(false)
	}

	return (
		<div className='flex relative flex-col w-full h-full font-titleFont items-center justify-center'>
			<Logo />
			<div className='flex flex-col h-full items-center justify-center '>
				<h1>Empty fridge!</h1>
				<Button buttonText='Add products' onClick={handleAddProductsClick} />
				<Button buttonText='Add basic products' />
			</div>

			{isModalOpen && <AddProducts onClose={handleCloseModal} />}
		</div>
	)
}

export default EmptyFridgeHome

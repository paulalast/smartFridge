import React, { useState } from "react"
import Logo from "../components/Logo"
import Button from "../components/Button"
import AddProducts from "../components/AddProducts"
import AddBasicList from "../components/AddBasicList"

function EmptyFridgeHome() {
	const [isModalOpen, setIsModalOpen] = useState(false)
	const [isSecondModalOpen, setIsSecondModalOpen] = useState(false)

	const handleAddBasicProductsClick = () => {
		setIsSecondModalOpen(true)
		console.log("hej")
	}
	const handleAddProductsClick = () => {
		setIsModalOpen(true)
		console.log("ok")
	}

	const handleCloseModal = () => {
		setIsModalOpen(false)
	}
	const handleSecondCloseModal = () => {
		setIsSecondModalOpen(false)
	}

	return (
		<div className='flex relative flex-col w-full h-full font-titleFont items-center justify-center'>
			<Logo />
			<div className='flex flex-col h-full items-center justify-center '>
				<h1>Empty fridge!</h1>
				<Button buttonText='Add products' onClick={handleAddProductsClick} />
				<Button
					buttonText='Add basic products'
					onClick={handleAddBasicProductsClick}
				/>
			</div>

			{isModalOpen && <AddProducts onClose={handleCloseModal} />}
			{isSecondModalOpen && <AddBasicList onClose={handleSecondCloseModal} />}
		</div>
	)
}

export default EmptyFridgeHome

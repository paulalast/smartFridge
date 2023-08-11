import React, { useState } from "react"
import Logo from "../components/Logo"
import Button from "../components/Button"
import AddProducts from "../components/AddProducts"
import AddBasicList from "../components/AddBasicList"

function EmptyFridgeHome({ onFridgeFilled }) {
	const [isModalOpen, setIsModalOpen] = useState(false)
	const [isSecondModalOpen, setIsSecondModalOpen] = useState(false)

	const handleAddBasicProductsClick = () => {
		setIsSecondModalOpen(true)
		console.log("Add BASIC PROD")
	}
	const handleAddProductsClick = () => {
		setIsModalOpen(true)
		console.log("ADD API PROD")
	}

	const handleCloseModalAPIProducts = () => {
		setIsModalOpen(false)
	}
	const handleSecondCloseModalBasicProducts = () => {
		setIsSecondModalOpen(false)
	}
	const handleAddProductsSuccess = () => {
		onFridgeFilled()
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

			{isModalOpen && <AddProducts onClose={handleCloseModalAPIProducts} onAddSuccess={handleAddProductsSuccess} />}
			{isSecondModalOpen && (
				<AddBasicList onClose={handleSecondCloseModalBasicProducts} />
			)}
		</div>
	)
}

export default EmptyFridgeHome

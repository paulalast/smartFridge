import React from "react"
import Logo from "../components/Logo"
import Button from "../components/Button"
import AddProducts from "../components/AddProducts"

function EmptyFridgeHome() {
	return (
		<div className='flex relative flex-col w-full h-full font-titleFont  items-center justify-center'>
			<Logo />
			<div className='flex flex-col h-full items-center justify-center '>
				<h1>Pusta lodówka!</h1>
				<Button buttonText='Dodaj produkty' />
				<Button buttonText='Dodaj podstawowe produkty' />
			</div>
				<AddProducts />
		</div>
	)
}

export default EmptyFridgeHome

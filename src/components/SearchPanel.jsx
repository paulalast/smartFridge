import React, { useState } from "react"
import productsData from "../../ProductsData"
import IconBtn from "./IconBtn"

const AddBtn = () => {
	return (
		<button className='w-6 h-6 mx-2'>
			<img className='w-full h-full object-fit p-1' src='add.svg' alt='add' />
		</button>
	)
}
function SearchPanel() {
	const [searchProduct, setSearchProduct] = useState("")
	const handleSearch = e => {
		setSearchProduct(e.target.value)
	}
	const showList = searchProduct.length > 0
	const filteredProducts = productsData.filter(product =>
		product.name.toLowerCase().includes(searchProduct.toLowerCase())
	)
	return (
		<div className='flex flex-col w-full justify-center items-center  '>
			<input
				type='text'
				placeholder='Wyszukaj produkt...'
				className='w-5/6 p-3 font-textFont text-lg border border-mainTransparent '
				value={searchProduct}
				onChange={handleSearch}
			/>
			{showList && (
				<ul className='mt-4 w-5/6 my-2 pl-6'>
					{filteredProducts.map(product => (
						<li className='flex flex-row p-2' key={product.id}>
							{product.name} <AddBtn />
						</li>
					))}
				</ul>
			)}
		</div>
	)
}

export default SearchPanel

import React, { useState } from "react"
import productsData from "../../ProductsData"

const AddBtn = () => {
	function addProductToTheFridge() {
		console.log("adding...")
	}
	return (
		<button
			className='w-9 h-9 place-self-center items-center mx-4'
			onClick={addProductToTheFridge}
		>
			<img className='w-full h-full object-fit ' src='add.svg' alt='add' />
		</button>
	)
}
fetch(
	"https://api.nal.usda.gov/fdc/v1/foods/search?api_key=DEMO_KEY&query=Che"
)
	.then(res => res.json())
	.then(data => {
		console.log(data)
	})
	.catch(err => {
		console.error("Błąd", err)
	})

// const API_KEY = "8reRoJC48SsY56I2CHnjFse3xDcrTOe6N4Lzt6nN"

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
				placeholder='Search for a product...'
				className='search-input w-5/6 h-20 px-4 py-2 text-2xl font-textFont  border border-mainTransparent '
				value={searchProduct}
				onChange={handleSearch}
			/>
			{showList && (
				<ul className='mt-4 w-5/6 my-2 pl-6 font-textFont'>
					{filteredProducts.map(product => (
						<div className='flex'>
							<li
								className='flex w-full bg-yellow-100 flex-row p-2 text-2xl '
								key={product.id}
							>
								{product.name}
							</li>
							<input
								type='number'
								id='quantity'
								inputmode='numeric'
								pattern='[0-9]*'
								placeholder='1'
								min='0'
								step='1'
								className='w-16 mr-6  bg-blue-100 m-0 text-center '
							/>
							<select id='unit ' className='w-fit '>
								<option value='pcs'>pieces</option>
								<option value='l'>liters</option>
								<option value='g'>grams</option>
							</select>
							<AddBtn />
						</div>
					))}
				</ul>
			)}
		</div>
	)
}

export default SearchPanel

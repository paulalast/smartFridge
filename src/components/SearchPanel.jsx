import React, { useState } from "react"

const AddBtn = ({
	food,
	quantity,
	newProduct,
	category,
	setSearchResults,
	setFridgeContents,
}) => {
	function addProductToTheFridge() {
		const API_KEY = import.meta.env.VITE_REACT_APP_SPOONACULAR_API_KEY

		fetch(
			`https://api.spoonacular.com/food/ingredients/${food.id}/information?&apiKey=${API_KEY}`
		)
			.then(response => response.json())
			.then(data => {
				const categoryPath = data.categoryPath.join(", ")
				const newProduct = {
					id: food.id,
					name: food.name,
					quantity: quantity,
					category: categoryPath,
				}
				setFridgeContents(prevContents => [...prevContents, newProduct])
				setSearchResults(data.results)
				console.log(
					`adding... id:${food.id} quantity:${quantity} name:${food.name} category: ${categoryPath}`
				)
			})
			.catch(error => {
				console.error("Error fetching data:", error)
			})
	}
	return (
		<button
			className='w-9 h-9 place-self-center items-center mx-4'
			onClick={addProductToTheFridge}
		>
			<img className='w-full h-full object-fit' src='add.svg' alt='add' />
		</button>
	)
}

function SearchPanel() {
	const [searchProduct, setSearchProduct] = useState("")
	const [searchResults, setSearchResults] = useState([])
	const [timer, setTimer] = useState(null)
	const [quantity, setQuantity] = useState(1)
	const [fridgeContents, setFridgeContents] = useState([])

	function fetchAllProducts(query) {
		const API_KEY = import.meta.env.VITE_REACT_APP_SPOONACULAR_API_KEY

		fetch(
			`https://api.spoonacular.com/food/ingredients/search?query=${query}&apiKey=${API_KEY}&`
		)
			.then(response => response.json())
			.then(data => {
				console.log("API response:", data)
				setSearchResults(data.results)
			})
			.catch(error => {
				console.error("Error fetching data:", error)
			})
	}

	const handleSearch = e => {
		setSearchProduct(e.target.value)
		if (timer) clearTimeout(timer)
		const newTimer = setTimeout(() => {
			fetchAllProducts(e.target.value)
		}, 1500)
		setTimer(newTimer)
	}

	return (
		<div className='flex flex-col w-full justify-center bg-pink-100 items-center overflow-y-auto'>
			<input
				type='text'
				placeholder='Search for a product...'
				className='search-input w-5/6 h-20 px-4 py-2 text-2xl font-textFont border border-mainTransparent'
				value={searchProduct}
				onChange={handleSearch}
			/>
			<ul className='mt-4 w-5/6 my-2 pl-6 font-textFont border py-1 max-h-[250] overflow-y-auto'>
				{searchResults &&
					searchResults.map(food => (
						<div className='flex h-fit max-h-full' key={food.id}>
							<li className='flex w-full bg-yellow-100 flex-row p-2 text-2xl text-left border-b'>
								{food.name}
							</li>
							<input
								type='number'
								id='quantity'
								inputMode='numeric'
								pattern='[0-9]*'
								placeholder='1'
								min='0'
								step='1'
								className='w-16 mr-6 bg-blue-100 m-0 text-center'
								value={quantity}
								onChange={e => setQuantity(e.target.value)}
							/>
							<select id='unit' className='w-fit'>
								<option value='pcs'>pieces</option>
								<option value='l'>liters</option>
								<option value='g'>grams</option>
							</select>
							<AddBtn
								food={food}
								quantity={quantity}
								setSearchResults={setSearchResults}
								setFridgeContents={setFridgeContents}
							/>
						</div>
					))}
			</ul>
		</div>
	)
}

export default SearchPanel

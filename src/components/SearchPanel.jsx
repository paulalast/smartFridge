import React, { useEffect, useState } from "react"
import { useQuery } from "react-query"

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

function SearchPanel() {
	const [searchProduct, setSearchProduct] = useState("")
	const [searchResults, setSearchResults] = useState([])
	const [allProducts, setAllProducts] = useState([])

	const fetchAllProducts = async () => {
		const API_KEY = process.env.REACT_APP_SPOONACULAR_API_KEY
		const response = await fetch(
			`https://api.spoonacular.com/food/ingredients/search?apiKey=${API_KEY}`
		)
		console.log("start API")
		const data = await response.json()
		return data.results
	}

	const { data, isLoading } = useQuery(["allProducts"], fetchAllProducts)

	useEffect(() => {
		if (!isLoading && data) {
			setAllProducts(data)
		}
	}, [isLoading, data])

	useEffect(() => {
		let timerId

		if (searchProduct.length >= 3) {
			timerId = setTimeout(() => {
				const filteredProducts = allProducts.filter(product =>
					product.name.toLowerCase().includes(searchProduct.toLowerCase())
				)
				setSearchResults(filteredProducts)
			}, 1000)
		} else {
			setSearchResults([])
		}

		return () => clearTimeout(timerId)
	}, [searchProduct, allProducts])

	const showList = searchProduct.length > 0
	const handleSearch = e => {
		setSearchProduct(e.target.value)
	}

	return (
		<div className='flex flex-col w-full justify-center bg-pink-100 items-center overflow-y-auto '>
			<input
				type='text'
				placeholder='Search for a product...'
				className='search-input w-5/6 h-20 px-4 py-2 text-2xl font-textFont  border border-mainTransparent '
				value={searchProduct}
				onChange={handleSearch}
			/>
			{showList && (
				<ul className='mt-4 w-5/6 my-2 pl-6 font-textFont border py-1 max-h-[250] overflow-y-auto  '>
					{searchResults.map(food => (
						<div className='flex h-fit max-h-full  ' key={food.id}>
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

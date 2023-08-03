import React, { useEffect, useState } from "react"

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

	const handleSearch = e => {
		setSearchProduct(e.target.value)
	}

	useEffect(() => {
		if (searchProduct.length >= 4) {
			const API_KEY = "74c9df41a61f44b49363d25085ceeade"
			fetch(
				`https://api.spoonacular.com/food/ingredients/search?apiKey=${API_KEY}&query=${encodeURIComponent(
					searchProduct
				)}`
			)
				.then(res => res.json())
				.then(data => {
					setSearchResults(data.results)
					console.log(data)
				})
				.catch(err => {
					console.error("Błąd", err)
				})
		} else {
			setSearchResults([])
		}
	}, [searchProduct])

	const showList = searchProduct.length > 0

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
						<div className='flex h-fit max-h-full  '>
							<li
								className='flex w-full bg-yellow-100 flex-row p-2 text-2xl text-left border-b'
								key={food.id}
							>
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

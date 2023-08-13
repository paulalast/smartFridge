import React, { useState } from "react"

const FullFridgeHome = ({ fridgeContents, setFridgeContents }) => {
	const [items, setItems] = useState([
		{ id: 1, name: "Apple", quantity: 14, unit: "pieces" },
		{ id: 2, name: "Jam", quantity: 1, unit: "jar" },
		{ id: 3, name: "Juice", quantity: 1, unit: "bottle" },
		{ id: 4, name: "Ham", quantity: 1, unit: "packet" },
	])

	const handleDelete = id => {
		setItems(prevItems => prevItems.filter(item => item.id !== id))
	}

	const handleModify = id => {
		setItems(prevItems =>
			prevItems.map(item =>
				item.id === id && item.quantity > 0
					? { ...item, quantity: item.quantity - 1 }
					: item
			)
		)
	}

	return (
		<div>
			<h1>Full Fridge</h1>
			<ul className='flex flex-col p-2 w-full justify-center items-center'>
				{items.map(item => (
					<li
						key={item.id}
						className='w-11/12 m-1 border-b-2 flex justify-between text-2xl'
					>
						<span>
							{item.name} quantity: {item.quantity} {item.unit}
						</span>
						<div>
							<button
								className='mx-2 uppercase'
								onClick={() => handleModify(item.id)}
							>
								Modify
							</button>
							<button
								className='mx-2 uppercase'
								onClick={() => handleDelete(item.id)}
							>
								Delete
							</button>
						</div>
					</li>
				))}
			</ul>
		</div>
	)
}

export default FullFridgeHome

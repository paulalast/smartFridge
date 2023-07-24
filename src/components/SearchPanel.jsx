import React from "react"

function SearchPanel() {
	return (
		<div className='flex w-full justify-center  '>
			<input
				type='text'
				placeholder='Wyszukaj produkt...'
				className='w-5/6 p-3 font-textFont text-lg border border-mainTransparent '
                value=''
                />
                
		</div>
	)
}

export default SearchPanel

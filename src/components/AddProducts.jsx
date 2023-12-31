import React from "react"
import IconBtn from "./IconBtn"
import Button from "./Button"
import SearchPanel from "./SearchPanel"
import { QueryClient, QueryClientProvider } from "react-query"

const queryClient = new QueryClient()

function AddProducts({ onClose, onAddSuccess }) {
	const btnPutIntoTheFridge = () => {
		onClose()
		if (onAddSuccess) onAddSuccess()
		//close modal add product api
		// open page FullFridgeHome
	}
	return (
		<div className='fixed inset-0 flex items-center justify-center bg-gray-500 bg-opacity-50 '>
			<div className='flex p-5 max-w-max flex-col items-center w-full h-4/5 bg-white border-2 relative overflow-y-auto'>
				<IconBtn iconSrc='exit.svg' altText='exit icon' onClick={onClose} />
				<div className='flex flex-col w-full h-full mt-14 p-2'>
					<QueryClientProvider client={queryClient}>
						<SearchPanel />
					</QueryClientProvider>
				</div>
				<Button
					buttonText='Put into the fridge'
					className='justify-center bottom-0'
					onClick={btnPutIntoTheFridge}
				/>
			
			</div>
		</div>
	)
}

export default AddProducts

// add products, api searching modal

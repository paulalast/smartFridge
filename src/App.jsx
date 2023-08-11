import { useState } from "react"
import "./App.css"
import EmptyFridgeHome from "./pages/EmptyFridgeHome"
import FullFridgeHome from "./pages/FullFridgeHome"
// import AddProducts from "./components/AddProducts"

function App() {
	const [empty, setEmpty] = useState(true)
	const makeFridgeFull = () => {
		setEmpty(false)
	}

	return (
		<main className='flex flex-col w-full h-full '>
			{empty ? (
				<EmptyFridgeHome onFridgeFilled={makeFridgeFull} />
			) : (
				<FullFridgeHome />
			)}
		</main>
	)
}

export default App

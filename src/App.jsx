import { useState } from "react"
import "./App.css"
import EmptyFridgeHome from "./pages/EmptyFridgeHome"
import FullFridgeHome from "./pages/FullFridgeHome"

function App() {
	const [empty, setEmpty] = useState(true)
	return (
		<main className='w-full h-full '>
			{empty ? <EmptyFridgeHome /> : <FullFridgeHome />}
		</main>
	)
}

export default App
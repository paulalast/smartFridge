import { useState } from "react"
import "./App.css"
import EmptyFridgeHome from "./pages/EmptyFridgeHome"
import FullFridgeHome from "./pages/FullFridgeHome"

function App() {
    const [empty, setEmpty] = useState(true)
    const [fridgeContents, setFridgeContents] = useState([])

    const makeFridgeFull = () => {
        setEmpty(false)
    }

    return (
        <main className='flex flex-col w-full h-full '>
            {empty ? (
                <EmptyFridgeHome onFridgeFilled={makeFridgeFull} fridgeContents={fridgeContents} setFridgeContents={setFridgeContents} />
            ) : (
                <FullFridgeHome fridgeContents={fridgeContents} setFridgeContents={setFridgeContents} />
            )}
        </main>
    )
}

export default App

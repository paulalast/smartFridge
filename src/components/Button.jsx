import React from "react"

function Button({ buttonText, onClick }) {
	return (
		<button onClick={onClick} className='button-green'>
			{buttonText}
		</button>
	)
}

export default Button


// every green btn
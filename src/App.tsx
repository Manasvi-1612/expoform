import React, { useState } from 'react'
import { BrowserRouter } from 'react-router-dom'
import Routes from './routes'

function App() {
  const [count, setCount] = useState(0)

  return (
	<React.StrictMode>
		<BrowserRouter>
			<Routes />
		</BrowserRouter>
	</React.StrictMode>
  )
}

export default App

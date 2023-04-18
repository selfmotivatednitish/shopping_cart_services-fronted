import { AddProduct, Products, Navbar } from './components'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
	return (
		<div className="App">
			<BrowserRouter>
				<Routes>
					<Route path='/'
						element={
							<>
								<Navbar />
								<Products />
							</>
						}
					/>
					<Route path='/addProducts'
						element={
							<>
								<AddProduct />
							</>
						}
					/>
				</Routes>
			</BrowserRouter>
		</div >
	);
}

export default App;

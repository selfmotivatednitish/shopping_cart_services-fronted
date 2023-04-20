import { AddProduct, Products, Navbar, Signup, Signin } from './components'
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
					<Route path='/signup'
						element = {
							<>
								<Signup />
							</>
						}
					/>
					<Route path='/signin'
						element = {
							<>
								<Signin />
							</>
						}
					/>
				</Routes>
			</BrowserRouter>
		</div >
	);
}

export default App;

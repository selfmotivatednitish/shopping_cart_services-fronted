import { AddProduct, Products, Navbar, Signup, Signin, Profile } from './components'
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
					<Route path='/profile'
						element = {
							<>
							    <Navbar />
								<Profile value="login"/>
							</>
						}
					/>
					<Route path='/profile/addresses'
						element = {
							<>
							    <Navbar />
								<Profile value="addresses"/>
							</>
						}
					/>
					<Route path='/profile/orders'
						element = {
							<>
							    <Navbar />
								<Profile value="orders"/>
							</>
						}
					/>
					<Route path='/contactus'
						element = {
							<>
							    <Navbar />
								<Profile value="contactus"/>
							</>
						}
					/>
				</Routes>
			</BrowserRouter>
		</div >
	);
}

export default App;

import { Products, Navbar, Signup, Signin, Profile , Cart, ProductManage, ProductView} from './components'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'

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
					<Route path='/manageProduct'
						element={
							<>
								<ProductManage />
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
					<Route path='/getCart'
						element = {
							<>
							    <Navbar />
								<Cart />
							</>
						}
					/>
					<Route path='/product/view'
						element = {
							<>
							    <Navbar />
								<ProductView />
							</>
						}
					/>
				</Routes>
			</BrowserRouter>
		</div >
	);
}

export default App;

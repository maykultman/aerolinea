import { Provider } from 'react-redux';
import {
    HashRouter,
	Routes,
	Route
  } from "react-router-dom";
import store from './redux/store';
import Menu from './components/Menu';
import Home from './components/Home';
import Carrito from './components/ShoppingCart';
import ThankPage from './components/ThankPage';
const App = () => {
	return (
		<HashRouter>
				<div className="App">
					<Provider store={store}>
						<Menu/>
						<Routes>
							<Route path="/" element={<Home/>} />
							<Route path="carrito" element={<Carrito />} />
							<Route path="gracias" element={<ThankPage/>} />
						</Routes>
					</Provider>
				</div>
		</HashRouter>
	)
}
export default App;
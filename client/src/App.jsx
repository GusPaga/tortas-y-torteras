import { Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import Detail from './pages/Detail';
import RegistrationForm from './components/RegistrationForm';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Landing from './pages/Landing';
import Filter from './components/Filter';
import ShoppingCart from './components/ShoppingCart';

function App() {
	return (
		<>
			<Navbar />
			<Switch>
				<Route exact path='/' component={Home} />
				<Route exact path='/landing' component={Landing} />
				<Route exact path='/registration' component={RegistrationForm} />
				<Route exact path='/:id' component={Detail} />
				<Route exact path='/shop/shoppingCart' component={ShoppingCart} />
				<Route exact path='/bases/filter' component={Filter} />
			</Switch>
			{/* <Footer /> */}
		</>
	);
}

export default App;

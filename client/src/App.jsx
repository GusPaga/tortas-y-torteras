import { Route, Switch } from 'react-router-dom';
import { SignUp } from './components/auth/SignUp';
// import SignInUp from './components/formsUsers/Index';
import Navbar from './components/Navbar';
import Page404 from './components/Pag404';
import ProductForm from './components/ProductForm';
import ShoppingCart from './components/ShoppingCart';
import Try from './components/Try';
import Detail from './pages/Detail';
import Home from './pages/Home';
import Landing from './pages/Landing';

function App() {
	return (
		<>
			{location.pathname !== '/' && <Navbar />}
			<Switch>
				<Route exact path='/' component={Landing} />
				<Route exact path='/home' component={Home} />
				<Route exact path='/addproduct' component={ProductForm} />
				<Route exact path='/shop/shoppingCart' component={ShoppingCart} />
				<Route exact path='/bases/try' component={Try} />
				<Route exact path='/signup' component={SignUp} />
				<Route exact path='/:id' component={Detail} />
				<Route path='/' component={Page404} />
			</Switch>
			{/* <Footer /> */}
		</>
	);
}

export default App;

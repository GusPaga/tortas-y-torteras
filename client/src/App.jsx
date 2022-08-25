import { Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import ProductForm from './components/ProductForm';
import ShoppingCart from './components/ShoppingCart';
// import SignInSide from './components/SignIn';
import SignInUp from './components/formsUsers/Index';
import Try from './components/Try';
import Detail from './pages/Detail';
// import Home from './pages/Home';
import Home2 from './pages/Home2';
import Landing from './pages/Landing';
import Page404 from './components/Pag404';

function App() {
	return (
		<>
			<Navbar />
			<Switch>
				<Route exact path='/' component={Landing} />
				<Route exact path='/home' component={Home2} />
				<Route exact path='/addproduct' component={ProductForm} />
				<Route exact path='/shop/shoppingCart' component={ShoppingCart} />
				{/* <Route exact path='/bases/signin' component={SignInSide} /> */}
				<Route exact path='/bases/try' component={Try} />
				<Route exact path='/user/auth' component={SignInUp} />
				<Route exact path='/:id' component={Detail} />
				<Route path='/' component={Page404} />
			</Switch>
			{/* <Footer /> */}
		</>
	);
}

export default App;

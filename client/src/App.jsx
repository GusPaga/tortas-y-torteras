import { Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import Detail from './pages/Detail';
import RegistrationForm from './components/RegistrationForm';
import ProductForm from './components/ProductForm';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Landing from './pages/Landing';
import Filter from './components/Filter';

function App() {
	return (
		<>
			<Navbar />
			<Switch>
				<Route exact path='/' component={Home} />
				<Route exact path='/landing' component={Landing} />
				<Route exact path='/registration' component={RegistrationForm} />
				<Route exact path='/addproduct' component={ProductForm} />
				<Route exact path='/:id' component={Detail} />
				<Route exact path='/bases/filter' component={Filter} />
			</Switch>
			<Footer />
		</>
	);
}

export default App;

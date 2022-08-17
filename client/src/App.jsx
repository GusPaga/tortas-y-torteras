import { Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import Detail from './pages/Detail';
import RegistrationForm from './components/RegistrationForm';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Landing from './pages/Landing';

function App() {
	return (
		<>
			<Navbar />
			<Switch>
				<Route exact path='/' component={Home} />
				<Route exact path='/landing' component={Landing} />
				<Route exact path='/registration' component={RegistrationForm} />
				<Route exact path='/:id' component={Detail} />
			</Switch>
			<Footer />
		</>
	);
}

export default App;

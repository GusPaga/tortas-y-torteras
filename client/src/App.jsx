import { Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import Detail from './pages/Detail';
import RegistrationForm from './components/RegistrationForm';

function App() {
	return (
		<>
			<Switch>
				<Route exact path='/' component={Home} />
				<Route exact path='/:id' component={Detail} />
				<Route exact path={'/Registration'} component={RegistrationForm} />
			</Switch>
		</>
	);
}

export default App;

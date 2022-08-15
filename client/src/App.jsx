import './App.css';
import { Route, Switch } from 'react-router-dom';
import Home from './pages/Home';

function App() {

	return (
		<div className='App'>
			<Switch>
				<Route exact path='/' component={Home} />
				{/* <Route exact path='/bases/:id' component={Detail} /> */}
			</Switch>
		</div>
	);
}

export default App;

import * as React from 'react';
import { BrowserRouter, Switch, Route, NavLink } from 'react-router-dom';
import Home from './views/Home';
import Films from './views/Films';
import Details from './views/Details';

class App extends React.Component<IAppProps, IAppState> {
	render() {
		return (
			<BrowserRouter>
			<nav className="nav justify-content-center mb-5 p-3 shadow">
				<NavLink to="/" className="btn btn-link mx-3">Home</NavLink>
				<NavLink to="/films" className="btn btn-link mx-3">Films</NavLink>
			</nav>
				<Switch>
					<Route exact path = "/" component={Home} />
					<Route exact path = "/films" component={Films} />
					<Route exact path = "/films/details/:id" component={Details} />
				</Switch>
			</BrowserRouter>
		);
	}
}

export interface IAppProps {}

export interface IAppState {
	
}

export default App;

//
// const App = (props: AppProps) => {
// 	const [greeting, setGreeting] = React.useState<string>('');

// 	React.useEffect(() => {
// 		(async () => {
// 			try {
// 				const res = await fetch('/api/hello');
// 				const greeting = await res.json();
// 				setGreeting(greeting);
// 			} catch (error) {
// 				console.log(error);
// 			}
// 		})();
// 	}, []);

// 	return (
// 		<div className="min-vh-100 d-flex justify-content-center align-items-center">
// 			<h1 className="display-1">Hello {greeting}!</h1>
// 		</div>
// 	);
// };

// interface AppProps {}

// export default App;

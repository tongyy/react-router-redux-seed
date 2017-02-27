import React,{Component} from 'react';
import { Link, browserHistory } from 'react-router';
export default class App extends Component {
	render() {
		return (
			<div>
				<header>
					Links:
					{' '}
					<Link to="/">Home</Link>
					{' '}
					<Link to="/about">about</Link>

				</header>
				<div>
					<button onClick={() => browserHistory.push('/about')}>Go to /about</button>
				</div>
				<div style={{ marginTop: '1.5em' }}>{this.props.children}</div>
			</div>
		);
	}
};


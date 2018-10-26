import React,{Component} from 'react';
import { Link } from 'react-router-dom';
import history from '../history';
export default class App extends Component {
	render() {
		return (
			<div>
				<header>
					Links:
					{' '}
					<Link to="/home">Home</Link>
					{' '}
					<Link to="/about">about</Link>

				</header>
				<div>
					<button onClick={() => history.push('/about')}>Go to /about</button>
				</div>
				<div style={{ marginTop: '1.5em' }}>{this.props.children}</div>
			</div>
		);
	}
};


import React,{Component} from 'react';

export default class Home extends Component {
	constructor(props) {
		super(props);
	}

	componentWillMount() {
		console.log('componentWillMount');
	}
	
	render(){
		console.log(this);
		return (
			<div>
				Some state changes:
				{this.props.data.get('count').get('number')}
				<button onClick={() => this.props.increaseNum(1)}>Increase</button>
				<button onClick={() => this.props.decreaseNum(1)}>Decrease</button>
				<button onClick={() => this.props.increaseAsyncNum(1)}>IncreaseAsync</button>
			</div>
		);
	}
};


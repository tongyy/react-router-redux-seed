import React,{Component} from 'react';

export default class Service extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		console.log(this);
		return (
			<div>
				Service Result ===>>
				{this.props.data.get('service').get('serviceContext')}
				<br/>
				<button onClick={() => this.props.callService()}>callService</button>
			</div>
		);
	}
};


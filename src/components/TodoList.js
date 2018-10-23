import React, { Component } from 'react';


class ToDoList extends Component {
	constructor(props) {
		super(props);
		this.state = {list: [], items: ''};
		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleRemove = this.handleRemove.bind(this);
	}

	handleChange(event) {
		this.setState({items: event.target.value});
		console.log(event.target.value);
	}

	handleSubmit(event) {
		this.setState({ list: [...this.state.list, this.state.items]});
		event.preventDefault();
	}

	handleRemove(event) {
		console.log("handleRemove has been called");
		const filteredArray = this.state.list.filter(item => item !== event.target.value);
		this.setState({list: filteredArray});
	}



	render() {
		return (
			<div>
				<form onSubmit={this.handleSubmit}>
					<label>
						<input type="text" value={this.state.value} onChange={this.handleChange} />
					</label>
					<input onClick={this.handleSubmit}type="submit" value="Submit" />
				</form>
				<ul>
					{this.state.list.map(function(i, index) {
						return(
							<li key={index}>{i}<button onClick={this.handleSubmit.bind(this)}>X</button></li>
						);
					})}
				</ul>
				<p>Remaining: {this.state.list.length}</p>
			</div>
		);
	}
}

export default ToDoList;

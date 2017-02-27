import React from 'react';
import { connect } from 'react-redux';
import { increase, decrease, incrementAsync } from '../actions/count';

function Home({ number, increase, decrease ,incrementAsync}) {
	return (
		<div>
			Some state changes:
			{number}
			<button onClick={() => increase(1)}>Increase</button>
			<button onClick={() => decrease(1)}>Decrease</button>
			<button onClick={() => incrementAsync(1)}>IncreaseAsync</button>
		</div>
	);
}

export default connect(
	state => ({ number: state.get('count').get('number') }),
	{ increase, decrease, incrementAsync}
)(Home);

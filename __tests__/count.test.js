import count from '../src/reducers/count';
import Immutable from 'immutable';

describe('count reducer', () => {
	const decreaseAction = {
		type:'DECREASE',
		amount:1
	};
	const initialState = Immutable.fromJS({
		number: 1
	});
	it('reducer shuld works', () => {
		var result = count(initialState,decreaseAction);
		console.log(result);
		expect(result.get('number')).toBe(0);
	});

	const increaseAction = {
		type:'INCREASE',
		amount:2
	};
	it('reducer shuld works', () => {
		var result = count(initialState,increaseAction);
		console.log(result);
		expect(result.get('number')).toBe(3);
	});
});
import Immutable from 'immutable';
const INCREASE = 'INCREASE';
const DECREASE = 'DECREASE';
const initialState = Immutable.fromJS({
	number: 1
});

export default function update(state = initialState, action) {
	console.log("update by count reduce",action);
	if(action.type === INCREASE) {
		console.log('update',state);
		return state.update('number',v => v + action.amount);
	}
	else if(action.type === DECREASE) {
		return state.update('number',v => v - action.amount);
	}
	return state;
};

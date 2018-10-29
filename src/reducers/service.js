import Immutable from 'immutable';
const CALLSERVICE = 'CALLSERVICE';
const initialState = Immutable.fromJS({
	serviceContext : 'wait for callService'
});

export default function updateServiceContext(state = initialState, action) {
	console.log('updateServiceContext',action);
	if(action.type === CALLSERVICE ) {
		return state.update('serviceContext',v => action.serviceContext);
	}
	return state;
};

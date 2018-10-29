const CALLSERVICE = 'CALLSERVICE';

export function callService(serviceContext) {
	return {
		type: CALLSERVICE,
		serviceContext:serviceContext
	};
};

//redux-thunk supports function of action creator
export function incrementAsync() {
	return dispatch => {
		setTimeout(() => {
			dispatch(increase(1));
		}, 1000);
	};
};


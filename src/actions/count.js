const INCREASE = 'INCREASE';
const DECREASE = 'DECREASE';

export function increase(n) {
	return {
		type: INCREASE,
		amount: n
	};
};

export function decrease(n) {
	return {
		type: DECREASE,
		amount: n
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


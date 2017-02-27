import { increase, decrease, incrementAsync } from '../actions/count';
import { Home } from '../components';
import { connect } from 'react-redux';

const mapStateToProps = (state) => ({ data:state});

const mapDispatchToProps = (dispatch) => ({

	increaseNum:(amount)=> {
		dispatch(increase(amount));
	},
	decreaseNum:(amount)=> {
		dispatch(decrease(amount));
	},
	increaseAsyncNum:(amount)=> {
		dispatch(incrementAsync(amount));
	}

});

const HomeContainer = connect(mapStateToProps, mapDispatchToProps)(Home);

export default HomeContainer;
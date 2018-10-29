import { callService } from '../actions/service';
import { Service } from '../components';
import { connect } from 'react-redux';

const mapStateToProps = (state) => ({ data:state});

const mapDispatchToProps = (dispatch) => ({

	callService:()=> {
		const result = "this is ServiceContext";
		dispatch(callService(result));
	}

});

const ServiceContainer = connect(mapStateToProps, mapDispatchToProps)(Service);

export default ServiceContainer;

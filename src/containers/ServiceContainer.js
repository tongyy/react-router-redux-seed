import { callService } from '../actions/service';
import { Service } from '../components';
import { connect } from 'react-redux';

const mapStateToProps = (state) => ({ data:state});

const mapDispatchToProps = (dispatch) => ({

	callService:()=> {
		//ES7 
		const call = async ()=> {
			const res = await fetch("http://127.0.0.1:8081/list.json");
			const result = await res.json();
			dispatch(callService(result.name));
		};
		call();
		/*
		fetch("http://127.0.0.1:8081/list.json")
			.then((res)=>res.json())
			.then((json)=>dispatch(callService(json.name)));
			*/

	}

});

const ServiceContainer = connect(mapStateToProps, mapDispatchToProps)(Service);

export default ServiceContainer;

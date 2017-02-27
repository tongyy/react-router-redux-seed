import { createDevTools } from 'redux-devtools';
import LogMonitor from 'redux-devtools-log-monitor';
import DockMonitor from 'redux-devtools-dock-monitor';

import Immutable from 'immutable';
import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware, compose} from 'redux';
import {combineReducers} from 'redux-immutable';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import { syncHistoryWithStore, routerReducer } from 'react-router-redux';

import * as reducers from './reducers';
import { App, Home, Foo, Bar } from './components';
import ReduxThunk from 'redux-thunk';

const rootReducer = combineReducers({
	...reducers,
	routing: routerReducer
});

const DevTools = createDevTools(
	<DockMonitor toggleVisibilityKey="ctrl-h" changePositionKey="ctrl-q">
		<LogMonitor theme="tomorrow" preserveScrollTop={false} />
	</DockMonitor>
);

const store = createStore(
	rootReducer,
	compose(
		applyMiddleware(ReduxThunk),
		DevTools.instrument()
	)
);
const history = syncHistoryWithStore(browserHistory, store, {
	selectLocationState (state) {
		return state.get('routing');
	}
});

ReactDOM.render(
	<Provider store={store}>
		<div>
			<Router history={history}>
				<Route path="/" component={App}>
					<IndexRoute component={Home}/>
					<Route path="foo" component={Foo}/>
					<Route path="bar" component={Bar}/>
				</Route>
			</Router>
			<DevTools />
		</div>
	</Provider>,
	document.getElementById('app')
);

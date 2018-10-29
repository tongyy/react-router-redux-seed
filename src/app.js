import { createDevTools } from 'redux-devtools';
import LogMonitor from 'redux-devtools-log-monitor';
import DockMonitor from 'redux-devtools-dock-monitor';

import Immutable from 'immutable';
import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware, compose } from 'redux';
import { combineReducers } from 'redux-immutable';
import { Provider } from 'react-redux';
import { Route, Switch } from 'react-router'; // react-router v4
import history from './history';
import { connectRouter, routerMiddleware, ConnectedRouter } from 'connected-react-router/immutable';

import * as reducers from './reducers';
import { App, About } from './components';
import { HomeContainer, ServiceContainer}	from './containers';
import ReduxThunk from 'redux-thunk';

const rootReducer = combineReducers({
	...reducers	
});

const DevTools = createDevTools(
	<DockMonitor toggleVisibilityKey="ctrl-h" changePositionKey="ctrl-q">
		<LogMonitor theme="tomorrow" preserveScrollTop={false} />
	</DockMonitor>
);

const store = createStore(
	connectRouter(history)(rootReducer),
	compose(
		applyMiddleware(ReduxThunk,routerMiddleware(history)),
		DevTools.instrument()
	)
);

ReactDOM.render(
	<Provider store={store}>
		<ConnectedRouter history={history}>
			<div>
				<Route exact path="/" component={App}/>
				<Route exact path="/" component={HomeContainer}/>
				<Route exact path="/" component={About}/>
				<Route exact path="/" component={ServiceContainer}/>
				<Switch>
					<Route path="/home" component={HomeContainer}/>
					<Route path="/about" component={About}/>
					<Route path="/service" component={ServiceContainer}/>
				</Switch>
				<DevTools />
			</div>
		</ConnectedRouter>
	</Provider>,
	document.getElementById('app')
);

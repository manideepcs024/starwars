import 'babel-polyfill';
import React from 'react';
import {render} from 'react-dom';
import {Router, browserHistory} from 'react-router';
import {Provider} from 'react-redux';
import routes from './route';
import './styles/styles.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import configureStore from './store/configureStore';

const store = configureStore();

render(
    <Provider store={store} test={'hello'}>
    <Router history={browserHistory} routes={routes} />
    </Provider>,
    document.getElementById('app')
);
//hello test 

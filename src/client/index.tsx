import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory } from 'react-router';
import { Provider } from 'mobx-react';
import App from './Components/App';
import store from './Store';

const wrapper = document.getElementById('app');
if (wrapper) {
    ReactDOM.render(
            <Router history={browserHistory}>
                <Route path={'/'} component={App} onEnter={store.getPomodoros} />
            </Router>,
        wrapper
    );
} else {
    throw new Error('Unable to find wrapper element');
}
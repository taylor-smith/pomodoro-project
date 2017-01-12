import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'mobx-react';
import App from './Components/App';

const wrapper = document.getElementById('app');
if (wrapper) {
    ReactDOM.render(
            <App />,
        wrapper
    );
} else {
    throw new Error('Unable to find wrapper element');
}
// import React from 'react';
// import { render } from 'react-dom';
// import App from './Components/App';

// import createMobxStores from './utils/createMobxStores';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'mobx-react';
import App from './Components/App';

// const stores = createMobxStores();

const wrapper = document.getElementById('app');
if (wrapper) {
    ReactDOM.render(
        // <Provider {...stores}>
            <App />,
        // </Provider>,
        wrapper
    );
} else {
    throw new Error('Unable to find wrapper element');
}
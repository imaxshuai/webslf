import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import WebRouter from './router/router';
import registerServiceWorker from './registerServiceWorker';
import {configureStore} from './redux/store/configureStore';

const store = configureStore();

ReactDOM.render(
    <Provider store={store}>
        <WebRouter />
    </Provider>,
    document.getElementById('root')
);
registerServiceWorker();

import React from 'react';
import Router from 'app/router/Router';
import {Provider} from 'react-redux';
import RTL from 'utils/components/RTL';
import store from './store';
import {Toast} from 'packages/toast';
import {BrowserRouter} from 'react-router-dom';

const Boot = () => {

    return (
        <Provider store={store}>
            <RTL>
                <React.Fragment>
                    <BrowserRouter>
                        <Router/>
                    </BrowserRouter>
                    <Toast/>
                </React.Fragment>
            </RTL>
        </Provider>
    );
};

export default Boot;

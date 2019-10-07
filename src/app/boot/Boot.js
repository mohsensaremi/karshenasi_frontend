import React from 'react';
import Router from 'app/router/Router';
import {Provider} from 'react-redux';
import RTL from 'utils/components/RTL';
import store from './store';
import {BrowserRouter} from 'react-router-dom';
import jMoment from "moment-jalaali";
import JalaliUtils from "@date-io/jalaali";
import {
    MuiPickersUtilsProvider,
} from "@material-ui/pickers";
import {IntlProvider} from "react-intl";
import translations from "i18n/locales";
import {locale} from 'utils/utils/locale';

jMoment.loadPersian({dialect: "persian-modern", usePersianDigits: true});

const Boot = () => {

    const messages = translations[locale];

    return (
        <IntlProvider locale={locale} key={locale} messages={messages}>
            <MuiPickersUtilsProvider utils={JalaliUtils} locale="fa">
                <Provider store={store}>
                    <RTL>
                        <React.Fragment>
                            <BrowserRouter>
                                <Router/>
                            </BrowserRouter>
                        </React.Fragment>
                    </RTL>
                </Provider>
            </MuiPickersUtilsProvider>
        </IntlProvider>
    );
};

export default Boot;

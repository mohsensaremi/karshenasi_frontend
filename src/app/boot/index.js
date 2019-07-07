import 'app/style/app.scss';
import 'app/fonts/IRANSans/css/fontiran.css';
import 'utils/style/table.scss';
import React from 'react';
import ReactDOM from 'react-dom';
import Boot from './Boot';
import * as serviceWorker from 'serviceWorker';

// if (process.env.NODE_ENV !== 'production') {
//     const {whyDidYouUpdate} = require('why-did-you-update');
//     whyDidYouUpdate(React, {include: [/Item/]});
// }

ReactDOM.render(<Boot/>, document.getElementById('root'));


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

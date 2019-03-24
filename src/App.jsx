import React, {Component} from 'react';
import {Text} from 'react-native';
import {IntlProvider} from 'react-intl';

import {enMessages as sharedEnMessages} from 'cookbookery-shared';

import Screens from './screens';
import * as enMessages from './translations/en';

export default class App extends Component {

    render() {
        return (
            <IntlProvider locale="en" messages={Object.assign(enMessages, sharedEnMessages)} textComponent={Text}>
                <Screens/>
            </IntlProvider>
        );
    }
}



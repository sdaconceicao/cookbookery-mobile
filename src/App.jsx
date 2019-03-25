import React, {Component} from 'react';
import {Text} from 'react-native';
import {IntlProvider} from 'react-intl';

import {enMessages as sharedEnMessages} from 'cookbookery-shared';
import {enMessages} from 'Translations';

import Screens from 'Screens';

export default class App extends Component {

    render() {
        return (
            <IntlProvider locale="en"
                textComponent={Text}
                messages={Object.assign(enMessages, sharedEnMessages)} >
                <Screens/>
            </IntlProvider>
        );
    }
}



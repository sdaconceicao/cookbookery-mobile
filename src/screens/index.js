import React from 'react';
import {Router, Scene} from 'react-native-router-flux';
import {injectIntl} from 'react-intl';

import Recipes from './Recipes';

export const Screens = ({intl}) => {
    return (
        <Router>
            <Scene key="root">
                <Scene key="home"
                       component={Recipes}
                       title={intl.formatMessage({id: 'recipes.title'})}
                       initial={true} />
            </Scene>
        </Router>
    )
};

export default injectIntl(Screens);
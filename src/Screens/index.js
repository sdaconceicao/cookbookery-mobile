import React from 'react';
import {Router, Scene} from 'react-native-router-flux';

import Recipes from './Recipes';

export const Screens = () => {
    return (
        <Router>
            <Scene key="root">
                <Scene key="home"
                       component={Recipes}
                       title="Recipes"
                       initial={true} />
            </Scene>
        </Router>
    )
};

export default Screens;
import React from 'react';
import { createStackNavigator, createAppContainer } from "react-navigation";
import {injectIntl} from 'react-intl';

import Recipes from './Recipes';

const AppNavigator = createStackNavigator(
    {
        Recipes: {
            screen: Recipes
        }
    },
    {
    initialRouteName: 'Recipes',
    defaultNavigationOptions: {
        headerStyle: {
            backgroundColor: '#ae1c2f',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
            fontWeight: 'bold',
        },
    }

});

const AppContainer = createAppContainer(AppNavigator);

export default injectIntl((props)=><AppContainer screenProps={props}/>)
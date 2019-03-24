import {AppRegistry} from 'react-native';
import axios from 'axios';

import {apiConfig} from 'cookbookery-shared';

import App from './src/App';
import {name as appName} from './app.json';

apiConfig(axios, "http://localhost:3001", false);

AppRegistry.registerComponent(appName, () => App);

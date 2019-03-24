import {AppRegistry} from 'react-native';
import {API_BASE_URL} from 'react-native-dotenv'
import axios from 'axios';

import {apiConfig} from 'cookbookery-shared';

import App from './src/App';
import {name as appName} from './app.json';

apiConfig(axios, API_BASE_URL, false);

AppRegistry.registerComponent(appName, () => App);

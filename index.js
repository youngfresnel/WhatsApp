/**
 * @format
 */

import { AppRegistry } from 'react-native';
import App from './App';
import { name as appName } from './app.json';
import ProviderComp from './src/Components/Provider';

AppRegistry.registerComponent(appName, () => ProviderComp);
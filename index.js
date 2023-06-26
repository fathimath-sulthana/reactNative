/**
 * @format
 */

import {AppRegistry} from 'react-native';
import app from './App';
import {name as appName} from './app.json';
import reactMemo from './src/ReactMemo/reactMemo';
import UseMemo from './src/UseMemo/UseMemo';
import UseRef from './src/UseRef/UseRef';
import IfElseCondition from './src/IfElse/IfElseCondition';
import ContextApi from './src/PropsDrilling/PropsDrilling';
import 'react-native-gesture-handler';
import main from './src/DrawerNavigation/main';
import Main from './src/BottomTabNavigator/Main';
import MaterialTab from './src/MaterialBottomTab/MaterialTab';
import MaterialTop from './src/MaterialTopTab/MaterialTop';
import navigationHooks from './src/StackNavigation/CommonActions/navigationHooks';
import MainStack from './src/StackNavigation/StackActions/MainStack';
import GreetingComponent from './src/StackNavigation/StackActions/Home';
import MainHeader from './src/CustomHeader/MainHeader';
import First from './src/CoreComponents/First';
import textInput from './src/CoreComponents/textInput';
AppRegistry.registerComponent(appName, () => textInput)
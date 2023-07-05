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
import scrollView from './src/CoreComponents/scrollView';
import styleSheet from './src/CoreComponents/styleSheet';
import flatList from './src/CoreComponents/flatList';
import sectionList from './src/CoreComponents/sectionList';
import touchComponents from './src/CoreComponents/touchComponents';
import Title from './src/CustomHeader/Title';
import touchComponents2 from './src/CoreComponents/touchComponents2';
import OtherComponents from './src/CoreComponents/OtherComponents';
import reduxMain from './src/Redux/reduxMain';
import fetchNetworking from './src/RnNetworking/fetchNetworking';
import axiosFile from './src/RnNetworking/axiosFile';
import xmlHttpRequestFile from './src/RnNetworking/xmlHttpRequestFile';
import TextFile from './src/CustomFont/TextFile';
AppRegistry.registerComponent(appName, () => TextFile)
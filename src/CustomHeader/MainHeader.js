import { View, Text ,TouchableOpacity} from 'react-native'
import React from 'react'
import { DrawerActions, NavigationContainer, useNavigation } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createDrawerNavigator } from '@react-navigation/drawer'
import AntDesign from 'react-native-vector-icons/AntDesign'
import MyDrawer from './MyDrawer'
import Profile from './Profile';
import Home from './Home'
import Cart from './Cart'
import Notification from './Notification'
import Settings from './Settings'
import Wishlist from './Wishlist'
import Title from './Title'
import Header from '../common/Header'
import MyTabBar from '../common/MyTabBar'
const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();
 const LeftIcon =() =>{
    const navigation = useNavigation()
    const handleOpenDrawer = () =>{
        navigation.dispatch(DrawerActions.openDrawer())
    }
    return(
        <TouchableOpacity>
            <AntDesign name='appstore1' color={'#0096ff'} size={25} onPress={handleOpenDrawer}/>
        </TouchableOpacity>
    )
 }
const TabNav =() =>{
    return(
        <Tab.Navigator tabBar={props => <MyTabBar {...props}/>}>
        <Tab.Screen name='Home' component={Home} options={{
            headerLeft:() => <LeftIcon/>
        }}/>
        <Tab.Screen name='Cart' component={Cart}/>
        <Tab.Screen name='Wishlist' component={Wishlist}/>
    </Tab.Navigator>
    )
}
const DrawerNav =() =>{
    return(
        <Drawer.Navigator drawerContent={props => <MyDrawer {...props}/>}>
            <Drawer.Screen name='Tab' component={TabNav} options={{
                headerShown:false,title:'Home'
            }}
            />
            <Drawer.Screen name='Notification' component={Notification}/>
            <Drawer.Screen name='Settings' component={Settings}/>
        </Drawer.Navigator>
    )
}
const MainHeader = () => {
  return ( 
   <NavigationContainer>
    <Stack.Navigator >
        <Stack.Screen name='Profile' component={Profile} options={{
            title:'hi, user',
            headerStyle:{
                backgroundColor:'#0096FF'
            },
            headerTintColor:'#fff',
            headerTitleStyle:{
                fontWeight:'500'
            }
        }}/>
        <Stack.Screen name='DrawerNav' component={DrawerNav} options={{
            headerTitle:(props) => <Title {...props}/>,
            headerRight:() =>(
                <TouchableOpacity>
                <AntDesign name='user' size={20}/>
            </TouchableOpacity>
            ),
            headerLeft:() =>(
                <TouchableOpacity>
                <AntDesign name='setting' size={20}/>
            </TouchableOpacity>
            )
            
        }}/>
        <Stack.Screen name='Wishlist' component={Wishlist} options={{
            header:(props) => <Header {...props}/>
        }}/>
    </Stack.Navigator>
   </NavigationContainer>
  )
}

export default MainHeader
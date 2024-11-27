import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import HomeScreen from "../screen/HomeScreen";
import MainScreen from "../screen/MainScreen";
import DetailScreen from "../screen/DetailScreen";
import { TouchableOpacity, View, Text,StyleSheet } from "react-native";
import {MaterialCommunityIcons} from '@expo/vector-icons'
import { DrawerContentScrollView,DrawerItemList } from "@react-navigation/drawer";
import { useNavigation } from "@react-navigation/native";

const Drawer = createDrawerNavigator();


const DrawerNavigator = () => {

    return(
        <Drawer.Navigator
            screenOptions={({navigation})=> ({
                drawerStyle:{backgroundColor: 'black',
                    width:180, 
                },
                drawerLabelStyle:{fontSize:16},
                drawerActiveTintColor:'#4caf50',  
                drawerInactiveTintColor: '#757575', 
                drawerPosition:'right',
                headerLeft: () => null,
                headerRight: () =>(
                    <TouchableOpacity style={{marginRight:15}} onPress={()=>navigation.toggleDrawer()}>
                        <MaterialCommunityIcons name="menu" size={28} color="#Fff" />
                    </TouchableOpacity>
                ),
                drawerType:'slide' ,
            })}
        >
            <Drawer.Screen name="Main" component={MainScreen}
                    options={{title:'Main', headerShown: false,  }}/>
            <Drawer.Screen name="Home" component={HomeScreen}
                    options={{
                        title:'Movie',
                        headerTintColor : '#fff',
                        headerStyle:{
                            backgroundColor:'black',
                            height:60,
                        },
                        headerTitleStyle:{color:'#fff',fontSize:20},
                        
                    }} />
            {/* <Drawer.Screen name="Detail" component={DetailScreen} /> */}
            {/* <Drawer.Screen name="Main" component={MainScreen} 
                    options={{title:'Logout'}}/>
            <Drawer.Screen name="Main" component={MainScreen}
                    options={{title:'SignUp'}}/>
                 */}
        </Drawer.Navigator>
    )
}





export default DrawerNavigator;
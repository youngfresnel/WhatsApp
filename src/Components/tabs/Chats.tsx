import React from "react";
import { View } from "react-native";
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { WText, WView } from "../../shared/themed";
import DefaultRoutes from "../chat-comps/DefaultRoutes";
import ChatsRoutes from "../chat-comps/chatRoutes";
import { NavigationContainer } from "@react-navigation/native";


const Stack = createNativeStackNavigator();

const ChatsComponent = React.memo((props:any) => {
    return(
        <WView style={{flex:1}}>
            <NavigationContainer>
                <Stack.Navigator  >
                    <Stack.Screen options={{headerShown:false}} name="default" component={DefaultRoutes} />
                    <Stack.Screen 
                     name="chatPage" options={{}} component={ChatsRoutes} />
                </Stack.Navigator>
            </NavigationContainer>
        </WView>
    )
})

export default ChatsComponent;
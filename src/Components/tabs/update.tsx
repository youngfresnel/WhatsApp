import React from "react";
import { View } from "react-native";
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { WView } from "../../shared/themed";
import ChatsRoutes from "../chat-comps/chatRoutes";
import DefaultUpdatesRoutes from "../updates-comps/DefaultUpdatesRoutes";
import { NavigationContainer } from "@react-navigation/native";


const Stack = createNativeStackNavigator();


const UpdateComponent = React.memo((props:any) => {
    return(
         <WView style={{flex:1}}>
            <NavigationContainer>
                <Stack.Navigator screenOptions={{headerShown:false}} >
                    <Stack.Screen name="updatesDefault" component={DefaultUpdatesRoutes} />
                    <Stack.Screen name="chatPage" component={ChatsRoutes} />
                </Stack.Navigator>
            </NavigationContainer>
        </WView>
    )
})

export default UpdateComponent;


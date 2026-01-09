import React from "react";
import { Image, ImageStyle, StyleProp, StyleSheet, View } from "react-native";
import { scale, textScale } from "../constants/responsiveSize";
import { WText, WView } from "./themed";
import useAppcolor from "./useColor";
import { PhoneIcon } from "phosphor-react-native";
import {ITabHeaderProps, TContact} from './type'
import fonts from "../constants/fonts";
import { useNavigation } from "@react-navigation/native";


 export const TabsHeaderComponent = React.memo((props:ITabHeaderProps)=>{
    const appColor = useAppcolor();
    return(
        <View style={[styles.headerstyle, {backgroundColor:appColor.dark_blue_10}]}>
            <WText fontFamily='roman' style={[{fontSize:textScale(28)},props.bolder && {color:appColor.green_100, fontFamily:fonts.bold}]}>
                {props.title}
            </WText>
            <View style={styles.headerIconContainer}>
                {props.icons.map((icon:any) => <View onTouchEnd={() => icon.onPress()} key={Math.floor(Math.random()* 99999).toString()} style={{width:scale(24), height:scale(24), marginRight:scale(10),marginLeft:scale(20)}}>{icon.icon}</View>)}
            </View>
        </View>
    )
});

 export const ChatHead = React.memo((props:{contact:TContact; navigation : any}) => {
    const appColor = useAppcolor();
    // const navigation = useNavigation();
    return(
        <View onTouchEnd={()=> props.navigation.navigate('chatPage',{contact:props.contact})} key={Math.floor(Math.random()*9999999999999).toString()} style={{flexDirection:'row', alignContent:'center', marginBottom:scale(20)}}>
            <View>
               <Image
               resizeMode="cover"
               style={{width:scale(60),height:scale(60), borderRadius:scale(60)}}
               source={{uri:props.contact.profileImage}}
               />
            </View>
            <View style={{flexGrow:1, marginLeft:scale(10)}}>
                <WText style={{fontSize:textScale(20)}}>{props.contact.name}</WText>
                <WText style={{color:appColor.text_color_2, fontSize:textScale(13), fontWeight:200}} fontFamily='roman'> {props.contact.lastMessage.slice(0, 30)}</WText>
            </View>
            <View style={{}}>
                <WText style={{color:appColor.text_color_2}} fontFamily='light'>Todays</WText>
            </View>
        </View>
    )
})

export const CallHead = React.memo((props:any) => {
    const appColor = useAppcolor();
    return(
        <View key={Math.floor(Math.random()*9999999999999).toString()} style={{flexDirection:'row', alignItems:'center', marginBottom:scale(20)}}>
            <View>
               <Image
               resizeMode="cover"
               style={{width:scale(50),height:scale(50), borderRadius:scale(25)}}
               source={{uri:('data:image/jpeg;base64,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')}}
               />
            </View>
            <View style={{flexGrow:1, marginLeft:scale(10)}}>
                <WText style={{fontSize:textScale(20)}}>Yannis </WText>
                <WText style={{color:appColor.text_color_2, fontSize:textScale(13), fontWeight:200}} fontFamily='roman'>Mai 10, 3:35 PM</WText>
            </View>
            <View style={{}}>
                <View>
                    <PhoneIcon size={25}/>
                </View>
            </View>
        </View>
    )
})


export const RImage = React.memo((props:{url:string ; style:StyleProp<any>}) => {
    return(
        <Image
            resizeMode="cover"
            style={[{width:scale(50),height:scale(50), borderRadius:scale(25)}, props.style]}
            source={{uri:props.url}}
        />
    )
})


const styles = StyleSheet.create({
    headerstyle:{
        flexDirection:'row',
        justifyContent:'space-between',
        paddingHorizontal:scale(10),
        alignItems:'center',
        height:scale(50),
        // backgroundColor:'red'
    },
    headerIconContainer:{
        flexDirection:'row',
    }
})






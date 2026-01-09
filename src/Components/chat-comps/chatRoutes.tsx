import React from "react";
import { FlatList, SafeAreaView, Text, TextInput, View } from "react-native";
import { WText,WView } from "../../shared/themed";
import useAppcolor from "../../shared/useColor";
import { TContact, TMessage } from "../../shared/type";
import { DotsThreeVerticalIcon, PhoneIcon, VideoCameraIcon, ArrowLeftIcon, CheckIcon,ChecksIcon, MicrophoneIcon } from "phosphor-react-native";
import { RImage } from "../../shared/ReUsable";
import {  scale, textScale, verticalScale, } from "../../constants/responsiveSize";
import { useAppSelector } from "../../shared/rdx-hooks";

const ChatsRoutes = React.memo((props:any) => {
    const appColor = useAppcolor();
    const routeParams= props.route.params.contact as TContact
    const curl_user_details = useAppSelector (state => state.main.user_details)

    React.useLayoutEffect(() => {
        props.navigation.setOptions({
            headerLeft(props:any){
                console.log('props', routeParams)
                return <WView style={{flexDirection:'row', alignItems:'center'}}>
                    <WView style={{marginRight:scale(10)}}>
                        <ArrowLeftIcon size={24}/>
                    </WView>
                    <RImage url={routeParams.profileImage} style={{width:scale(45), height:scale(45), borderRadius:scale(45)}}/>
                    <WView style={{marginLeft:scale(10)}}>
                        <WText style={{fontSize:textScale(20)}}>
                            {routeParams.name}
                        </WText>
                        <WText fontFamily='roman'>
                            en ligne 
                        </WText>
                    </WView>
                </WView>
            },
            headerRight(props:any){
                return <WView style={{flexDirection:'row', alignItems:'center'}}>
                     <WView style={{marginLeft:scale(20),justifyContent:'center'}}>
                        <VideoCameraIcon size={30}/>
                    </WView>
                    <WView style={{marginLeft:scale(20),justifyContent:'center'}}>
                        <PhoneIcon size={30}/>
                    </WView>
                    <WView style={{marginLeft:scale(20),justifyContent:'center'}}>
                        <DotsThreeVerticalIcon size={30}/>
                    </WView>
                </WView>
            }
        })
    },[])

    const renderItem = (props:TMessage) =>{
        return (
            <WView style={{flexDirection:'row',justifyContent: props.sender_id == curl_user_details.id? 'flex-end' : "flex-start", paddingVertical:scale(2)}}>
                <WView style={{ backgroundColor:  props.sender_id == curl_user_details.id ? appColor.green_50 : appColor.dark_blue_50, borderRadius:scale(10),padding:scale(8), elevation:2, width:'auto', flexDirection:'row'}}>
                    <WView>
                        <WText style={{fontSize:textScale(16)}}>{props.message}</WText>
                    </WView>
                    <WView style={{flexDirection:'row', marginLeft:scale(8)}}>
                        <WText fontFamily='roman' style={{color:appColor.text_color_2}}>{props.time}</WText>
                        <WView>
                            <ChecksIcon/>
                        </WView>
                    </WView>
                </WView>
            </WView>
        )
    }

    return(
            <WView isParent style={{backgroundColor:appColor.dark_blue_50,}}>
                <FlatList
                    data={[{message:'tu es deja a quel niveau', time:'15:26', sender_id:1} as TMessage]}
                    renderItem={(props) =>renderItem(props.item)}
                    keyExtractor={(item, index) => index.toString()}
                    contentContainerStyle={{paddingHorizontal:scale(10),flex:1, paddingBottom:80}}
                />
             
                <WView style={{flexDirection:"row"}}>
                    <WView style={{flexGrow:1, paddingHorizontal:scale(8)}}>
                        <TextInput
                        style={{
                            height:scale(45),
                            backgroundColor:appColor.dark_blue_50,
                            elevation:2,
                            width:'100%'
                        }}
                        />
                    </WView>

                    <WView style={{backgroundColor:appColor.green_100, elevation:3, borderRadius:scale(50)}}>
                        <MicrophoneIcon size={40}/>
                    </WView>
                </WView>
            </WView>

    )
})

export default ChatsRoutes;
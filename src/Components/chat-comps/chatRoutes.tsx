import React from "react";
import { FlatList, SafeAreaView, Text, TextInput, View } from "react-native";
import { WText,WView } from "../../shared/themed";
import useAppcolor from "../../shared/useColor";
import { TContact, TMessage } from "../../shared/type";
import { DotsThreeVerticalIcon, PhoneIcon, VideoCameraIcon, ArrowLeftIcon, SmileyIcon,ChecksIcon, MicrophoneIcon, PaperclipIcon, CameraIcon } from "phosphor-react-native";
import { RImage } from "../../shared/ReUsable";
import {  scale, textScale, verticalScale, } from "../../constants/responsiveSize";
import { useAppSelector } from "../../shared/rdx-hooks";
import fonts from "../../constants/fonts";

const ChatsRoutes = React.memo((props:any) => {
    const appColor = useAppcolor();
    const [chatValue, setChatValue] = React.useState('');
    const routeParams= props.route.params.contact as TContact
    const curl_user_details = useAppSelector (state => state.main.user_details)
    const messages = useAppSelector(state => state.main.messages)

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

    const handleSubmit = React.useCallback(() => {
        if(chatValue !== ''){
            const d = new Date();
            const message:TMessage ={
                id:messages.length + 1,
                message:chatValue,
                sender_id:curl_user_details.id,
                time:d.getHours() + ":" + d.getMinutes() + "PM"
            }
        }
    },[chatValue, messages,])

    return(
            <WView isParent style={{backgroundColor:appColor.dark_blue_50,}}>
                <FlatList
                    data={messages}
                    renderItem={(props) =>renderItem(props.item)}
                    keyExtractor={(item, index) => index.toString()}
                    contentContainerStyle={{paddingHorizontal:scale(10),flex:1, paddingBottom:80}}
                />
             
                <WView style={{flexDirection:"row", alignItems:'flex-end',paddingBottom:scale(5), justifyContent:'space-between', paddingHorizontal:scale(10)}}>
                    <WView style={{flexGrow:1,  maxWidth:scale(350)}}>
                        <WView style={{width:scale(24), paddingHorizontal:scale(10), height:scale(24), position:'absolute', bottom:scale(12),left:scale(5), zIndex:4,}}>
                            <SmileyIcon />
                        </WView>
                        <TextInput
                        onChangeText={setChatValue}
                        multiline={true}
                        defaultValue={chatValue}
                        style={{
                            maxHeight:scale(200),
                            minHeight:scale(50),
                            borderRadius:scale(20),
                            backgroundColor:'red',
                            elevation:2,
                            width:'100%',
                            paddingLeft:scale(45),
                            paddingRight:scale(50),
                            maxWidth:scale(330),
                            fontSize:textScale(18),
                            fontFamily: fonts.roman
                        }}
                        />
                        <WView style={{paddingHorizontal:scale(10),
                            position:'absolute', 
                            bottom:scale(12),
                            flexDirection:"row",
                            right:scale(5),
                            zIndex:4,}}
                              >
                            <WView>
                             <PaperclipIcon size={24}/>
                            </WView>
                            {
                                chatValue.length == 0 && 
                                <WView>
                                    <CameraIcon size={24}/>
                                </WView>
                            }
                        </WView>
                    </WView>

                    <WView style={{ width:scale(45),height:scale(45),marginHorizontal:scale(5),backgroundColor:appColor.green_100, justifyContent:'center',alignItems:'center',elevation:3, borderRadius:scale(50)}}>
                        <MicrophoneIcon color="white" weight="fill"/>
                    </WView>
                </WView>
            </WView>

    )
})

export default ChatsRoutes;
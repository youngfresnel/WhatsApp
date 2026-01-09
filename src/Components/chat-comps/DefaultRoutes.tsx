import React from "react";
import { FlatList, Image, TextInput, View } from "react-native";
import { WText,WView } from "../../shared/themed";
import { ChatHead, TabsHeaderComponent } from "../../shared/ReUsable";
import { ArchiveIcon, BoxArrowDownIcon, CameraIcon,DotsThreeVerticalIcon } from "phosphor-react-native";
import { moderateScale, scale } from "../../constants/responsiveSize";
import useAppcolor from "../../shared/useColor";
import fonts from "../../constants/fonts";
import contacts from "../../shared/contacts";


const DefaultRoutes = React.memo((props:any) => {
    const appColor = useAppcolor();
    const headerIcons = [
        {icon:  <CameraIcon size={30} />, onPress:() => null},
        {icon:  <DotsThreeVerticalIcon size={30} />, onPress:() => props.navigation.navigate('chatPage')},
    ]
    return(
        <WView isParent>
            <FlatList
            data={[{}]}
            renderItem={() => <>            
            <TabsHeaderComponent bolder icons={headerIcons} title="WhatsApp"/>
            <View style={{paddingHorizontal:scale(10),}}>
                <View style={{ position:'relative', justifyContent:'center'}}>
                <Image
                style={{width:scale(30), height:scale(30),position:'absolute', zIndex:4, left:scale(10)}}
                source={{uri:('data:image/jpeg;base64,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')}}
                />
                <TextInput
                    style={{
                        height:scale(50),
                        paddingLeft:scale(50),
                        fontFamily:fonts.medium,
                        backgroundColor:appColor.inverse_gray_dark_50,
                        width:'100%',
                        borderRadius:scale(50),
                        fontSize:18
                    }}
                    placeholder="Ask Meta AI or Search"
                    placeholderTextColor={appColor.text_color_2}
                />
                </View>
            </View>
            <View style={{flexDirection:"row", alignItems:'center', paddingHorizontal:scale(10), height:scale(60), marginBottom:scale(10)}}>
                <View style={{width:scale(26), height:scale(26)}}>
                    <BoxArrowDownIcon/>
                </View>
                <View style={{flexGrow:1, marginLeft:scale(15)}}>
                    <WText style={{fontSize:20}}>Archive</WText>
                </View>
                <View>
                    <WText style={{color:appColor.green_100,}}  fontFamily='roman'>6</WText>
                </View>
            </View>

            <View style={{paddingHorizontal:moderateScale(10)}}>
                {contacts.map(contact => 
                    <ChatHead navigation={props.navigation} contact={contact}/>
                )}
            </View>
            </>}
            />
        </WView>

    )
})

export default DefaultRoutes;
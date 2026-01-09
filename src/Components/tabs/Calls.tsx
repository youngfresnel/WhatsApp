import { CameraIcon, MagnifyingGlassIcon,LinkSimpleHorizontalIcon } from "phosphor-react-native";
import React from "react";
import { FlatList, View } from "react-native";
import { WText, WView } from "../../shared/themed";
import { CallHead, TabsHeaderComponent } from "../../shared/ReUsable";
import useAppcolor from "../../shared/useColor";
import { moderateScale, scale, textScale, verticalScale } from "../../constants/responsiveSize";

const CallsComponent = React.memo((props:any) => {
    const appColor = useAppcolor();

     const headerIcons = [
        {icon:  <CameraIcon size={30} />, onPress:() => null},
        {icon:  <MagnifyingGlassIcon size={30} />, onPress:() => null},
    ]
    return(
        <WView>
            <TabsHeaderComponent title="Communities" icons={headerIcons}/>
            <FlatList
                data={[{}]}
                contentContainerStyle={{paddingHorizontal:scale(15)}}
                renderItem={() => <>
                <WView style={{flexDirection:"row",  marginVertical:verticalScale(20)}}>
                    <WView style={{
                        width:scale(55),
                        alignItems:"center",
                        justifyContent:'center', 
                        height:scale(55), backgroundColor:appColor.green_100, 
                        borderRadius:scale(80)
                        }}>
                            <WView >
                                <LinkSimpleHorizontalIcon  size={30} color="white"/>   
                            </WView>
                    </WView>

                    <WView style={{flexGrow:moderateScale(1), marginLeft:scale(20)}}>
                        <WText style={{ fontSize:textScale(20)}}>Create call link</WText>
                        <WText style={{ fontSize:textScale(15), color:appColor.text_color_2}} fontFamily="roman">Share a link for your whatsApp calls </WText>
                    </WView>
                </WView>
               
                
                <WView style={{

                }}>
                    <WText style={{fontSize:textScale(18), marginBottom:scale(20)}}>Recents</WText>

                    <CallHead/>
                    <CallHead/>
                    <CallHead/>
                    <CallHead/>
                    <CallHead/>
                    <CallHead/>
                    <CallHead/>
                    <CallHead/>
                    <CallHead/>
                    <CallHead/>
                </WView>
                </>}
            />

            
        </WView>
    )
})

export default CallsComponent;
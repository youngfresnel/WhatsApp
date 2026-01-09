import React from "react";
import { View } from "react-native";
import { WText, WView } from "../../shared/themed";
import { TabsHeaderComponent } from "../../shared/ReUsable";
import { CameraIcon, MagnifyingGlassIcon, DotsThreeVerticalIcon, UsersThreeIcon, PlusIcon } from "phosphor-react-native";
import { scale, textScale } from "../../constants/responsiveSize";
import useAppcolor from "../../shared/useColor";

const CommunitiesComponent = React.memo((props:any) => {
    const appColor = useAppcolor();

     
    
     const headerIcons = [
        {icon:  <CameraIcon size={30} />, onPress:() => null},
        {icon:  <MagnifyingGlassIcon size={30} />, onPress:() => null},
    ]

    return(
        <WView isParent>
            <TabsHeaderComponent title="Communities" icons={headerIcons}/>

            <WView style={{flexDirection:'row', alignItems:"center",padding:scale(20)}}>
                <WView style={{ width:scale(60), borderRadius:scale(15), height:scale(60), backgroundColor:appColor.text_color_2, justifyContent:'center', alignItems:'center'}}>
                    <WView>
                        <UsersThreeIcon color="white"/>
                    </WView>

                    <WView style={{position:'absolute', padding:scale(2), borderColor:appColor.dark_blue_10, borderWidth:scale(1),alignItems:"center", justifyContent:'center', borderRadius:scale(50), bottom:scale(0), right:scale(-5), backgroundColor:appColor.green_100}}>
                        <PlusIcon size={25}/>
                    </WView>
                </WView>
                
                <WView style={{flexShrink:1,marginLeft:scale(10)}}>
                    <WText style={{fontSize:textScale(20)}}>New Community</WText>
                </WView>
            </WView>

        </WView>
    )
})



export default CommunitiesComponent;
import React from "react";
import { View } from "react-native";
import { WView } from "../../shared/themed";
import { TabsHeaderComponent } from "../../shared/ReUsable";
import { CameraIcon, MagnifyingGlassIcon, DotsThreeVerticalIcon, UsersThreeIcon } from "phosphor-react-native";
import { scale } from "../../constants/responsiveSize";
import useAppcolor from "../../shared/useColor";

const CommunitiesComponent = React.memo((props:any) => {
    const appColor = useAppcolor();

     
    
     const headerIcons = [
        {icon:  <CameraIcon size={30} />, onPress:() => null},
        {icon:  <MagnifyingGlassIcon size={30} />, onPress:() => null},
        // {icon:  <DotsThreeVerticalIcon size={30} />, onPress:() => null},
    ]

    return(
        <WView isParent>
            <TabsHeaderComponent title="Communities" icons={headerIcons}/>

            <WView>
                <WView style={{ width:scale(50), height:scale(50), backgroundColor:appColor.text_color_2}}>
                    <WView style={{width:scale(40) , height:scale(40)}}>
                        <UsersThreeIcon/>
                    </WView>
                </WView>
            </WView>

        </WView>
    )
})


export default CommunitiesComponent;
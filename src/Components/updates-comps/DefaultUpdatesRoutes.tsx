import React from "react";
import { WText, WView } from "../../shared/themed";
import { RImage, TabsHeaderComponent } from "../../shared/ReUsable";
import useAppcolor from "../../shared/useColor";
import { CameraIcon, DotsThreeVerticalIcon, MagnifyingGlassIcon } from "phosphor-react-native";
import { scale, textScale } from "../../constants/responsiveSize";
import { FlatList } from "react-native";
import statusUpdate from "../../shared/statusUpdate";
// import { View } from "react-native/types_generated/index";


const DefaultUpdatesRoutes = React.memo((props:any) => {
    const appColor = useAppcolor();
    const headerIcons = [
        {icon:  <CameraIcon size={30} />, onPress:() => null},
        {icon:  <MagnifyingGlassIcon size={30} />, onPress:() => null},
        {icon:  <DotsThreeVerticalIcon size={30} />, onPress:() => null},
    ]
    return(
        <WView isParent>
                <TabsHeaderComponent bolder icons={headerIcons} title="WhatsApp"/>
                <FlatList
                data={[{}]}
                contentContainerStyle={{paddingHorizontal:scale(15)}}
                renderItem={() => <>
                    <WView style={{}}>
                        <WView style={{flexDirection:'row', justifyContent:'space-between', marginBottom:scale(15)}}>
                            <WText style={{fontSize:textScale(22)}} fontFamily='medium'>Status</WText>
                            <DotsThreeVerticalIcon size={30} />
                        </WView>
                        <WView style={{flexDirection:'row',}}>
                            {statusUpdate.map((status, index) => 
                                <WView style={{width:scale(80), height:scale(80), borderWidth:scale(1), borderColor:'red'}}>
                                    <WView style={{
                                        marginRight:scale(20),
                                        width:scale(75), 
                                        height:scale(75), 
                                        borderRadius:scale(50), 
                                        backgroundColor:index == 1 ? 'yellow' : 'lightgreen',
                                        alignItems:'center', 
                                        justifyContent:'center'}}
                                        >
                                    <WText style={{textAlign:'center'}}> {status.status.at(-1)!.text.split(' ').slice(0, 4).join(' ')}</WText>
                                    </WView>
                                </WView>
                            )}                          
                        </WView>
                    </WView>
                </>}
            />
        </WView>
    )
})

export default DefaultUpdatesRoutes;
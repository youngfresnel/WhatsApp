import React from "react";
import { View } from "react-native";
import { WText,WView } from "../../shared/themed";
import useAppcolor from "../../shared/useColor";
import { TContact } from "../../shared/type";
import { RImage } from "../../shared/ReUsable";
import { height, scale, textScale, width } from "../../constants/responsiveSize";

const ChatsRoutes = React.memo((props:any) => {
    const appColor = useAppcolor();
    const routeParams= props.route.params.contact as TContact
    React.useLayoutEffect(() => {
        props.navigation.setOptions({
            headerTitle(props:any){
                console.log('prps', routeParams)
                return <WView style={{flexDirection:'row', alignItems:'center'}}>
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
                return <WView>

                </WView>
            }
        })
    },[])
    return(
        <WView isParent style={{backgroundColor:appColor.dark_blue_50, alignItems:'center', justifyContent:'center'}}>
            <WText style={{textAlign:"center"}}>On peut commencer a dicuter entre nous ici</WText>
        </WView>

    )
})

export default ChatsRoutes;
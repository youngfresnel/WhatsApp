import React from "react";
import { Text, View } from "react-native";
import fonts from "../constants/fonts";
import { IWText, IWView } from "./type";
import { scale } from "../constants/responsiveSize";
import useAppcolor from "./useColor";

 export const WText = React.memo ((props:IWText) => {
    const appColor = useAppcolor();
    return(
        <Text {...props} style={[ {color:appColor.text_color_1},   props.style, {fontFamily:fonts[props.fontFamily as keyof typeof fonts ]?? fonts.medium}]}>
            {props.children}
        </Text>
    )
})

export const WView = React.memo((props:IWView) => {
     const appColor = useAppcolor();
    return(
        <View {...props} style={[props.isParent && {flex:1, backgroundColor:appColor.dark_blue_10}, props.style,]}>
            {props.children}
        </View>
    )
})  
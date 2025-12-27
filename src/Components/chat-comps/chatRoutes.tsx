import React from "react";
import { View } from "react-native";
import { WText,WView } from "../../shared/themed";
import useAppcolor from "../../shared/useColor";

const ChatsRoutes = React.memo((props:any) => {
    const appColor = useAppcolor();
    return(
        <WView isParent style={{backgroundColor:appColor.dark_blue_50}}>
            <WText>Chats Routes</WText>
        </WView>

    )
})

export default ChatsRoutes;
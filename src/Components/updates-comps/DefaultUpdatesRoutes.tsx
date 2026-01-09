import React from "react";
import { WText, WView } from "../../shared/themed";
import { ChatHead, RImage, TabsHeaderComponent } from "../../shared/ReUsable";
import useAppcolor from "../../shared/useColor";
import { CameraIcon, DotsThreeVerticalIcon, MagnifyingGlassIcon, PlusIcon } from "phosphor-react-native";
import { height, moderateScale, scale, textScale, verticalScale } from "../../constants/responsiveSize";
import { FlatList, StyleSheet } from "react-native";
import statusUpdate from "../../shared/statusUpdate";
import contacts from "../../shared/contacts";



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
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{ marginBottom:scale(30)}}
                renderItem={() => <>
                    <WView  style={{}}>
                        <WView style={{flexDirection:'row',  justifyContent:'space-between', paddingHorizontal:scale(15), marginBottom:scale(15)}}>
                            <WText style={{fontSize:textScale(22)}} fontFamily='medium'>Status</WText>
                            <DotsThreeVerticalIcon size={30} />
                        </WView>
                        <WView style={{flexDirection:'row',paddingHorizontal:scale(15), marginBottom:scale(30), borderBottomColor:'gray', borderBottomWidth:scale(.4), paddingBottom:verticalScale(20)}}>
                            {statusUpdate.map((status, index) => 
                                 <WView style={{ alignItems:'center', marginRight:scale(20)}}>
                                    <WView style={{
                                        width:scale(85),
                                        height:scale(140),
                                        borderRadius:scale(20),
                                        padding:scale(5), 
                                        borderWidth:scale(2), 
                                        borderColor:appColor.green_100, 
                                        justifyContent:'center', 
                                        alignItems:'center'
                                        }}>
                                            <WView style={{
                                                width:scale(80), 
                                                height:scale(135), 
                                                borderRadius:scale(20), 
                                                backgroundColor:index == 1 ? 'yellow' : 'lightgreen',
                                                alignItems:'center', 
                                                justifyContent:'center'
                                            }}
                                            >
                                            <WText style={{textAlign:'center'}}> {status.status.at(-1)!.text.split(' ').slice(0, 4).join(' ')}</WText>
                                        </WView>
                                    </WView>
                                        <WText fontFamily='light' style={{fontSize:textScale(14),}}>{contacts.find(contact => contact.id == status.user_id)?.name}</WText>
                                </WView>
                            )}                          
                        </WView>
                    </WView>
                    
                     <WView  style={{}}>
                        <WView style={{flexDirection:'row',  justifyContent:'space-between', paddingHorizontal:scale(15), marginBottom:scale(15)}}>
                            <WText style={{fontSize:textScale(22)}} fontFamily='medium'>Chainnes</WText>
                            <WView style={{}}>
                                <PlusIcon size={22} />
                            </WView>
                        </WView>
                        <WView style={{paddingHorizontal:scale(15), marginBottom:scale(30), borderBottomColor:'gray', borderBottomWidth:scale(.4), paddingBottom:verticalScale(20)}}>
                            {contacts.slice(0, 2).map(contact => 
                            <ChatHead navigation={props.navigation} contact={contact}/>
                            )}                         
                        </WView>
                    </WView>
                    
                    <WView  style={{}}>
                        <WView style={{flexDirection:'row',  justifyContent:'space-between', paddingHorizontal:scale(15), marginBottom:scale(15)}}>
                            <WText style={{fontSize:textScale(22)}} fontFamily='medium'>Chainnes</WText>
                            <WView style={{}}>
                                <WText style={{color:appColor.green_100}}>Tous voir</WText>
                            </WView>
                        </WView>
                        <WView style={{ marginBottom:scale(30), borderBottomColor:'gray', borderBottomWidth:scale(.4), paddingBottom:verticalScale(20)}}>
                                <FlatList 
                                data={[{title:'Lagence YOP'},{title:'MboaBus'},{title:'YOP market'}, {title:'Marius Phone '}, {title:'Yann stream music'},{title:'Hugor Big data'}]}
                                renderItem={(item,) =>
                                <WView style={style.findchannel}>
                                    <WView style={{alignItems:'center', justifyContent:'center', marginTop:scale(15)}}>
                                        <RImage style={{width:scale(70), height:scale(70), borderRadius:scale(60)}} url="data:image/jpeg;base64,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"/>
                                    </WView>
                                    <WView style={{marginTop:scale(10)}}>
                                        <WText style={{textAlign:'center', fontSize:textScale(15)}}>{item.item.title}</WText>
                                    </WView>
                                    <WView style={{alignItems:'center', marginTop:scale(10)}}>
                                        <WText style={{color:appColor.green_100, paddingVertical:verticalScale(5), width:'80%', textAlign:'center', borderRadius:scale(50), backgroundColor:appColor.green_150}}> Suivre</WText>
                                    </WView>
                                </WView>
                                }
                                contentContainerStyle={{ paddingLeft:moderateScale(20)}}
                                horizontal={true}
                                showsHorizontalScrollIndicator={false}
                                keyExtractor={(item, index) => index.toString()}
                                />
                        </WView>
                    </WView>

                </>}
            />
        </WView>
    )
});

const style = StyleSheet.create({
    findchannel:{
        width:scale(150),
        height:scale(170),
        borderColor:"gray",
        borderWidth:scale(.4),
        borderRadius:scale(15),
        // alignItems:'center',
        marginRight:scale(15),
        // backgroundColor:'red'
    }
})

export default DefaultUpdatesRoutes;
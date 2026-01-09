import React from 'react'
import { SafeAreaView, StatusBar, useColorScheme, View,Text } from 'react-native';
import {BottomNavigation} from 'react-native-paper'
import {ChatCenteredIcon, ClockClockwiseIcon, UsersThreeIcon,PhoneIcon} from 'phosphor-react-native'
import useAppcolor from './src/shared/useColor';
import fonts from './src/constants/fonts';
import ChatsComponent from './src/Components/tabs/Chats';
import UpdateComponent from './src/Components/tabs/update';
import CommunitiesComponent from './src/Components/tabs/Communities';
import CallsComponent from './src/Components/tabs/Calls';
  const App = () => {
  const isDarkMode = useColorScheme() === 'dark';
  const appColor = useAppcolor()

  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'chat', title: 'chat', focusedIcon: (props:any) => <ChatCenteredIcon {...props} weight='fill'/>, unfocusedIcon:(props:any) => <ChatCenteredIcon {...props}/> },
    { key: 'update', title: 'update', focusedIcon: (props:any) => <ClockClockwiseIcon {...props} weight='fill'/>, unfocusedIcon:(props:any) => <ClockClockwiseIcon {...props}/> },
    { key: 'community', title: 'Communities', focusedIcon: (props:any) => <UsersThreeIcon {...props} weight='fill'/> , unfocusedIcon:(props:any) => <UsersThreeIcon {...props} />},
    { key: 'calls', title: 'Calls', focusedIcon: (props:any) => <PhoneIcon {...props} weight='fill'/>, unfocusedIcon:(props:any) => <PhoneIcon {...props}/> },
  ]);


  const renderScene = BottomNavigation.SceneMap({
    chat: ChatsComponent,
    update: UpdateComponent,
    community: CommunitiesComponent,
    calls: CallsComponent,
  });

  return (
    <SafeAreaView style={{flex:1}}>
      <StatusBar
      barStyle={isDarkMode ? 'light-content' : 'dark-content'}
      backgroundColor={appColor.dark_blue_10}
      />
      <View style={{flex:1}}>
      <BottomNavigation
      activeIndicatorStyle={{
        backgroundColor:appColor.green_50
      }}
      barStyle={{backgroundColor:appColor.dark_blue_10, borderTopWidth: .3, borderTopColor:'lightgray'}}
        renderLabel={(props:any)=> <Text {...props} style={{fontFamily:fonts.medium,  color:appColor.text_color_1, textAlign:"center",}}>{props.route.title}</Text>}
        navigationState={{ index, routes }}
        onIndexChange={setIndex}
        renderScene={renderScene}
      />
      </View>
    </SafeAreaView>
  );
}

export default App;
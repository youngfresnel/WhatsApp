import { TextProps, ViewProps } from "react-native";
import fonts from "../constants/fonts";

// Define a type for the slice state
export interface IMainSlice {
  user_details : TUserDetails
  messages:TMessage[];

}

export interface IWText extends TextProps {
  fontFamily?:keyof typeof fonts
}

export interface IWView extends ViewProps{
  isParent?:boolean;
}

export interface ITabHeaderProps {
  title:string;
  icons:THeaderIcons[];
  bolder?:boolean;
}

export type THeaderIcons ={
  icon:any;
  onPress:Function
}

 export type TContact = {
  id: number;
  name: string;
  lastMessage: string;    
  profileImage: string;   
}

export type TMessage ={
    id:number;
    message:string;
    time:string;
    sender_id:number;
}

export type TUserDetails = {
  id:number;
  name:string;
  profile_picture:string;
}
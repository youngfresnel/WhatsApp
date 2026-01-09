import { TextProps, ViewProps } from "react-native";
import fonts from "../constants/fonts";

// Define a type for the slice state
export interface IMainSlice {
  value: number
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
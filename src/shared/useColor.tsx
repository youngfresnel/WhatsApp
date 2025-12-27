import React from 'react'
import { useColorScheme } from 'react-native';
import colors from '../constants/colors';

const useAppcolor = () =>{
    const appMode = useColorScheme () ?? 'light'

    return colors[appMode]
}

export default useAppcolor
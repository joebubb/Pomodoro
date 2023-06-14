import React from "react";
import { View, Pressable, Text, Image } from 'react-native'; 

interface props {
    src: any, 
    f: () => void,
}

const ButtonImage: React.FC<props> = ({ src, f }) => {
    return (
        <Pressable onPress={f}>
            <Image source={src}/>
        </Pressable>
    )
}

export default ButtonImage; 
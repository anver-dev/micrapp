import React from 'react'
import { Image, View } from 'react-native'

export const WhiteLogo = () => {
    return (
        <View style={{
            alignItems: 'center'
        }}>
            <Image 
                source={ require('../../assets/images/logo.png') }
                style={{
                    width: 300,
                    height: 300 
                }}
            />
        </View>
    )
}

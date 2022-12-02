import React from 'react'
import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import styles from '../GlobalStyling'

export default function Login() {
    return (
        <View style={{ height: '100%', backgroundColor: 'white' }}>


            <Text style={styleIn.mainHeading} >LOGIN</Text>

            <View style={[styleIn.mainContainer, styles.shadow]}>

                <View style={[styles.ShadowLight, styleIn.InputBox]}>

                    <Image source={{ uri: 'http://cdn.onlinewebfonts.com/svg/img_386071.png' }} style={{ width: 25, height: 25 }}></Image>

                    <TextInput placeholder='Email ID' style={styleIn.inputField}></TextInput>
                </View>

                <View style={[styles.ShadowLight, styleIn.InputBox]}>

                    <Image source={{ uri: 'http://cdn.onlinewebfonts.com/svg/img_228829.png' }} style={{ width: 20, height: 24 }}></Image>

                    <TextInput placeholder='Password' style={styleIn.inputField}></TextInput>
                </View>

                <TouchableOpacity style={[styles.buttonBox, {backgroundColor:'cornflowerblue'}]}>
                    <Text style={{color:'white', fontSize:15,}}>Login</Text>
                </TouchableOpacity>



            </View>



            <View style={{ height: '50%', width: '100%', backgroundColor: 'cornflowerblue', position: 'absolute', top: 0, borderBottomLeftRadius: 20, borderBottomRightRadius: 20, }}>

            </View>
        </View>
    )
}

const styleIn = StyleSheet.create({
    mainHeading: { color: 'white', fontSize: 50, zIndex: 2, alignSelf: 'center', fontWeight: '600', marginVertical: '20%', },

    mainContainer: {  backgroundColor: 'white', margin: 20, zIndex: 1, borderRadius: 20, padding: '7%' },

    InputBox: { backgroundColor: 'white', width: '100%', borderRadius: 15, overflow: 'hidden', padding: 10, flexDirection: 'row', alignItems: 'center', marginVertical: 15, },

    inputField: { paddingHorizontal: 15, fontSize: 15, paddingVertical: 0, }
})

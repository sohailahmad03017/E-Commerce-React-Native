import React from 'react'
import { Image, ScrollView, Text, TouchableOpacity, View } from 'react-native'
import styles from '../GlobalStyling'
import Styles from './styling'

export default function Product({navigation, route}) {

    const s = Styles;
     
    const data = route.params

  return (
    <View style={{backgroundColor:'lightgray', minHeight:'100%'}}>
    <ScrollView >
        <View style={[ styles.ShadowLight, s.p2,{width:'90%', marginTop:20, backgroundColor:'white', alignSelf:'center', borderRadius:20}]}>

        <Text style={[s.fs6, s.textCenter, s.textBold]} >{data.category}</Text>

        <Image source={{uri: `${data.image}`}} style={{width:'90%', height: 300, resizeMode:'contain', marginVertical:20, alignSelf:'center'}} />

        <Text style={[s.fs3, s.textBold ]} >Rs. {data.price * 25}</Text>
        <Text style={[s.fs6,]} >{data.title}</Text>

        <TouchableOpacity style={{backgroundColor:'green', alignSelf:'center', margin:10, borderRadius:10, }}>
            <Text style={{color:'white', marginHorizontal:15, marginVertical:5,  }}>Add to Cart</Text>
        </TouchableOpacity>

        <Text style={[s.fs6, s.textBold ]} >Description:</Text>
        <Text style={[s.fs6,]} >{data.description}</Text>


        </View>
    </ScrollView>
    </View>
  )
}

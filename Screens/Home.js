import React, { useEffect, useState } from 'react'
import { Image, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import styles from '../GlobalStyling'

import axios from 'axios';

export default function Home({ navigation }) {

  const [data, setData] = useState([]);
  const [searchedData, setSearchedData] = useState([]);
  const [isLoading, setIsLoading] = useState(true)

  const searchData = (val) => {
    let searched = data.filter((e, i) => e.title.toLowerCase().includes(val.toLowerCase()))
    setSearchedData(searched);
  }


  useEffect(() => {

    axios.get('https://fakestoreapi.com/products').then((success) => {
      setData(success.data)
      setSearchedData(success.data)
      setIsLoading(false);
    }).catch((error) => console.log(error));

  }, []);




  return (
    <View style={{ backgroundColor: 'lightgray', minHeight: '100%', justifyContent: 'center', alignItems: 'center' }}>

      {
        !isLoading ?
          <>
            <View style={[styles.ShadowLight, styleIn.InputBox,]}>

              <Image source={{ uri: 'https://openclipart.org/image/2400px/svg_to_png/213239/Search-icon.png' }} style={{ width: 20, height: 20 }}></Image>

              <TextInput placeholder='Search Here' onChangeText={(e) => searchData(e)} style={styleIn.inputField}></TextInput>
            </View>

            <ScrollView style={{ marginBottom: 50 }}>
              <View style={{ flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-evenly' }}>
                {searchedData && searchedData.length > 0 ?
                  searchedData.map((e, i) => <TouchableOpacity
                    onPress={() => navigation.navigate('Product', e)}
                    key={i} style={[styles.card, styles.ShadowLight]} >

                    <Image source={{ uri: `${e.image}` }} style={{ width: '80%', height: 120, resizeMode: 'contain', alignSelf: 'center', marginBottom: 10, }} />

                    <Text style={{ fontWeight: 'bold', fontSize: 13 }} >Rs. {e.price * 25} </Text>

                    <Text style={{ fontSize: 10 }}>{e.title.slice(0, 50)}</Text>

                    <Text style={{ fontWeight: 'bold', fontSize: 12 }} >{e.category}</Text>

                  </TouchableOpacity>)
                  : <Text style={styleIn.errText}>Sorry, Not Available</Text>
                }
              </View>
            </ScrollView>
          </>
          : <Image source={{ uri: "https://gifimage.net/wp-content/uploads/2018/11/loading-gif-free-download-6.gif" }} style={{ width: '30%', height: 200, resizeMode: 'contain' }} />
      }
    </View>
  )
}

const styleIn = StyleSheet.create({
  mainHeading: { color: 'white', fontSize: 50, zIndex: 2, alignSelf: 'center', fontWeight: '600', marginVertical: '20%', },

  mainContainer: { backgroundColor: 'white', margin: 20, zIndex: 1, borderRadius: 20, padding: '7%' },

  InputBox: { backgroundColor: 'white', width: '90%', borderRadius: 15, overflow: 'hidden', padding: 10, flexDirection: 'row', alignItems: 'center', marginVertical: 5, marginHorizontal: 25, marginTop: 10, alignSelf: 'center' },

  inputField: { paddingHorizontal: 15, fontSize: 15, paddingVertical: 0, },

  errText: { color: 'red', alignSelf: 'center', marginTop: 40, fontSize: 20 }
})

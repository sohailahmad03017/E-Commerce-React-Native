
import React, { useEffect, useState } from 'react'
import { Image, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native'
import styles from '../GlobalStyling'
import axios from 'axios';

export default function Home() {

  const [data, setData] = useState([]);
  const [searchedData, setSearchedData] = useState([]);

  useEffect(() => {

    axios.get('https://fakestoreapi.com/products').then((success) => { setData(success.data) }).catch((error) => console.log(error));

  }, []);


  console.log(data)

  return (
    <View style={{ paddingBottom: 150 }}>
      <Text style={styles.header}>Home Pa</Text>

      <View style={[styles.ShadowLight, styleIn.InputBox,]}>

        <Image source={{ uri: 'https://openclipart.org/image/2400px/svg_to_png/213239/Search-icon.png' }} style={{ width: 20, height: 20 }}></Image>

        <TextInput placeholder='Search Here' style={styleIn.inputField}></TextInput>
      </View>

      <ScrollView >
        {searchedData && searchedData.length > 0 &&
          searchedData.map((e, i) => <View key={i} style={[styles.card, styles.ShadowLight]} >
            <Image source={{ uri: `${e.image}` }} style={{ width: '50%', height: 200, resizeMode: 'contain', alignSelf: 'center', marginBottom: 10, }} />
            <Text style={{ fontWeight: 'bold', fontSize: 17 }} >Rs. {e.price}</Text>
            <Text>{e.title}</Text>
            <Text style={{ fontWeight: 'bold' }} >{e.category}</Text>
          </View>)
        }
      </ScrollView>

      <ScrollView >
        {data && data.length > 0 &&
          data.map((e, i) => <View key={i} style={[styles.card, styles.ShadowLight]} >
            <Image source={{ uri: `${e.image}` }} style={{ width: '50%', height: 200, resizeMode: 'contain', alignSelf: 'center', marginBottom: 10, }} />
            <Text style={{ fontWeight: 'bold', fontSize: 17 }} >Rs. {e.price}</Text>
            <Text>{e.title}</Text>
            <Text style={{ fontWeight: 'bold' }} >{e.category}</Text>
          </View>)
        }
      </ScrollView>







    </View>
  )
}

const styleIn = StyleSheet.create({
  mainHeading: { color: 'white', fontSize: 50, zIndex: 2, alignSelf: 'center', fontWeight: '600', marginVertical: '20%', },

  mainContainer: { backgroundColor: 'white', margin: 20, zIndex: 1, borderRadius: 20, padding: '7%' },

  InputBox: { backgroundColor: 'white', width: '85%', borderRadius: 15, overflow: 'hidden', padding: 10, flexDirection: 'row', alignItems: 'center', marginVertical: 5, marginHorizontal: 25 },

  inputField: { paddingHorizontal: 15, fontSize: 15, paddingVertical: 0, }
})

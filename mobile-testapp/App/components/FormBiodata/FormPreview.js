import React from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { View,Text, Image, FlatList } from 'react-native'
import { Card } from '@rneui/themed';

export const FormPreview=()=> {
    const biodata = useSelector((state) => state.biodata)
    const fotoKTP = useSelector((state) => state.biodata.fotoKTP)
    const dispatch = useDispatch();


    const data = [
      {label:'NIK', value: biodata.noKTP},
      {label:'Nama', value: biodata.nama},
      {label:'Email', value: biodata.email},
      {label:'Tempat Lahir', value: biodata.tempatLahir},
      {label:'Tgl Lahir', value: biodata.tglLahir},
      {label:'Alamat', value: biodata.alamat},
    ]

    return(
      <View>
        {fotoKTP && (
          <View style={{alignItems:'center'}}>
            <Image
              source={{ uri: fotoKTP }}
              style={{ width: 300, height: 300 }}
            />
          <Card.Divider/>
          </View>
        )}

        <FlatList
          data={data}
          renderItem={({item}) => {
            return(
              <View style={{flexDirection: 'row',}}>
                <Text style={{flex:1, fontWeight:'bold', textAlign:'right'}}>{item.label} </Text>
                <Text style={{flex:2}}>: {item.value}</Text>
              </View>
            )
          }}
        />

      </View>
    );
}
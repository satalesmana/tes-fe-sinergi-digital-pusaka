import React, {useState} from 'react';
import { useSelector, useDispatch } from 'react-redux'
import {View, Text, TextInput, StyleSheet } from 'react-native';
import { Button } from '@rneui/themed';
import { DateTimePickerAndroid } from '@react-native-community/datetimepicker';
import { SelectList } from 'react-native-dropdown-select-list'

import { 
    setNama,
    setEmail,
    setTempatLahir,
    setTglLahir,
    setAlamat,
    setNoKTP
} from '../../store/reducer/biodataReducer'
 
  
export const FormInput=()=> {
    const noKTP = useSelector((state) => state.biodata.noKTP)
    const nama = useSelector((state) => state.biodata.nama)
    const email = useSelector((state) => state.biodata.email)
    const tempatLahir = useSelector((state) => state.biodata.tempatLahir)
    const tempatLahirVal = useSelector((state) => state.biodata.tempatLahirVal)
    const tglLahir = useSelector((state) => state.biodata.tglLahir)
    const alamat = useSelector((state) => state.biodata.alamat)
    const Countries =  useSelector((state) => state.biodata.countries)
    const dispatch = useDispatch()
    const [date, setDate] = useState(new Date());

    const onChangeDate = (event, selectedDate) => {
        const currentDate = selectedDate || date;
        setDate(currentDate)
        let tmpDate = new Date(currentDate)
        let fDate = tmpDate.getDate() +"/"+tmpDate.getMonth()+"/"+tmpDate.getFullYear();
        dispatch(setTglLahir(fDate))
    };

    const showModeDatePicker = () => {
        DateTimePickerAndroid.open({
            value: date,
            onChange:onChangeDate,
            mode: 'date',
            is24Hour: true,
        });
    };

    return(
        <View>
            <View>
                <Text>NIK</Text>
                <TextInput
                    placeholder='Type NIK'
                    style={style.inputSytle}
                    value={noKTP}
                    onChangeText={(val)=>dispatch(setNoKTP(val))}
                />
            </View>
            <View>
                <Text>Nama</Text>
                <TextInput
                    placeholder='Type Name'
                    style={style.inputSytle}
                    value={nama}
                    onChangeText={(val)=>dispatch(setNama(val))}
                />
            </View>

            <View>
                <Text>Email</Text>
                <TextInput
                    placeholder='Type Email'
                    style={style.inputSytle}
                    value={email}
                    onChangeText={(val)=>dispatch(setEmail(val))}
                />
            </View>
            
            <View>
                <Text>Tanggal Lahir</Text>
                <View style={{flexDirection:'row'}}>
                    <TextInput
                        placeholder='Type Tgl Lahir'
                        style={[style.inputDateSytle, {flex:2}]}
                        value={tglLahir}
                        editable={false}
                    />
                    <Button
                        color="primary"
                        icon={{
                            name: 'calendar',
                            type: 'font-awesome',
                            size: 15,
                            color: 'white',
                        }}
                        buttonStyle={style.inputBtnSytle}
                        onPress={showModeDatePicker}
                    />
                </View>
            </View>
            
            <View>
                <Text>Tempat Lahir</Text>
                <SelectList 
                    setSelected={(val) => dispatch(setTempatLahir(val))} 
                    data={Countries}
                    defaultOption={{ key:tempatLahirVal, value: tempatLahir }}
                />
            </View>

            <View>
                <Text>Alamat</Text>
                <TextInput
                    placeholder='Alamat'
                    style={style.inputSytleTextarea}
                    value={alamat}
                    multiline
                    numberOfLines={4}
                    editable
                    maxLength={100}
                    onChangeText={(val)=>dispatch(setAlamat(val))}
                />
            </View>
        </View>
    )
}

const style = StyleSheet.create({
    inputSytle:{
        height: 40,
        marginTop: 8,
        marginBottom:14,
        borderWidth: 1,
        borderColor:'#006175',
        borderRadius:5,
        padding: 10,
    },
    inputDateSytle:{
        height: 40,
        marginTop: 8,
        marginBottom:14,
        //borderWidth: 1,
        borderColor:'#006175',
        borderLeftWidth:1,
        borderTopWidth:1,
        borderBottomWidth:1,
        borderBottomLeftRadius:5,
        borderTopLeftRadius:5,
        padding: 10,
    },
    inputBtnSytle:{
        height: 40,
        marginTop: 8,
        marginBottom:14,
        flex:1,
        borderRightWidth:1,
        borderTopWidth:1,
        borderBottomWidth:1,
        borderColor:'#006175',
    },
    inputSytleTextarea:{
        marginTop: 8,
        marginBottom:14,
        borderWidth: 1,
        borderColor:'#006175',
        borderRadius:5,
        padding: 10,
        textAlignVertical:'top'
    }
})
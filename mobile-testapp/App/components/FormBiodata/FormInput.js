import React from 'react';
import { useSelector, useDispatch } from 'react-redux'
import {View, Text} from 'react-native';
import { Input } from '@rneui/themed';
import { 
    setNama,
    setEmail,
    setTempatLahir,
    setTglLahir,
    setAlamat,
    setNoKTP
} from '../../store/reducer/biodataReducer'
const Countries = [
    { label: "Bekasi", value: 1 },
    { label: "Jakarta", value: 2 },
    { label: "Surabaya", value: 3 },
    { label: "Bandung", value: 4 },
    { label: "Padang", value: 5 },
    { label: "Palembang", value: 6 },
    { label: "Yogyakarta", value: 7 }
];
 
  
const FormInput=()=> {
    const noKTP = useSelector((state) => state.biodata.noKTP)
    const nama = useSelector((state) => state.biodata.nama)
    const email = useSelector((state) => state.biodata.email)
    const tempatLahir = useSelector((state) => state.biodata.tempatLahir)
    const alamat = useSelector((state) => state.biodata.alamat)
    const tglLahir = useSelector((state) => state.biodata.tglLahir)
    const dispatch = useDispatch()
    return(
        <View>
            <View>
                <Text>asdf</Text>
               
            </View>
        </View>
    )
}

export {
    FormInput
};
import { createSlice } from '@reduxjs/toolkit'

export const biodataSlice = createSlice({
    name: 'biodata',
    initialState: {
        counter:0,
        noKTP:"",
        nama: "",
        email: "",
        tempatLahir: "",
        tempatLahirVal:"",
        tglLahir: "",
        alamat:"",
        fotoKTP: null,
        countries:[
            { value: "Bekasi", key: 1 },
            { value: "Jakarta", key: 2 },
            { value: "Surabaya", key: 3 },
            { value: "Bandung", key: 4 },
            { value: "Padang", key: 5 },
            { value: "Palembang", key: 6 },
            { value: "Yogyakarta", key: 7 }
        ]
    },
  reducers: {
    setNoKTP:(state, actions)=>{
        state.noKTP = actions.payload
    },
    setNama:(state, actions)=>{
        state.nama = actions.payload
    },
    setEmail:(state, actions)=>{
        state.email =actions.payload
    },
    setTempatLahir:(state, actions)=>{
        state.tempatLahirVal = actions.payload
        state.countries.map((data)=>{
            if(data.key == actions.payload){
                state.tempatLahir = data.value
            }
        })
    },
    setTglLahir:(state, actions)=>{
        state.tglLahir = actions.payload
    },
    setAlamat:(state, actions)=>{
        state.alamat = actions.payload
    },
    setFotoKTP:(state, actions)=>{
        state.fotoKTP = actions.payload
    },
    setNext:(state) => {
        state.counter += 1
    },
    setPrev:(state) => {
        state.counter -= 1
    }
  }
})

export default biodataSlice.reducer
export const {
    setNama,
    setEmail,
    setTempatLahir,
    setTglLahir,
    setAlamat,
    setFotoKTP,
    setNoKTP,
    setNext,
    setPrev
} = biodataSlice.actions
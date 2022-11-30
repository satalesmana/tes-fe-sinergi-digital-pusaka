import { createSlice } from '@reduxjs/toolkit'

export const biodataSlice = createSlice({
    name: 'biodata',
    initialState: {
        counter:0,
        noKTP:"",
        nama: "",
        email: "",
        tempatLahir: "",
        tglLahir: "",
        alamat:"",
        fotoKTP: [],
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
        state.tempatLahir = actions.payload
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
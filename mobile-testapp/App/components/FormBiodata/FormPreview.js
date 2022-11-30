import React from 'react';
import { useSelector, useDispatch } from 'react-redux'

const thumbsContainer = {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 16,
    justifyContent:"center",    
  };
  
  const thumb = {
    display: 'inline-flex',
    borderRadius: 2,
    border: '1px solid #eaeaea',
    marginBottom: 8,
    marginRight: 8,
    width: 300,
    height: 300,
    padding: 4,
    boxSizing: 'border-box'
  };
  
  const thumbInner = {
    display: 'flex',
    minWidth: 0,
    border:'solid 1px #000',
    overflow: 'hidden'
  };
  
  const img = {
    display: 'block',
    width: 'auto',
    height: '100%'
  };

const FormPreview=()=> {
    const biodata = useSelector((state) => state.biodata)
    const fotoKTP = useSelector((state) => state.biodata.fotoKTP)
    console.log('biodata', biodata)
    const data={
        nama:biodata.nama,
        email:biodata.email,
        tempatLahir:biodata.tempatLahir,
        tglLahir:biodata.tglLahir,
        alamat:biodata.alamat,
        fotoKTP:{
            name:biodata.fotoKTP[0]?.name,
            size:biodata.fotoKTP[0]?.size,
            type:biodata.fotoKTP[0]?.type,
            //data:biodata.fotoKTP[0]?.data,
        }
    }

    const thumbs = fotoKTP.map(file => (
        <div style={thumb} key={file.name}>
          <div style={thumbInner}>
            <img
              src={file.data}
              style={img}
            />
          </div>
        </div>
    ));
    return <>
        <aside style={thumbsContainer}>
          {thumbs}
        </aside>
        *) example request data ke service, file data tidak di tampilkan, tapi sudah di sediakan dalam bentuk base64, lihat console log
        <pre >{JSON.stringify(data, null, 2)}</pre>
    </>
}

export default FormPreview;
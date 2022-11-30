import React from 'react';
import {useDropzone} from 'react-dropzone';
import { useSelector, useDispatch } from 'react-redux'
import { 
 setFotoKTP
} from '../../store/reducer/biodataReducer'

const baseStyle = {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '20px',
    borderWidth: 2,
    borderRadius: 2,
    borderColor: '#eeeeee',
    borderStyle: 'dashed',
    backgroundColor: '#fafafa',
    color: '#bdbdbd',
    outline: 'none',
    transition: 'border .24s ease-in-out'
  };
  
  const focusedStyle = {
    borderColor: '#2196f3'
  };
  
  const acceptStyle = {
    borderColor: '#00e676'
  };
  
  const rejectStyle = {
    borderColor: '#ff1744'
  };

  //Preview style
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
    overflow: 'hidden'
  };
  
  const img = {
    display: 'block',
    width: 'auto',
    height: '100%'
  };

const FormUpload=()=> {
  const dispatch = useDispatch()
  const fotoKTP = useSelector((state) => state.biodata.fotoKTP)

  const handleDrop = React.useCallback((acceptedFiles) => {
    const file = acceptedFiles.find(f => f)
    let reader = new FileReader()
    
    reader.readAsDataURL(file)
      reader.onload = () => {
        dispatch(setFotoKTP(
          [{
            size:file.size,
            type:file.type,
            name:file.name,
            preview: URL.createObjectURL(file),
            data: reader.result
          }]
        ))
      }
   }, []);

  const {getRootProps, getInputProps, isFocused, isDragAccept, isDragReject} = useDropzone({
      accept: {
      'image/*': []
      },
      onDrop:handleDrop
  });

  const style = React.useMemo(() => ({
      ...baseStyle,
      ...(isFocused ? focusedStyle : {}),
      ...(isDragAccept ? acceptStyle : {}),
      ...(isDragReject ? rejectStyle : {})
    }), [
      isFocused,
      isDragAccept,
      isDragReject
    ]);
    
  const thumbs = fotoKTP.map(file => (
      <div style={thumb} key={file.name}>
        <div style={thumbInner}>
            <img
            src={file.data}
            style={img}
            onLoad={() => { URL.revokeObjectURL(file.preview) }}
            />
        </div>
      </div>
  ));
  
  React.useEffect(() => {
    return () => fotoKTP.forEach(file => URL.revokeObjectURL(file));
  }, []);
    
  return (
      <section className="container" style={{minHeight:420 }}>
        <div {...getRootProps({style})}>
            <input {...getInputProps()} />
            <p>Drag 'n' drop some files here, or click to select files</p>
        </div>
        <aside style={thumbsContainer}>
            {thumbs}
        </aside>
      </section>
  );
}

export default FormUpload;
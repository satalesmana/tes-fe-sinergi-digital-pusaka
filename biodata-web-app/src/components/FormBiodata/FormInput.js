import React from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { 
    Form,
    FormGroup,
    Label,
    Input,
    Row,
    Col 
} from 'reactstrap';
import { 
    setNama,
    setEmail,
    setTempatLahir,
    setTglLahir,
    setAlamat,
    setNoKTP
} from '../../store/reducer/biodataReducer'
import Select from 'react-select';
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
    return<>
        <Form>
            <FormGroup>
                <Label>Nomor KTP</Label>
                <Input 
                    name="No KTP" 
                    placeholder="Nomor KTP" 
                    value={noKTP} 
                    maxLength={16}
                    onChange={(event)=>dispatch(setNoKTP(event.target.value.replace(/[^0-9 ]/g, '')))}/>
            </FormGroup>

            <FormGroup>
                <Label>Nama</Label>
                <Input 
                    name="nama" 
                    placeholder="Type nama" 
                    value={nama} 
                    onChange={(event)=>dispatch(setNama(event.target.value))}/>
            </FormGroup>

            <FormGroup>
                <Label>Email </Label>
                <Input 
                    name="email" 
                    placeholder="Type Email" 
                    type="email" 
                    value={email} 
                    onChange={(event)=>dispatch(setEmail(event.target.value))}/>
            </FormGroup>

            <FormGroup>
                <Label>Tempat / Tgl Lahir</Label>
                <Row>
                    <Col>
                        <Select 
                            instanceId="select"
                            options={Countries} 
                            value={Countries.find(obj => obj.value === tempatLahir)}
                            onChange={(event)=>dispatch(setTempatLahir(event))}
                            placeholder="Select kota" />
                    </Col>
                    <Col>
                        <Input 
                            name="tanggal" 
                            placeholder="Type Tgl Lahir" 
                            type="date" 
                            value={tglLahir} 
                            onChange={(event)=>dispatch(setTglLahir(event.target.value))}/>
                    </Col>
                </Row>
            </FormGroup>

            <FormGroup>
                <Label>Alamat </Label>
                <Input 
                    name="alamat" 
                    placeholder="Type Alamat"  
                    value={alamat} 
                    onChange={(event)=>dispatch(setAlamat(event.target.value))}
                    type="textarea" />
            </FormGroup>
        </Form>
    </>
}

export default FormInput;
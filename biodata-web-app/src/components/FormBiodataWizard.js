
import React from 'react';
import FormInputBiodata from './FormBiodata/FormInput'
import FormUploadBiodata from './FormBiodata/FormUpload'
import FormPreviewBiodata from './FormBiodata/FormPreview'
import { useSelector, useDispatch } from 'react-redux'
import { 
    setNext,
    setPrev
} from '../store/reducer/biodataReducer'
import { 
    Col,
    Button,
    Row
} from 'reactstrap';

const FormBiodataWizard=()=> {
    const stepWizard = useSelector((state) => state.biodata.counter)
    const dispatch = useDispatch();

    if(stepWizard == 0){
        return(
            <Col style={{minWidth:580, minHeight:220 }}>
                <FormInputBiodata/>
                <Col style={{float:'right'}}>
                    <Button color="primary" onClick={()=>dispatch(setNext())}> Next </Button>
                </Col>
            </Col>
        )
    }else if(stepWizard == 1){
        return(
            <Col style={{minWidth:580}}>
                <FormUploadBiodata/>
                <Row>
                    <Col style={{float:'left'}}>
                        <Button color="danger" onClick={()=>dispatch(setPrev())}> Prev </Button>
                    </Col>
                    <Col style={{textAlign:'end', float:'right'}}>
                        <Button color="primary" onClick={()=>dispatch(setNext())}> Next </Button>
                    </Col>
                </Row>
            </Col>
        )
    }else if(stepWizard == 2){
        return( 
            <Col style={{minWidth:580, minHeight:220, maxWidth:680}}>
                <FormPreviewBiodata/>
                <Row>
                    <Col style={{float:'left'}}>
                        <Button color="danger" onClick={()=>dispatch(setPrev())}> Prev </Button>
                    </Col>
                </Row>
            </Col>
        )
    }else{
        return null
    }
}

export default FormBiodataWizard;
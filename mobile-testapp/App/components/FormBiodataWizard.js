
import React from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { 
    setNext,
    setPrev
} from '../store/reducer/biodataReducer'
import { Button, Card} from '@rneui/themed';
import {View, Alert , Dimensions, StyleSheet} from 'react-native';
import { FormInput } from './FormBiodata/FormInput'
import { FormUpload } from './FormBiodata/FormUpload'
import { FormPreview } from './FormBiodata/FormPreview'
const WINDOW_HEIGHT = Dimensions.get('window').height;
const WINDOW_WIDTH  = Dimensions.get('window').width;
import {  resetData } from '../store/reducer/biodataReducer'

export const FormBiodataWizard=()=> {
    const stepWizard = useSelector((state) => state.biodata.counter)
    const dispatch = useDispatch();

    const onSubmitData=()=>{
        Alert.alert(
            "Info",
            "Data Berhasil dikirim",
            [
              { text: "OK", onPress: () => dispatch(resetData()) }
            ]
        );
    }

    if(stepWizard == 0){
        return(
            <View>
                <Card containerStyle={{ marginTop: 15 }}>
                    <Card.Title>STEP 1 OF 3</Card.Title>
                    <Card.Divider />
                    <View style={{marginBottom:10}}>
                        <FormInput/>
                    </View>
                    <Button 
                        color="primary"  
                        title="Next" 
                        icon={{
                            name: 'arrow-right',
                            type: 'font-awesome',
                            size: 15,
                            color: 'white',
                        }}
                        onPress={()=>dispatch(setNext())}/>
                </Card>
            </View>
        )
    }else if(stepWizard == 1){
        return(
            <View>
                <Card containerStyle={{ marginTop: 15 }}>
                    <Card.Title>STEP 2 OF 3</Card.Title>
                    <Card.Divider />
                    <View style={{marginBottom:10}}>
                        <FormUpload/>
                    </View>

                    <View style={{flexDirection:'row', justifyContent:'space-between'}}>
                        <View style={{flex:1, paddingRight:10}}>
                            <Button 
                                color="secondary"  
                                title="Prev" 
                                onPress={()=>dispatch(setPrev())}
                                icon={{
                                    name: 'arrow-left',
                                    type: 'font-awesome',
                                    size: 15,
                                    color: 'white',
                                }}/>
                        </View>
                        <View style={{flex:1, paddingLeft:10}}>
                            <Button 
                                color="primary" 
                                title="Next" 
                                icon={{
                                    name: 'arrow-right',
                                    type: 'font-awesome',
                                    size: 15,
                                    color: 'white',
                                }}
                                onPress={()=>dispatch(setNext())}/>
                        </View>
                    </View>
                </Card>
            </View>
        )
    }else if(stepWizard == 2){
        return( 
            <View>
                <Card containerStyle={{ marginTop: 15 }}>
                    <Card.Title>STEP 3 OF 3</Card.Title>
                    <Card.Divider />
                    <View style={{marginBottom:10}}>
                        <FormPreview/>
                    </View>

                    <View style={{flexDirection:'row', justifyContent:'space-between'}}>
                        <View style={{flex:1, paddingRight:10}}>
                            <Button 
                                color="secondary"  
                                title="Prev" 
                                onPress={()=>dispatch(setPrev())}
                                icon={{
                                    name: 'arrow-left',
                                    type: 'font-awesome',
                                    size: 15,
                                    color: 'white',
                                }}/>
                        </View>
                        <View style={{flex:1, paddingLeft:10}}>
                            <Button 
                                color="success" 
                                title="Submit" 
                                icon={{
                                    name: 'arrow-right',
                                    type: 'font-awesome',
                                    size: 15,
                                    color: 'white',
                                }}
                                onPress={onSubmitData}/>
                        </View>
                    </View>
                </Card>
            </View>
        )
    }else{
        return null
    }
}

const style =  StyleSheet.create({
    
})
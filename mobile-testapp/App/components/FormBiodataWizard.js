
import React from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { 
    setNext,
    setPrev
} from '../store/reducer/biodataReducer'
import { Button, Card} from '@rneui/themed';
import {View, Text, Dimensions, StyleSheet} from 'react-native';
const WINDOW_HEIGHT = Dimensions.get('window').height;
const WINDOW_WIDTH  = Dimensions.get('window').width;

export const FormBiodataWizard=()=> {
    const stepWizard = useSelector((state) => state.biodata.counter)
    const dispatch = useDispatch();

    if(stepWizard == 0){
        return(
            <View>
                <Card containerStyle={{ marginTop: 15 }}>
                    <Card.Title>STEP 1 OF 3</Card.Title>
                    <Card.Divider />
                    <View style={{marginBottom:10}}>
                        <Text>Body step 1</Text>
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
                        <Text>Body step 2</Text>
                    </View>

                    <View style={{flexDirection:'row', justifyContent:'space-between'}}>
                        <View style={{flex:1, paddingRight:10}}>
                            <Button 
                                color="secondary"  
                                title="Preview" 
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
            <View style={{flex:1}}>
                <Text>Step 3</Text>
                <View style={{flexDirection:'row', justifyContent:'space-between'}}>
                        <View style={{flex:1, paddingRight:10}}>
                            <Button 
                                color="secondary"  
                                title="Preview" 
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
                                onPress={()=>alert("data submited")}/>
                        </View>
                    </View>
            </View>
        )
    }else{
        return null
    }
}

const style =  StyleSheet.create({
    
})
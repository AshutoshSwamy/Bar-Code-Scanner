import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import * as Permissions from 'expo-permissions';
import { BarCodeScanner } from 'expo-barcode-scanner';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default class ScanScreen extends React.Component {
    constructor(){
    super();
  
    this.state = {
      hasCameraPermissions : null,
      scanned : false,
      scannedData : '',
      buttonState : 'normal',
    }
    }

    getCameraPermissions = async () => {
        const { status } = await Permissions.askAsync(Permissions.CAMERA);
        this.setState({ hasCameraPermissions: status === 'granted',
        buttonState : 'clicked',
        scanned : false,
       });
      };
    
      handleBarCodeScanned = ({ type, data }) => {
        this.setState({ scanned: true,
          scannedData : data,
          buttonState : 'normal',
         });
        
      };

      render(){

        const hasCameraPermissions = this.state.hasCameraPermissions;
        const scanned = this.state.scanned;
        const buttonState = this.state.buttonState;
        if(buttonState === "clicked" && hasCameraPermissions){
          return(
            <BarCodeScanner
              onBarCodeScanned={scanned ? undefined : this.handleBarCodeScanned}
              style={StyleSheet.absoluteFillObject}
            />
          )
        }  
    
        else if(buttonState === "normal" ){
    
          return(
            <View style = {styles.container}>
            <Text style = {styles.displayText}>
              {hasCameraPermissions === true ? this.state.scannedData : "Request Camera Permission"}
            </Text>
    
            <TouchableOpacity onPress = {this.getCameraPermissions} style = {styles.ScanButton}>
              <Text style = {styles.ButtonText}>
                Scan QR Code
              </Text>
            </TouchableOpacity>
          </View>
          )
        }
    
        
        }
      }

      
      const styles = StyleSheet.create({
        container: {
          flex: 1,
          backgroundColor: '#fff',
          alignItems: 'center',
          justifyContent: 'center',
        },
      
        displayText : {
          fontSize : 15,
          textDecorationLine : 'underline',
        },
      
        ScanButton : {
          margin : 10,
          padding : 10,
          backgroundColor : 'dodgerblue',
        },
      
        ButtonText : {
          fontSize : 20,
        }
      
      
      });
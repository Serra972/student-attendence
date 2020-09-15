import * as React from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Button } from 'react-native';
import db from '../config';

var attendanceRef, attendance;
var a1 = '',
  a2 = '',
  a3 = '',
  a4 = '',
  a5 = '';

export default class Total extends React.Component {
  constructor() {
    super();
    this.state = {
      a1: '',
      a2: '',
      a3: '',
      a4: '',
      a5: '',
      
    };
  }

   getAttendance = () => {
    attendanceRef = db.ref('attendance/'); 
    attendanceRef.on('value', (data) => {
      attendance = data.val();
    
    a1 = attendance.Aman;
    a2 = attendance.Chhavi;
    a3 = attendance.Neil;
    a4 = attendance.Prachi;
    a5 = attendance.Rishabh;
    

    });
  };

  changeDetails = () => {
    this.setState({
      a1: a1,
      a2: a2,
      a3: a3,
      a4: a4,
      a5: a5,
  
    });
  };

  componentDidMount() {
    this.changeDetails();
  }

  render() {
    return (
      <View style={{ marginTop: 25, marginLeft: 30 }}>
        {this.getAttendance()}
        <TouchableOpacity
          style={{
            backgroundColor: 'red',
            width: 50,
            height: 50,
            borderWidth: 2,
            marginLeft: 60,
          }}
          onPress={() => {
            this.setState({
              a1: a1,
              a2: a2,
              a3: a3,
              a4: a4,
              a5: a5,
            
            });
            console.log(this.state.a1);
          }}></TouchableOpacity>
        <Text style={{ fontWeight: 'bold', fontSize: 30 }}>Aman : {a1}</Text>
        <Text style={{ fontWeight: 'bold', fontSize: 30 }}>Chhavi : {a2}</Text>
        <Text style={{ fontWeight: 'bold', fontSize: 30 }}>Neil : {a3}</Text>
        <Text style={{ fontWeight: 'bold', fontSize: 30 }}>Prachi : {a4}</Text>
        <Text style={{ fontWeight: 'bold', fontSize: 30 }}>Rishabh : {a5}</Text>
         
      </View>
    );
  }
}

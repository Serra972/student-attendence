import * as React from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import AppHeader from '../components/AppHeader';
import db from '../config';

var students;
var s1 = 'absent',
  s2 = 'absent',
  s3 = 'absent',
  s4 = 'absent',
  s5 = 'absent';


export default class Attendance extends React.Component {
  present1 = () => {
    s1 = 'present';
  };
  present2 = () => {
    s2 = 'present';
  };
  present3 = () => {
    s3 = 'present';
  };
  present4 = () => {
    s4 = 'present';
  };
  present5 = () => {
    s5 = 'present';
  };

  

  absent1 = () => {
    s1 = 'absent';
  };
  absent2 = () => {
    s2 = 'absent';
  };
  absent3 = () => {
    s3 = 'absent';
  };
  absent4 = () => {
    s4 = 'absent';
  };
  absent5 = () => {
    s5 = 'absent';
  };
  

  submitAttendance = () => {
    students = db.ref('attendance/');
    students.set({
      Aman: s1,
      Chhavi: s2,
      Neil: s3,
      Prachi: s4,
      Rishabh: s5,
      
      
    });
  };

  goToTotal = () => {
    this.props.navigation.navigate('Screen2');
  };

  render() {
    return (
      <View>
        <AppHeader />
        <Text style={styles.header}>Aman</Text>
        <TouchableOpacity style={styles.present} onPress={this.present1}>
          <Text>Present</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.absent} onPress={this.absent1}>
          <Text>Absent</Text>
        </TouchableOpacity>

        <Text style={styles.header}>Chhavi</Text>
        <TouchableOpacity style={styles.present} onPress={this.present2}>
          <Text>Present</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.absent} onPress={this.absent2}>
          <Text>Absent</Text>
        </TouchableOpacity>

        <Text style={styles.header}>Neil</Text>
        <TouchableOpacity style={styles.present} onPress={this.present3}>
          <Text>Present</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.absent} onPress={this.absent3}>
          <Text>Absent</Text>
        </TouchableOpacity>

        <Text style={styles.header}>Prachi</Text>
        <TouchableOpacity style={styles.present} onPress={this.present4}>
          <Text>Present</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.absent} onPress={this.absent4}>
          <Text>Absent</Text>
        </TouchableOpacity>

        <Text style={styles.header}>Rishabh</Text>
        <TouchableOpacity style={styles.present} onPress={this.present5}>
          <Text>Present</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.absent} onPress={this.absent5}>
          <Text>Absent</Text>
        </TouchableOpacity>

 


        <TouchableOpacity
          style={styles.submit}
          onPress={this.submitAttendance}>
          <Text style={{ fontSize: 20 }}>Submit</Text> 
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.next}
          onPress={this.goToTotal}> 
          <Text style={{ fontSize: 20 }}>Next</Text> 
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  header: {
    marginTop: 20,
    marginLeft: 10,
    fontWeight: 'bold',
    fontSize: 20,
  },
  present: {
    marginLeft: 100,
    marginTop: -25,
    width: 60,
    height: 30,
    backgroundColor: 'green',
    alignItems: 'center',
    justifyContent:"center",
    borderWidth: 1,
  },
  absent: {
    marginLeft: 200,
    marginTop: -30,
    width: 60,
    height: 30,
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent:"center",
    borderWidth: 1,
  },
  submit: {
    alignItems: 'center',
    justifyContent:"center",
    marginTop: 50,
    height: 40,
    backgroundColor: 'orange',
    borderRadius: 10,
    borderWidth: 2,
  },
  next: {
    alignItems: 'center',
    justifyContent:"center",
    marginTop: 20,
    height: 40,
    backgroundColor: 'orange',
    borderRadius: 10,
    borderWidth: 2,
  },
});

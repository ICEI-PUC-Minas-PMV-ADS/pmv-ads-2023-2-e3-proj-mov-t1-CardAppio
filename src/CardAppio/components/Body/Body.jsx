import React from 'react';
import {StyleSheet, View} from 'react-native';
import COLORS from '../../constants/colors';

const Body = ({children}) =>{
  return <View style={styles.container}>{children}</View>
};

const styles = StyleSheet.create({
 container:{
    flex:1,
    margin:8,
    backgroundColor: COLORS.black,
  },
});

export default Body;
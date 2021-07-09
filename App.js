import React from 'react';
import {View, StyleSheet, StatusBar} from 'react-native';

const App = () => {
  return(
    <View style={styles.containerExterno}>
      
      <View style={styles.barraSuperior}></View>
      
      <View style={styles.container1}>
        <View style={styles.quadrados}></View>
        <View style={styles.retanguloLaranja}></View>
      </View>

      <View style={styles.containerMeio}>
        <View style={styles.retanguloAzulado}></View>
        <View style={styles.retanguloLilas}></View>
      </View>

      <View style={styles.containerSeparador}>
        <View style={styles.retanguloSeparador}></View>
      </View>

      <View style={styles.container3}>
          <View style={styles.container2}>
            <View style={styles.quadrados}></View>
            <View style={styles.quadrados}></View>
            <View style={styles.quadrados}></View>
          </View>

          <View style={styles.container2}>
            <View style={styles.quadrados}></View>
            <View style={styles.quadrados}></View>
            <View style={styles.quadrados}></View>
          </View>

      </View>

        <View style={styles.barraInferior}></View>

    </View>
  );
}

const styles = StyleSheet.create({
  containerExterno: {
    flex: 1,
  },

  container1: {
    flex: 1,
    marginTop: 30,
  },

  containerMeio: {
    flexDirection: 'row',
  },

  container2: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },

  container3: {
    flex: 1,
    justifyContent: 'space-between',
    paddingBottom: 90,
    paddingTop: 40,
  },

  containerSeparador: {
    flexDirection: 'column'
  },

  barraSuperior: {
    backgroundColor: "#50E3C2",
    height: 25,
  },
  
  quadrados: {
    backgroundColor: "#F5A623",
    height: 100,
    width: 100,
    alignSelf: 'center',
  },

  retanguloLaranja: {
    backgroundColor: "#F5A623",
    height: 30,
    width: 150,
    marginTop: 15,
    alignSelf: 'center'
  },

  retanguloAzulado: {
    backgroundColor: "#9013FE",
    height: 78,
    width: "50%",
  },

  retanguloLilas: {
    backgroundColor: "#4A90E2",
    height: 78,
    width: "50%",
  },

  retanguloSeparador: {
    backgroundColor: "#50E3C2",
    height: 13,
  },

  barraInferior: {
    backgroundColor: "#4A90E2",
    height: 60,
    width: "100%",
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
  },
  
});

export default App;

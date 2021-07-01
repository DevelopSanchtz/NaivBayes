import React, { useState } from 'react';
import {Picker} from '@react-native-picker/picker'
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Alert,
  ImageBackground
} from 'react-native';

const App = () => {

  const [tareasPendientes, setTareasPendientes] = useState('')
  const [actividadesPendientes, setActividadesPendientes] = useState('')
  const [buenInternet, setBuenInternet] = useState('')
  const [ganasJugar, setGanasJugar] = useState('')
  const [tarde, setTarde] = useState('')
  const [comiste, setComiste] = useState('')
  const [opcion, setOpcion] = useState('')

  const Evaluacion = () => {
    
    if (tareasPendientes === "No"){
      Alert.alert("Hey malas noticias", "No puedes jugar", [
        {text: 'De acuerdo', onPress: () => console.log("Understood")}
      ])
    }
    if (actividadesPendientes === "Si"){
      Alert.alert("Hey malas noticias", "No puedes jugar", [
        {text: 'De acuerdo', onPress: () => console.log("Understood")}
      ])
    }
    if( opcion === "Si" ) {
        Alert.alert("Hey malas noticias","No puedes jugar", [
          {text: 'De acuerdo', onPress: () => console.log("Understood")}
        ])
    }
    if(comiste === "Si") {
      Alert.alert("Hey", "No puedes jugar", [
        {text: 'De acuerdo', onPress: () => console.log("Understood")}
      ])
    }
    if(buenInternet === "Si"){
      Alert.alert("Hey", "No puedes jugar", [
        {text: 'De acuerdo', onPress: () => console.log("Understood")}
      ])
    }
    else {
      Alert.alert("Hey", "Si puedes jugar", [
        {text: 'De acuerdo', onPress: () => console.log("Understood")}
      ])
    }

  }

  return (
    <View style = {styles.container}>

        <ImageBackground source = {require('./src/fornais.jpg')} style = {styles.header}>

        </ImageBackground>

    <ScrollView style = {styles.body}>

      <Text style = {styles.pregunta}>¿Terminaste tus tareas pendientes?</Text>
        <Picker style = {styles.picker}
          selectedValue = { tareasPendientes }
          onValueChange = { respuesta => setTareasPendientes(respuesta) }
        >
            <Picker.Item label = "- Seleccione -" value = "" />
            <Picker.Item label = "Si" value= "Si" />
            <Picker.Item label = "No" value = "No"/>
        </Picker>

        <Text style = {styles.pregunta}>¿Tienes actividades pendientes?</Text>
        <Picker style = {styles.picker}
        selectedValue = { actividadesPendientes }
        onValueChange = { respuesta => setActividadesPendientes(respuesta) }
        >
            <Picker.Item label = "- Seleccione -" value = "" />
            <Picker.Item label = "Si" value= "Si" />
            <Picker.Item label = "No" value = "No"/>
        </Picker>

        <Text style = {styles.pregunta}>¿Tienes buen internet?</Text>
        <Picker style = {styles.picker}
        selectedValue = { buenInternet }
        onValueChange = { respuesta => setBuenInternet(respuesta) }
        >
            <Picker.Item label = "- Seleccione -" value = "" />
            <Picker.Item label = "Si" value= "Si" />
            <Picker.Item label = "No" value = "No"/>
        </Picker>

        <Text style = {styles.pregunta}>¿Tienes ganas de jugar?</Text>
        <Picker style = {styles.picker}
        selectedValue = { ganasJugar }
        onValueChange = { respuesta => setGanasJugar(respuesta) }
        >
            <Picker.Item label = "- Seleccione -" value = "" />
            <Picker.Item label = "Si" value= "Si" />
            <Picker.Item label = "No" value = "No"/>
        </Picker>

        <Text style = {styles.pregunta}>¿Ya es muy tarde?</Text>
        <Picker style = {styles.picker}
        selectedValue = { tarde }
        onValueChange = { respuesta => setTarde(respuesta) }
        >
            <Picker.Item label = "- Seleccione -" value = "" />
            <Picker.Item label = "Si" value= "Si" />
            <Picker.Item label = "No" value = "No"/>
        </Picker>

        <Text style = {styles.pregunta}>¿Ya comiste algo?</Text>
        <Picker style = {styles.picker}
        selectedValue = { comiste }
        onValueChange = { respuesta => setComiste(respuesta) }
        >
            <Picker.Item label = "- Seleccione -" value = "" />
            <Picker.Item label = "Si" value= "Si" />
            <Picker.Item label = "No" value = "No"/>
        </Picker>

        <Text style = {styles.pregunta}>¿Tienes opción de hacer otro plan?</Text>
        <Picker style = {styles.picker}
        selectedValue = { opcion }
        onValueChange = { respuesta => setOpcion(respuesta) }
        >
            <Picker.Item label = "- Seleccione -" value = "" />
            <Picker.Item label = "Si" value= "Si" />
            <Picker.Item label = "No" value = "No"/>
        </Picker>

    </ScrollView>

    <View style  = {styles.end}>
        <TouchableOpacity 
          style = { styles.botonGeneral }
          onPress = {Evaluacion}
        >
          <Text style = { styles.botonTexto }>Validar</Text>

        </TouchableOpacity>
        
    </View>

    <View style = {{marginLeft: 260}}>
            <Image source = {require ('./src/renegada.png')} style = {{height: 200, width: 200}}/>
    </View>
     
 </View>
  );

};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FFF",
    flex: 1
  },
  header :{ 
    height: 200,
    backgroundColor: "#1c2732",
    borderBottomStartRadius: 50,
    borderBottomEndRadius: 50,
    justifyContent: "center",
    alignItems: "center"
  },
  body:{
    marginTop: 50,
    height: 10
  },
  end: {
    height: 50,
    justifyContent: "center",
    alignItems: "center"
  },
  picker: {
    color: "#000"
  },
  pregunta: {
    color: "#000",
    fontSize: 18,
    fontWeight: "bold"
  },
  botonTexto: {
    color: "#FFF",
    fontSize: 18,
    fontWeight: "bold"
  },
  botonGeneral: {
    height: 50,
    width: 200,
    backgroundColor: "#1c2732",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 20,
    marginRight: 180,
    marginTop: 300,
    backgroundColor: "#1c2732"
  }
});

export default App;

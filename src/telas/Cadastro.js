import React from "react";
import { Text, View, StyleSheet, SafeAreaView, ScrollView } from "react-native";

import Input from "../componentes/Input";
import Button from "../componentes/Button";

import COLORS from "../const/Colors";

const Cadastro = () => {

    const nome = 'TELA DE CADASTRO';
    return(

      <SafeAreaView style = {estilos.safe}>
        <ScrollView style = {estilos.scroll}>

          <Text style = {estilos.textType}> CADASTRO DE LIVROS </Text>
          <View style = {estilos.viewForm}>
  
            <Input label = "TITULO" />
            <Input label = "DESCRIÇAO" />
            <Input label = "CAPA" />
            <Button titulo = "CADASTRAR"/>

          </View>
        </ScrollView>
      </SafeAreaView>
  
     
    );
  
  }

  const estilos = StyleSheet.create({

    safe:{
      flex:1,
      backgroundColor:COLORS.azul,

    },
    scroll:{
      paddingTop:50,
      paddingHorizontal:20,
    },
    textType:{
      color: COLORS.white,
      fontSize: 25,
      fontWeight: "bold",
    },
    viewForm:{
      marginVertical: 20,
    },

  });

  export default Cadastro;
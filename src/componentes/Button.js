import React from "react";
import {TouchableOpacity, StyleSheet, Text} from "react-native";

import COLORS from "../const/Colors";

const Button = ({titulo}) => {

    return(

        <TouchableOpacity 
            style = {estilos.button}
            activeOpacity = {0.5}>
            <Text style = {estilos.titulo}>{titulo}</Text>


        </TouchableOpacity>
)}

const estilos = StyleSheet.create({
    button:{
        height:55,
        width: "100%",
        backgroundColor: COLORS.azulEscuro,
        justifyContent:"center",
        alignItems: "center",
        marginVertical:20,
    },
    titulo:{
        color:COLORS.white,
        fontWeight: "bold",
        fontSize:18,
    }
})

export default Button;
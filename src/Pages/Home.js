import React, {useState} from "react";

import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    StyleSheet
} from 'react-native'

export default function Home(){
    
    let [valor, setValor] = useState();

    function Resultado(){
        
        let resto = valor % 2;

        if(resto == 0){
            alert("O número é par");
        }else {
            alert("O número é impar");
        }
    }

    return(
        <View style={styles.container}>
            <Text style={styles.titulo}>Número Impar ou Par</Text>
            <TextInput onChangeText={setValor} style={styles.campo} placeholder="Digite um número"></TextInput>
            <TouchableOpacity style={styles.botao} onPress={Resultado}>
                <Text style={styles.botaoTexto}>Verificar</Text>
            </TouchableOpacity>
        </View>
    )
}


const styles = StyleSheet.create({
    container:{
        backgroundColor: '#FFF',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },

    titulo:{
        fontSize: 25,
        color: '#000',
        fontWeight: 'bold',
        marginBottom: 40
    },

    campo:{
        backgroundColor: '#c6ffff',
        color: '#000',
        fontSize: 18,
        padding: 8,
        marginTop: 10,
        width: 200,
        borderRadius: 10,
        textAlign: 'center'
    },

    botao:{
        backgroundColor: '#c6ffff',
        alignItems: 'center',
        padding: 10,
        borderRadius: 7,
        marginTop: 20,
        width: 150
    },

    botaoTexto:{
        color: '000',
        fontSize: 17,
        fontWeight: 700,
    }
});
import React, { useState } from 'react';
import { Image, StyleSheet, Text, View, TouchableOpacity, } from "react-native";
import MenuLogotipo from "../../assets/menu.png";
import UsuarioLogo from "../../assets/user.png";
import PedidoLogo from "../../assets/pedido.png";
import InicioLogo from "../../assets/inicio.png";
import CardapioLogo from "../../assets/cardapio.png";
import Carrinhologo from "../../assets/carrinho.png";
import FavoritoLogo from "../../assets/favorito.png";





export const Home = () => {

    const [number, setNumber] = useState(0)
    const [number2, setNumber2] = useState(0)

    function increment() {
        return setNumber(number + 1)
    }
    function decrease() {
        if (number > 0) {
         setNumber(number - 1)
        }
    }


    function increment2() {
        setNumber2(number2 + 1);
    }
    
    function decrease2() {
        if (number2 > 0) {
            setNumber2(number2 - 1);
        }
    }


    return (

        <View style={styles.container}>

            <View style={styles.header}>
                <TouchableOpacity>
                    <Image source={MenuLogotipo} style={styles.logo} />
                </TouchableOpacity>
                <Text style={styles.seuspedidos} >Seus Pedidos</Text>
                <TouchableOpacity>
                    <Image source={UsuarioLogo} style={styles.user} />
                </TouchableOpacity>
            </View>




            <View style={styles.body}>
                <Image source={PedidoLogo} style={styles.pedido} />
                <Text style={styles.string}> 
                    <Text style={styles.burg1}>Lorem ipsum dolor sit amet</Text>{'\n'}
                    <Text style={styles.burg2}>R$ 20,00</Text>
                </Text>
                <View style={styles.touch}>
                    <TouchableOpacity onPress={decrease} >
                        <Text style={styles.menos}>-</Text>
                    </TouchableOpacity>
                    <Text style={styles.numero}>{number}</Text>
                    <TouchableOpacity onPress={increment} >
                        <Text style={styles.mais}>+</Text>
                    </TouchableOpacity>
                </View>
            </View>


            <View style={styles.line}>
                <View style={styles.linha}/>
            </View>


            <View style={styles.body}>
                <Image source={PedidoLogo} style={styles.pedido} />
                <Text style={styles.string}> 
                    <Text style={styles.burg1}>Lorem ipsum dolor sit amet</Text>{'\n'}
                    <Text style={styles.burg2}>R$ 40,00</Text>
                </Text>
                <View style={styles.touch}>
                    <TouchableOpacity onPress={decrease2} >
                        <Text style={styles.menos}>-</Text>
                    </TouchableOpacity>
                    <Text style={styles.numero}>{number2}</Text>
                    <TouchableOpacity onPress={increment2} >
                        <Text style={styles.mais}>+</Text>
                    </TouchableOpacity>
                </View>
            </View>


            <View style={styles.itens}>
                <TouchableOpacity>
                    <Text style={styles.adicionar}>ADICIONAR MAIS ITENS</Text>
                </TouchableOpacity>
            </View>

            <View style= {styles.total}>
                <Text style={styles.totalpedido}>Total do pedido:                             R$ 60,00</Text>
            </View>

            <TouchableOpacity>
                <View style={styles.check}>
            
                    <Text style={styles.confirmar}>CONFIRMAR</Text>
                </View>
            </TouchableOpacity>


            <View style={styles.footer}>
                <TouchableOpacity>
                    <Image source={InicioLogo} style={styles.inicio} />
                </TouchableOpacity>
                <TouchableOpacity>
                    <Image source={CardapioLogo} style={styles.cardapio} />
                </TouchableOpacity>
                <TouchableOpacity>
                    <Image source={Carrinhologo} style={styles.carrinho} />
                </TouchableOpacity>
                <TouchableOpacity>
                    <Image source={FavoritoLogo} style={styles.favorito} />
                </TouchableOpacity>
            </View>

        </View>


    );
};




const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#1b1b1b",
        margin: 0,
    },


    header: {
        alignSelf: "center",
        marginTop: 60,
        margin: 25,
        flexDirection: "row",
        justifyContent: "space-between",
        gap: 60,

    },
    seuspedidos: {
        fontSize: 30,
        color: "white",
        margin: 0,
        fontWeight: "bold"
    },







    body: {
        flexWrap: "wrap",
        flexDirection: "row",
        marginTop: 30,
        gap: 10,
    },
    pedido: {
        marginLeft: 20,
        borderRadius: 10,
        width: 70,
        height: 70,
    },
    string: {
        lineHeight: 40,
    },
    burg1: {
        flexWrap: "wrap",
        color: "white",
        fontSize: 15,
    },
    burg2: {
        color: "white",
        fontWeight: "bold",
        fontSize: 20,
    },

    





    touch: {
        color: "white",
        flexDirection: "row",
        gap: 20,
        margin: 10,
        height: 50,
        alignItems: "baseline",
    
    },
    menos: {
        flexDirection: "row",
        color: "white",
        fontSize: 35,
        fontWeight: "bold",

    },
    numero: {
        color: "white",
        fontSize: 20,
        fontWeight: "bold",
    },
    mais: {
        color: "white",
        fontSize: 25,
        fontWeight: "bold",
    },

    itens: {
        alignSelf: "center",
    },




    line: {
        marginTop: 15,
        justifyContent: 'center',
        alignItems: 'center',
    },

    linha: {
        width: '85%',
        borderBottomColor: 'white', 
        borderBottomWidth: 2,
    },
    adicionar: {
        fontSize: 16,
        marginTop: 20,
        color: "white",
        borderColor: 'white', 
        borderWidth: 1, 
        borderRadius: 10,
        height: 30,
        width: 290,
        textAlign: "center",
        textAlignVertical: "center", 
    },


    total: {
        marginTop: 280,

    },
    totalpedido: {
        alignSelf: "center",
        color: "white",
        fontSize: 17,

    },







    check: {
        marginTop: 10,
        marginBottom: 25,
        alignItems: "center",
        alignSelf: "center",
        height: 40,
        width: 320,
        backgroundColor: "#521f12",
        borderRadius: 10,
        justifyContent: "center",

    },
    confirmar: {
        color: "white",
        fontSize: 23,
        fontWeight: "bold",
         
    },



    

    footer: {
        alignSelf: "center",
        flexDirection: "row",
        gap: 60,

    },

});


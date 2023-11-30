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
    const [totalPedido, setTotalPedido] = useState(0)

/* Func Aumentar */
    function increment() {
        setNumber(number + 1);
        setTotalPedido(totalPedido + 20.99);
    }
    function increment2() {
        setNumber2(number2 + 1);
        setTotalPedido(totalPedido + 39.99);
    }
/* Func Aumentar */

/* Func Diminuir  */
    function decrease() {
        if (number > 0) {
            setNumber(number - 1);
            setTotalPedido(totalPedido - 20.99);
        }
    }
    function decrease2() {
        if (number2 > 0) {
            setNumber2(number2 - 1);
            setTotalPedido(totalPedido - 39.99);
        }
    }
/* Func Diminuir */

/* Cabeçalho */
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity>
                    <Image source={MenuLogotipo} style={{ width: 32, height: 32, }} />
                </TouchableOpacity>

                <Text style={styles.seuspedidos} >Seus Pedidos</Text>

                <TouchableOpacity>
                    <Image source={UsuarioLogo} style={{ width: 32, height: 32, }} />
                </TouchableOpacity>
            </View>
{/* Cabeçalho */}

{/* Body Up */}
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
            <View style={styles.line}></View>
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
{/* Body Up */}

{/* Body Low */}
            <View style={styles.total}>
                <Text style={styles.totalpedido}>Total do pedido:                           R$ {totalPedido.toFixed(2)}</Text>
            </View>

            <TouchableOpacity>
                <View style={styles.check}>

                    <Text style={styles.confirmar}>CONFIRMAR</Text>
                </View>
            </TouchableOpacity>
{/* Body Low */}

{/* Rodapé */}
            <View style={styles.footer}>
                <View style={styles.rodape}>
                    <TouchableOpacity>
                        <Image source={InicioLogo} style={{ width: 35, height: 35, }} />
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Image source={CardapioLogo} style={{ width: 35, height: 35, }} />
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Image source={Carrinhologo} style={{ width: 35, height: 35, }} />
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Image source={FavoritoLogo} style={{ width: 35, height: 35, }} />
                    </TouchableOpacity>
                </View>
            </View>
{/* Rodapé */}
        </View>
    );
};

const styles = StyleSheet.create({
/* Cabeçalho */
    container: {
        backgroundColor: "#1b1b1b",
        alignItems: "center",
    },
/* Pagina */

/* Cabeçalho */
    header: {
        marginTop: 50,
        margin: 25,
        flexDirection: "row",
        gap: 60,
    },

    seuspedidos: {
        fontSize: 30,
        color: "white",
        margin: 0,
        fontWeight: "bold"
    },
/* Cabeçalho */

/* Boddy Up */
    body: {
        flexWrap: "wrap",
        flexDirection: "row",
        marginTop: 30,
    },

    pedido: {
        marginLeft: 10,
        borderRadius: 10,
        width: 70,
        height: 70,
    },

    string: {
        lineHeight: 35,
        paddingLeft: 10,
    },
    burg1: {
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
        gap: 8,
        margin: 10,
        height: 50,
    },

    menos: {
        color: "white",
        fontSize: 35,
        fontWeight: "bold",
        width: 30,
        height: 50,
        paddingLeft: 12,
    },

    numero: {
        color: "white",
        fontSize: 20,
        fontWeight: "bold",
        paddingTop: 12,
    },

    mais: {
        color: "white",
        fontSize: 35,
        fontWeight: "bold",
        paddingTop: 2,
        width: 30,
        height: 50,
    },

    itens: {
        alignSelf: "center",
    },

    line: {
        marginTop: 15,
        width: 350,
        borderBottomColor: 'white',
        borderBottomWidth: 1,
    },

    adicionar: {
        fontSize: 16,
        marginTop: 30,
        color: "white",
        borderColor: 'white',
        borderWidth: 1,
        borderRadius: 10,
        height: 35,
        width: 290,
        textAlign: "center",
        textAlignVertical: "center",
    },
/* Body Up */

/* Body Low */
    total: {
        marginTop: 270,
        marginBottom: 5,
    },

    totalpedido: {
        color: "white",
        fontSize: 17,
    },

    check: {
        marginTop: 10,
        marginBottom: 25,
        alignItems: "center",
        height: 43,
        width: 330,
        backgroundColor: "#521f12",
        borderRadius: 10,
        justifyContent: "center",
    },

    confirmar: {
        color: "white",
        fontSize: 23,
        fontWeight: "bold",
    },
/* Body Low */

/* Rodapé */
    footer: {
        paddingBottom: 39,
    },

    rodape: {
        marginHorizontal: 20,
        flexDirection: "row",
        gap: 60,
    },
/* Rodapé */
});


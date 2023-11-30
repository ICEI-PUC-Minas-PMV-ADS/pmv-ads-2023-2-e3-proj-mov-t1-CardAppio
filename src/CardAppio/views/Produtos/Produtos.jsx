import { Image, StyleSheet, Text, View, TouchableOpacity, } from "react-native";
import MenuLogotipo from "../../assets/menu.png";
import UsuarioLogo from "../../assets/user.png";
import InicioLogo from "../../assets/inicio.png";
import CardapioLogo from "../../assets/cardapio.png";
import Carrinhologo from "../../assets/carrinho.png";
import FavoritoLogo from "../../assets/favorito.png";


export const Home = () => {

/* Cabeçalho */
return (
    <View style={styles.container}>
        <View style={styles.header}>
            <TouchableOpacity>
                <Image source={MenuLogotipo} style={{ width: 32, height: 32, }} />
            </TouchableOpacity>

                <Text style={styles.cardappio} >CardAppio</Text>

                <TouchableOpacity>
                    <Image source={UsuarioLogo} style={{ width: 32, height: 32, }} />
                </TouchableOpacity>
            </View>
{/* Cabeçalho */}

{/* Body Up */}
            <View style={styles.body}>
                    <View style={styles.background}></View>
                <View style={styles.idtempo}>
                    <Text style={styles.pedido}>LOREM IPSUM</Text>
                    <Text style={styles.prazo}>20 - 40min</Text>
                </View>
            </View>
            <View>
                <Text style={styles.idpreço}>R$ 20,00</Text>
                <Text style={styles.txt1}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed hendrerit.</Text>
                <Text style={styles.txt2}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed hendrerit.</Text>
            </View>
{/* Body Up */}

{/* Body Low */}
            <TouchableOpacity>
                <View style={styles.cartcontainer}>
                    <Text style={styles.addcart}>ADICIONAR AO CARRINHO</Text>
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
/* Pagina */
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

    cardappio: {
        fontSize: 30,
        color: "white",
        margin: 0,
        fontWeight: "bold"
    },
/* Cabeçalho */

/* Body Up */
    body: {
    },

    background: {
        backgroundColor: "pink",
        height: 160,
        width: 320,
        borderRadius: 10,
    },

    idtempo: {
        marginTop: 20,
        flexDirection: "row",
       alignItems: "center",
       justifyContent: "space-between",
    },

    pedido: {
        color: "white",
        fontWeight: "bold",
        fontSize: 25,
        width: 200,
    },

    prazo: {
        marginTop: 11,
        color: "white",
        width: 80,
        fontSize: 15,
    },

    idpreço: {
        color: "white",
        margin: 10,
        fontWeight: "bold",
        fontSize: 15,
    },

    txt1: {
        color: "white",
        width: 320,
        margin: 10,
        alignSelf: "center",
        fontSize: 16,
    },

    txt2: {
        color: "white",
        width: 320,
        alignSelf: "center",
        fontSize: 16,
    },


/* Body Up */

/* Body Low */
    cartcontainer: {
        marginTop: 250,
        marginBottom: 25,
        alignItems: "center",
        alignSelf: "center",
        height: 45,
        width: 320,
        justifyContent: "center",
        borderColor: 'white',
        borderWidth: 1,
        color: "white",
        borderColor: 'white',
        borderWidth: 1,
        borderRadius: 10,
    },
    addcart: {
        color: "white",
        fontSize: 20,
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


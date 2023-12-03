import API from './webapi.services';
import {BASE_URL } from './urls';

export const getPedidos = async (item) => {

    try{

        return await API.get(`${BASE_URL}/pedido`, item).then(
            response => { 
                return response.data;
            },
            error => {
                console.log(error);
                return null;
            }
        );

    } catch(error) {
        console.log(error);
        return null;
    }
}

export const insertPedidos = async (item) => {

    try{

        return await API.post(`${BASE_URL}/pedido`, item).then(
            response => { 
                return response.data;
            },
            error => {
                console.log(error);
                return null;
            }
        );

    } catch(error) {
        console.log(error);
        return null;
    }
}

export const getPedidosItem = async (itemId) => {
    try {
        const response = await API.get(`${BASE_URL}/pedido/${itemId}`);
        return response.data;
    } catch (error) {
        console.log(error);
        return null;
    }
};

export const updatePedidos = async (item) => {

    try{

        return await API.put(`${BASE_URL}/pedido/${item.id}`, item).then(
            response => { 
                return response.data;
            },
            error => {
                console.log(error);
                return null;
            }
        );

    } catch(error) {
        console.log(error);
        return null;
    }
}

export const deletePedidos = async (item) => {

    try{

        return await API.delete(`${BASE_URL}/pedido/${item.id}`).then(
            response => { 
                return response.data;
            },
            error => {
                console.log(error);
                return null;
            }
        );

    } catch(error) {
        console.log(error);
        return null;
    }
}
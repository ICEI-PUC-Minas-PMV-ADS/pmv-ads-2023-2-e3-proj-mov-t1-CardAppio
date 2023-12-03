import API from './webapi.services';
import {BASE_URL } from './urls';

export const getItens = async (item) => {

    try{

        return await API.get(`${BASE_URL}/itens`, item).then(
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
export const insertItens = async (item) => {

    try{

        return await API.post(`${BASE_URL}/itens`, item).then(
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
export const updateItens = async (item) => {

    try{

        return await API.put(`${BASE_URL}/itens/${item._id}`, item).then(
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
export const deleteItens = async (item) => {

    try{

        return await API.delete(`${BASE_URL}/itens/${item._id}`).then(
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
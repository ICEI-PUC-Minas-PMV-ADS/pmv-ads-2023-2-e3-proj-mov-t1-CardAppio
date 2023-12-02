import API from './webapi.services';
import {BASE_URL } from './urls';

export const getItens = async (param) => {

    try{

        return await API.get(`${BASE_URL}/itens`, param).then(
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
export const insertItens = async (param) => {

    try{

        return await API.post(`${BASE_URL}/itens`, param).then(
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
export const updateItens = async (param) => {

    try{

        return await API.put(`${BASE_URL}/itens/${param.id}`, param).then(
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
export const deleteItens = async () => {

    try{

        return await API.delete(`${BASE_URL}/itens/${id}`).then(
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
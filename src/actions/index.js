import types from './types';
import axios from 'axios';


const BASE_URL = 'http://api.reactprototypes.com/todos';
const API_KEY = '?key=sashakey_demo';


export function addToDoItem(item){
    const resp = axios.post(BASE_URL + API_KEY, item);

    return {
        type: types.ADD_LILST_ITEM,
        payload: resp,
    }
}
export function getListData(){
    
    const resp = axios.get(BASE_URL + API_KEY);
    
    return {
        type: types.GET_ALL_LIST_DATA,
        payload: resp
    }
}
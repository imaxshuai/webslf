import * as actionTypes from '../constants/actionTypes';
import Http from '../../unit/http';

export const getSort = ()=>{

    return (dispatch)=>{
        Http.get('/api/sort')
            .then((res)=>{
                dispatch({
                    type: actionTypes.SORT,
                    data: res
                })
            })
    }

};
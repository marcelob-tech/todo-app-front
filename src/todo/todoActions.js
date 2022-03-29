import axios from 'axios';

function tirarAcento(text) {
    text = text.toLowerCase();
    text = text.replace(new RegExp('[ÁÀÂÃ]','gi'), 'a');
    text = text.replace(new RegExp('[ÉÈÊ]','gi'), 'e');
    text = text.replace(new RegExp('[ÍÌÎ]','gi'), 'i');
    text = text.replace(new RegExp('[ÓÒÔÕ]','gi'), 'o');
    text = text.replace(new RegExp('[ÚÙÛ]','gi'), 'u');
    text = text.replace(new RegExp('[çÇ]','gi'), 'c');
    console.log('descriptionText# ', text);
return text;                 
}

const URL = `http://localhost:3003/api/todos`

export const changeDescription = (event) => ({
    type: 'DESCRIPTION_CHANGED',
    payload: event.target.value 
});

export const search = () => {
    return (dispatch, getSate) => {
        const description = getSate().todo.description;
        let  desc = '';    
        if ( description !== undefined && description !== '') {
            desc =  tirarAcento(description.toLowerCase());
        } else {
            desc = '';
        }
        const search = desc ? `&description__regex=/${desc}/gi` : '';
        const request = axios.get(`${URL}?sort=-createdAt${search}`)
        .then(resp => dispatch({ type: 'TODO_SEARCHED', payload: resp.data}));
    }
}

export const add = (description) => {
    let  desc = '';    
    if ( description !== undefined && description !== '') {
        description =  tirarAcento(description.toLowerCase());
    } else {
        desc = '';
    }
    return dispatch => {
        console.log('desc###', description);
        axios.post(URL, {description})
        .then(resp => dispatch(clear()))
        .then(resp => dispatch(search()))
        .catch( error => console.log('erro##', error));
    }
}

export const markAsDone = (todo) => {
    return dispatch => axios.put(`${URL}/${todo._id}`, {...todo , done: true})
    .then(resp => dispatch({ type: 'TODO_MARKED_AS_DONE', payload: resp.data}))
    .then(resp => dispatch(search()))
    .catch(error => console.log( 'erro markAsDone##', error));
}

export const markAsPending = (todo) => {
    return dispatch => axios.put(`${URL}/${todo._id}`, {...todo , done: false})
    .then(resp => dispatch({ type: 'TODO_MARKED_AS_PENDING', payload: resp.data}))
    .then(resp => dispatch(search()))
    .catch(error => console.log( 'erro markAsPending##', error));
}

export const remove = (todo) => {
    return dispatch => axios.delete(`${URL}/${todo._id}`)
    .then(resp => dispatch({ type: 'TODO_DELETED', payload: resp.data}))
    .then(resp => dispatch(search()))
    .catch(error => console.log( 'erro deleteTODO##', error));
}

export const clear = () => {
    return [
        {
            type: 'TODO_CLEAR'
        },
        search()
    ]
}
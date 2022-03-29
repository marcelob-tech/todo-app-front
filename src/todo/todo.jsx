import React, { Component } from 'react';
import PageHeader from '../template/pageHeader';
import TodoForm from '../todo/todoForm';
import TodoList from '../todo/todoList';
import axios from 'axios';

const URL = 'http://localhost:3003/api/todos';
export default class Todo extends Component {
    // constructor(props) {
    //     super(props);
    //     this.state = { description: '', list: [] };
    //     this.handleAdd = this.handleAdd.bind(this);
    //     this.handleChange = this.handleChange.bind(this);
    //     this.handleRemove = this.handleRemove.bind(this);
    //     this.handleMarkAsDone = this.handleMarkAsDone.bind(this);
    //     this.handleMarkAsPending = this.handleMarkAsPending.bind(this);
    //     this.handleSearch  = this.handleSearch.bind(this);
    //     this.handleClear = this.handleClear.bind(this);
    //     this.tirarAcento = this.tirarAcento.bind(this);
    //     this.refresh();
    // }
 /*
    tirarAcento(text) {
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

    refresh(description = '') {
        let  desc = '';    
        if ( description !== undefined && description !== '') {
            desc =  this.tirarAcento(description.toLowerCase());
        } else {
            desc = '';
        }
        const search = desc ? `&description__regex=/${desc}/gi` : '';
        axios.get(`${URL}?sort=-createdAt${search}`)
            .then((resp) => this.setState({ ...this.state, description, list: resp.data }));
    }

    handleChange(e) {
        this.setState({ ...this.state, description: e.target.value });
    }

    handleAdd() {
        const description = this.tirarAcento(this.state.description);
        axios.post(URL,{ description }).then(resp => this.refresh());
    }

    handleRemove(todo) {
        axios.delete(`${URL}/${todo._id}`).then(resp => this.refresh(this.state.description));
    }

    handleMarkAsDone(todo) {
        axios.put(`${URL}/${todo._id}`, {...todo, done: true}).then(resp => this.refresh(this.state.description));
    }

    handleMarkAsPending(todo) {
        axios.put(`${URL}/${todo._id}`, {...todo, done: false}).then(resp => this.refresh(this.state.description));
    }

    handleSearch() {
        this.refresh(this.state.description);
    }

    handleClear() {
        console.log('chamando handleClear...');
        this.refresh();
    }*/

    render() {
        return (
            <div>
                <PageHeader name='Tarefas' small='Cadastro' />
                <TodoForm />
                <TodoList />
            </div>
        );
    }
}

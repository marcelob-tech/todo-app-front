import React, { Component } from 'react';
import Grid from '../template/grid';
import IconButton from '../template/iconButton';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { add, changeDescription, search, clear } from '../todo/todoActions';

class TodoForm extends Component {
    constructor(props) {
        super(props);
        this.keyHandler = this.keyHandler.bind(this);
    }

    componentWillMount() {
        this.props.search();
    }

    keyHandler(e) {
        const { add, search, description, clear } = this.props;
        if (e.key === 'Enter') {
            e.shiftKey ? search() : add(description);
        } else if (e.key === 'Escape') {
            clear();
        }
    }

    render() {
        const { add, search, description, clear } = this.props;
        return (
            <div role='form' className='todoForm'>
                <Grid cols='12 9 10'>
                    <input
                        type='text'
                        id='decription'
                        className='form-control'
                        placeholder='Adicione uma tarefa'
                        onKeyUp={this.keyHandler}
                        onChange={this.props.changeDescription}
                        value={this.props.description}
                    />
                </Grid>
                <Grid cols='12 3 2'>
                    <IconButton
                        style='primary'
                        icon='plus'
                        onClick={() => add()}
                    />
                    <IconButton
                        style='info'
                        icon='search'
                        onClick={search}
                    />
                    <IconButton style='default' icon='close' onClick={clear} />
                </Grid>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        description: state.todo.description,
    };
};

console.log('Descrip', changeDescription);

const mapDispatchToProps = (dispatch) => bindActionCreators({ add, changeDescription, search, clear }, dispatch);
export default connect(mapStateToProps, mapDispatchToProps)(TodoForm);

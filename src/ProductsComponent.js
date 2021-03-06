
import React/*, { createContext }*/ from 'react';
import todosDB from './TodoDB';
//import {Link} from 'react-router-dom'
import {ProductConsumer} from './context';
import Product from './Product';
//import ToDoListContainer from './ToDoListContainer';
import "./ToDoComponent.scss";



class ProductsComponent extends React.Component {

    constructor() {

        super();

        this.state = {
            todos: todosDB
        }

        this.handleChange = this.handleChange.bind(this);
        this.add = this.add.bind(this);

    }


    handleChange(id) {

        this.setState(prevState => {

            const updatedTodos = prevState.todos.map(todo => {

                if(todo.id === id) {
                    todo.done = !todo.done;
                }

                return todo

            })

            return { todos: updatedTodos }

        })

    }


    add() {
        /*
        this.setState(prevState => {
            const updateTodos = prevState.todos.push({'id': 5, 'zadanie': 'cos innego'});
            return {todos: updateTodos}

                {todoItemsCompItem}

                <ButtonContainer type="button" value="add" onClick={this.add} />
        })
        */
    }


    render() {

        //const todoItemsCompItem = this.state.todos.map(it => <Item key={it.id} zadanie={it} handleChange={this.handleChange} />);
        // <ToDoListContainer />
        return (
            <div className="productsContainer container">

                <ProductConsumer>

                    {value => {
                        return value.filteredProducts.map(product=> {
                            return <Product key={product.id} product={product} />
                        })
                    }}
                </ProductConsumer>
            </div>
          );

    }


}

export default ProductsComponent;





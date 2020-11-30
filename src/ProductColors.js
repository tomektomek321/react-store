import React, { useState, useEffect, useReducer } from 'react'

const initialState = {
    todos: {},
    todoIds: []
  }

  const reducer = (state, action) => {
    switch(action.type) {
      case 'ADD_TODO':
        return {
          ...state,
          todos: {
            ...state.todos,
            [action.todo.id]: action.todo
          },
          todoIds: [...state.todoIds, action.todo.id]
        }
      case 'TOGGLE_TODO':
        return {
          ...state,
          todos: {
            ...state.todos,
            [action.id]: {
              ...state.todos[action.id],
              done: !state.todos[action.id].done
            }
          }
        }

      case 'REMOVE_TODO':
        return {
          ...state,
          todos: {
            ...state.todos,
            [action.id]: undefined,
          },
          todoIds: state.todoIds.filter(id => id !== action.id)
        }
      default:
        return state
    }
  }



const ProductColors = () => {

    const [counter, setCounter] = useState(0);
    const [ dispatch] = useReducer(reducer, initialState)
    //const [intervId, setIntervId] = useState();

    const countDown = () => {setCounter(counter - 1); console.log(counter);}

    useEffect(() => {
        console.log("component updated or updated");
        if(counter > 0) {
            return;
        }

        return () => { }
    }, [counter])

    const addToDo = async () => {
        //const todo = await toDoItemApi.create({content: draft})
        dispatch({type: 'ADD_TODO', imie: 'tomek' })
    }

    return (
        <div className="colorsDiv" onClick={addToDo}>
            <div>Colors</div>
            <div className="items" onClick={countDown}>
                <div className="it red"></div>
                <div className="it green"></div>
                <div className="it black"></div>
                <div className="it yellow"></div>
                <div className="it blue"></div>
            </div>
        </div>
    )

}

export default ProductColors;
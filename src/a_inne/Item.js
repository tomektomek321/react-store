
import React from 'react';


function Item (props) {
/*
    constructor(props) {
        super();

    }
*/

  //  render() {

        return (
            <div>
                <input type="checkbox" checked={props.zadanie.done} onChange={() => props.handleChange(props.zadanie.id)} />
                <p>{props.zadanie.zadanie}</p>
            </div>
          );
        
    //}


}

export default Item;
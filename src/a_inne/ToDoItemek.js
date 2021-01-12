import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'

export default class ToDoItemek extends Component {

    render() {

        let {done, myKey} = this.props;

        const id = "customCheck" + myKey;
        
        let {pr, alertColor} = this.getPriority();
        

        return (
            
            <tr className={alertColor}>
                <td>{this.props.task}</td>

                <td>
                    { (this.props.editId === myKey) ? 
                        (<div>
                            <input type="text" className="custom-control" id={id} value={this.props.draftEdit} onChange={this.props.updateDraftEdit}/>
                            <button onClick={() => this.props.confirmEdit(myKey)} type="button" className="btn btn-primary btn-sm"> OK </button>
                        </div>)
                    : 
                        (<button onClick={() => this.props.editTask(myKey)} type="button" className="btn btn-primary btn-sm"> EDIT TASK </button>)
                    }
                </td>
                <td><button onClick={() => this.props.delTask(myKey)} type="button"  disabled={done} className="btn btn-info btn-sm"> DELETE TASK </button></td>
                <td>
                    <button type="button" className={pr}>!</button>
                </td>
                <td>
                    <div className="custom-control custom-checkbox">
                        <input type="checkbox" checked={done} className="custom-control-input" id={id} onChange={() => this.props.makeDone(myKey)} />
                        <label className="custom-control-label" htmlFor={id}></label>
                    </div>
                </td>
            </tr>
           

        )
    }



}


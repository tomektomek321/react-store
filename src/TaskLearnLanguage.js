import React, { Component } from 'react'

export default class TaskLearnLanguage extends Component {

    render() {

        let {task, done, req, maded} = this.props.item;

        let wordsRange = [...Array(req).keys(), req];

        let {btn, alertColor} = this.props.prio;

        const types = wordsRange.map((item, index) => (
            <option key={index} value={item}>
                {item}
            </option>
        ));

        let lang = task.substr(-3);
        
        let id = lang + "Words" + this.props.myK;
        

        return (
            <tr className={alertColor}>
                
                <td>
                    {task}
                </td>
                <td>
                    {req} slow
                </td>
                <td>
                    <select
                        name={id}
                        id={id}
                        onChange={this.props.languageUpdate}
                        className="form-control"
                        value={maded}>

                        {types}

                    </select>
                </td>
                <td>
                    {btn}
                </td>
                <td>
                    <button onClick={() => this.props.delTask(this.props.myK)} type="button"  disabled={done} className="btn btn-info"> DELETE TASK </button>
                </td>
                
                
            </tr>
        )
    }
}


/*


*/
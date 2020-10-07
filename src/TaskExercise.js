import React, { Component } from 'react'

export default class TaskExercise extends Component {

    render() {

        let {task, done, exercise} = this.props.item;

        //console.log(this.props);
        let {alertColor} = this.props.prio;
        /*
        let wordsRange = [...Array(wordsRequire).keys(), wordsRequire];
        const types = wordsRange.map((item, index) => (
            <option key={index} value={item}>
                {item}
            </option>
        ));
        let lang = task.substr(-3);
        
        let id = lang + "Exercise" + this.props.myK;
        //console.log(id);
        */

        let btns = [];
        
        let requireDiv = [];

        let count = 0;

        for (const [key, value] of Object.entries(exercise)) {

            let name = key + "" + this.props.myK; 

            //let exerciseRange = [...Array(value[1]).keys(), value[1]];
            let exerciseRange = [5,10,15,20,25,30,35,40];


            requireDiv.push(
                <div key={count++} style={{lineHeight: '55px'}}>
                    {key} : {value[1]}
                </div>
            )
            
            const types = exerciseRange.map( (item, index) => (

                <option key={index} value={item}>
                    {item}
                </option>
                
            ));
            
            

            btns.push(
                <select
                    name={key}
                    id={name}
                    key={count++}
                    onChange={(e) => this.props.exerciseUpdate(e,this.props.myK, key)}
                    className="form-control"
                    value={value[0]}>

                    {types}

                </select>
            );

            btns.push(<span key={count++}>{key}</span>)



            
        
            
        }
        
        //console.log(btns);


        return (
            <tr className={alertColor}>
                <td>
                    {task}
                </td>
                <td>
                    {requireDiv}
                </td>
                <td>
                    {btns}
                </td>
                <td></td>
                <td>
                <button onClick={() => this.props.delTask(this.props.myK)} type="button"  disabled={done} className="btn btn-info"> DELETE TASK </button>
                </td>
                
            </tr>
        )
    }
}



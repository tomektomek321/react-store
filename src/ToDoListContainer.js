import React, { Component } from 'react'
import TaskRun from './TaskRun';
import TaskLearnLanguage from './TaskLearnLanguage'
import 'bootstrap/dist/css/bootstrap.min.css'
import DoneDiv from './DoneDiv'



export default class ToDoListContainer extends Component {



    state = {
        toDoList: [
            {
                task: 'Learn slowa', 
                done: false, 
                priority: 0, 
                req: 20,
                maded: 0
            },
            {
                task: 'Learn gramatic', 
                done: false, 
                priority: 0, 
                req: 10,
                maded: 0
            },
            {
                task: 'sluchanie', 
                done: false, 
                priority: 0, 
                req: 10, 
                maded: 0,
            },
            
        ],
        draft: '',
        draftEdit: '',
        edit: false,
        allDone: 5,
    }

    countCompleted = () => {

        let completed = 0;
        let x = 0;
        let count = 0;

        for (let i = 0; i < this.state.toDoList.length; i++) {
            const element = this.state.toDoList[i];

            if(element.task.startsWith('Learn') || element.task.startsWith('sluchanie')) {
                
                let req = element.req;
                let maded = element.maded;

                x += (maded / req) * 100;
                
                count++;

            } 

        }

        completed = x / count;
        
        this.setState({
            allDone: completed
        })
    }



    makeDone = (id) => {
        
        let ab = this.state.toDoList.findIndex((item, index) => index === id);

        var x = this.state.toDoList;

        x[ab].done = !x[ab].done;

        this.setState({ toDoList: x })
    }

    delTask = (id) => {
        
        let ab = this.state.toDoList.findIndex((item, index) => index === id);
        
        var x = this.state.toDoList;
        
        x.splice(ab, 1);
        
        this.setState({ toDoList: x }, this.countCompleted);

    }

    addToDo = () => {
        const {toDoList, draft} = this.state;
        toDoList.push({task: draft, done: false});
        this.setState({
            toDoList: toDoList, 
            draft: '',
        })
    }

    updateDraft = event => {
        this.setState({ draft: event.target.value });
    }

    editTask = (id) => {
        this.setState({ edit: id });
    }

    confirmEdit = (id) => {
        
        let ab = this.state.toDoList.findIndex((item, index) => index === id);
        
        var x = this.state.toDoList;
        
        x[ab].task = this.state.draftEdit;

        this.setState( {
            toDoList: x,
            draftEdit: '',
            edit: false
        });

    }
    
    updateDraftEdit = (event) => {
        this.setState({ draftEdit: event.target.value });
    }


    /*
        return <ToDoItemek task={item.task} done={item.done} priority={item.priority} myKey={index} editTask={this.editTask} 
            editId={this.state.edit} draftEdit={this.state.draftEdit} confirmEdit={this.confirmEdit} 
            key={index} makeDone={this.makeDone} delTask={this.delTask} updateDraftEdit={this.updateDraftEdit}/>

    */

    runUpdate = (e) => {
            
        const value = e.target.value;

        const index = parseInt(e.target.name.substr(8));

        var x = this.state.toDoList;
        
        x[index].maded = value;
        
        this.setState({
            toDoList: x
        }, 
            this.countCompleted
        );

    }

    exerciseUpdate = (e, tabIndex, exerciseName) => {

        var x = this.state.toDoList;

        x[tabIndex].exercise[exerciseName][0] = parseInt(e.target.value);

        this.setState({
            toDoList: x
        }, 
            this.countCompleted
        );

    }

    languageUpdate = (e) => {
            
        const value = e.target.value;
        
        const index = parseInt(e.target.name.substr(8));
        
        var x = this.state.toDoList;
        
        x[index].maded = value;

        this.setState({
            toDoList: x
        }, 
            this.countCompleted
        );

    }



    getPriority(prio) {

        let btn, alertColor;
        
        if(prio === 0) {
            btn =  '';
            alertColor = '';
        } else if(prio === 1) {
            btn = <button type="button" className="btn btn-warning"> !</button>;
            alertColor = 'alert alert-warning';
        } else if(prio === 2) {
            btn = <button type="button" className="btn btn-danger">!</button>;
            alertColor = 'alert alert-danger';
        }

        return {btn: btn, alertColor: alertColor};

    }


    render() {

        //let x = new Date();

        
        

        const list = this.state.toDoList.map((item, index) => {
            //console.log(item);
            if(item.task === "sluchanie") {
                let pr = this.getPriority(item.priority);
                return <TaskRun key={index} prio={pr} myK={index} item={item} runUpdate={this.runUpdate} delTask={this.delTask} />;
            } else if(item.task.startsWith("Learn")) {
                let pr = this.getPriority(item.priority);
                return <TaskLearnLanguage key={index} prio={pr} myK={index} item={item} languageUpdate={this.languageUpdate} delTask={this.delTask} />;
            } else {
                return (

                    <tr key={index}>
                    <td colSpan="4">
                        {item.task}
                    </td>
                  
                    <td>
                        <button onClick={() => this.delTask(1)} type="button" className="btn btn-info"> DELETE TASK </button>
                    </td>
                    
                    
                </tr>

        )


            }

          

            
        })

        return (
            <div>
                <table className="table">
                <thead>
                    <tr>
                        <th>TASK</th>
                        <th>wymagane</th>
                        <th>zrobione</th>
                        <th>PRIORITY</th>
                        <th>usun</th>
                        
                    </tr>
                </thead>
                <tbody>
                    {list}

                    <DoneDiv done={this.state.allDone} />

                    <tr>
                        <th colSpan="4">
                            <div className="form-inline">
                            <div className="form-group mx-sm-3 mb-2">

                                <label htmlFor="inputPassword2" className="sr-only">Password</label>
                                <input type="text"  onChange={this.updateDraft} value={this.state.draft} className="form-control" id="inputPassword2" placeholder="dodaj zadanie" />
                                
                            </div>
                            </div>
                        </th>
                        <th>
                            <button className="btn btn-primary mb-2" onClick={this.addToDo}>Add</button>
                        </th>
                    </tr>
                </tbody>
                </table>
            </div>
        )
    }
}





/*

<ToDoItemek task={item.task} done={item.done} priority={item.priority} myKey={index} editTask={this.editTask} 
                        editId={this.state.edit} draftEdit={this.state.draftEdit} confirmEdit={this.confirmEdit} 
                        key={index} makeDone={this.makeDone} delTask={this.delTask} updateDraftEdit={this.updateDraftEdit}/>


*/
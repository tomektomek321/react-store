import React, { Component } from 'react'
import './DoneDiv.scss'
import DivContainer from './DoneDivComponents'

export default class DoneDiv extends Component {

    render() {
        let {done} = this.props;
        let text = "";
        if(done < 40) {
            text = "dupa, nic nie pogawożysz"
        } else if(done < 75) {
            text = "cos tam niby sie uczysz"
        } else if(done >= 75) {
            text = "nooooo teraz to mi zaimponowalas!"
        }

        done = done.toFixed(0);


        return (
            <tr><th colSpan="5">

                <DivContainer className="doneProgress">

                        
                    { text }  ::: {done} %




                </DivContainer>

            </th></tr>
        )
    }
}

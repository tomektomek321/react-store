import React, { Component } from 'react'
import './BigMenu.scss'



export default class BigMenu extends Component {

    state = {
        nowImg: 1,
    }

    changeImg = (id) => {
        this.setState({nowImg: id});
    }



    render() {

        let imgName = 'img/img' + this.state.nowImg + '.jpg';

        //console.log(this.props);

        let hover = (this.props.hovered === "dropDown2") ? "active" : "";


        return (
            <div className={`dropDown  ${hover}`}>

                <div className="imgCont">

                    <div className="imgDiv">
                        <img alt="nic" src={imgName} />
                    </div>
                    <div className="downDiv">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                        when an unknown printer took a galley of type and scrambled it to make a type specimen book.


                    </div>



                </div>
                <div className="menuCont">

                    <div className="it down" onMouseEnter={() => {this.changeImg(1)} }>
                        <div className="name">
                            Some menu name
                        </div>
                        <div className="imageDiv">
                            <img alt="nic" src="img/user-32.ico" />
                        </div>
                        
                    </div>
                    <div className="it down" onMouseEnter={() => {this.changeImg(2)} }>
                        <div className="name">
                            Some menu name 1 ....
                        </div>
                        <div className="imageDiv">
                            <img alt="nic" src="img/basketball-32.ico" />
                        </div>
                    </div>
                    <div className="it down" onMouseEnter={() => {this.changeImg(3)} }>
                        <div className="name">
                            Some menu name 2 ab ab
                        </div>
                        <div className="imageDiv">
                            <img alt="nic" src="img/tennis-32.ico" />
                        </div>

                    </div>
                    <div className="it down" onMouseEnter={() => {this.changeImg(1)} }>
                        <div className="name">
                            Some menu name 3
                        </div>
                        <div className="imageDiv">
                            <img alt="nic" src="img/bar-chart-3-32.ico" />
                        </div>

                    </div> 
                    <div className="it down" onMouseEnter={() => {this.changeImg(4)} }>
                        <div className="name">
                            Inne Menuu jakieś tam
                        </div>
                        <div className="imageDiv">
                            <img alt="nic" src="img/logout-32.ico" />
                        </div>

                    </div>
                    <div className="it down">
                        <div className="name">
                            Some menu name
                        </div>
                        <div className="imageDiv">
                            <img alt="nic" src="img/x-mark-3-32.ico" />
                        </div>

                    </div>

                    <div className="butony">

                        <button className="btn btn-info">Choose</button>
                        <button className="btn btn-warning">Nic</button>
                        <button className="btn btn-info">Dalej</button>


                    </div>



                </div>

            

            </div>
        )
    }
}

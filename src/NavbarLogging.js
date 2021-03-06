import React, {useEffect, useState} from 'react'
import NavbarLoggingUseForm from "./NavbarLoggingUseForm";
import './NavbarLogging.scss';

function NavbarLogging() {




    const [updateValue, submitHandler, errors] = NavbarLoggingUseForm({});

    let [formHover, setFormHover] = useState(false);

    const hoverChange = () => setFormHover(formHover = !formHover);

    useEffect(() => {
        //console.log("noweffect");
    });





    return (
        <div className={` item logging width-2x  ${ formHover ? "hov" : "" }  `} onMouseEnter={hoverChange}  >
            <form>
                <div className="dropLogin">
                    <div>
                        <input className="form-control" placeholder="login.." name="login" onChange={updateValue} type="text" />
                    </div>
                    <div>
                        <input className="form-control" placeholder="password.." name="password" onChange={updateValue} type="text" />
                    </div>
                    <div>
                        <input type="button" className="btn btn-outline-primary logInBtn" value="Log" />
                    </div>
                    <div className={` errors ${errors ? 'show' : ''} `}>
                        {errors && errors.map((err, index) => <p key={index}>{err}</p>)}
                    </div>
                </div>

                <input type="submit" className="btn btn-outline-primary" value="Login"  onClick={submitHandler}  />

            </form>

        </div>
    );

}

export default NavbarLogging;

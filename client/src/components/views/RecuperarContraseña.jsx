import React from "react";
// import Axios from "axios";

function Recover() { 

    return ( 
        <div className="container">
            <div className="formRecover">
                <div className="form-check row g-2 px-2" >
                    <h1 className="my-3"> Recuperar Contraseña </h1> 
                    <hr/>
                    <input type="radio" className="btn-check" id="btn-check-outlined" autocomplete="off" name="exampleRadios" value="option1"/>
                    <label className="btn btn-outline-success" for="btn-check-outlined"> 
                    <b>  Enviar código por correo electrónico </b>
                    </label><br/>
                </div>

                <div className="form-check px-2">
                    <input type="radio" className="btn-check" id="btn-check2-outlined" autocomplete="off" name="exampleRadios" value="option2"/>
                    <label className="btn btn-outline-success" for="btn-check2-outlined"> 
                    <b> Enviar código por mensaje </b>
                    </label><br/>
                    <hr/>
                </div>



                <button type="submit" className="btn btn-primary btn-lg"> <b> Continuar</b></button>
            </div>
        </div>
    )
};

export default Recover;

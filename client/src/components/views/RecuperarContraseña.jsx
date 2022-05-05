import React from "react";
// import Axios from "axios";
import "../css/recuperarContraseña.css";

function Recover() { 
    return ( 
        <div className="container">
            <div className="formRecover">
            <h1 className="my-3"> Recuperar Contraseña </h1> 
                <hr/>
                <div className="form-check px-2">
                    <input type="radio" className="btn-radio" id="btn-check2-outlined" autocomplete="off" name="exampleRadios" value="option2"/>
                    <label className="enviar-correo" >
                    <b>Enviar código por correo electrónico</b>
                    </label><br/>
                    <label className="correo" >
                    <span id="correo2">**********@gmail.com</span> 
                    </label><br/>
                </div>

                <div className="form-check px-2">
                    <input type="radio" className="btn-radio" id="btn-check2-outlined" autocomplete="off" name="exampleRadios" value="option2"/>
                    <label className="enviar-mensaje" >
                    <b>Enviar código por mensaje</b>
                    </label><br/>
                    <label className="numero" >
                    <span>+52 ******4717</span> 
                    </label><br/></div>
                    <hr/>

                <button type="submit" className="btn btn-primary btn-lg">Continuar</button>
            </div>
        </div>
    )
};

export default Recover;



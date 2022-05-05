import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {FormGroup, Label, Input} from "reactstrap";
import React, { useCallback, useState } from "react";
import Axios from "axios";

function Recover() { 

    const [usernameReg, setUsernameReg] = useState("");
    const [apellidoReg, setApellidoReg] = useState("");
    const [emailReg, setEmailReg] = useState("");
    const [phoneReg, setPhoneReg] = useState("");
    const [passwordReg, setPasswordReg] = useState("");
    const [descriptionReg, setDescriptionReg] = useState("");
    const [statusReg, setStatusReg] = useState("");

    const register = useCallback(() => {
        Axios.post("http://localhost:3001/ForgeYourPassword", {
            username: usernameReg,
            apellido: apellidoReg,
            password: passwordReg,
            email: emailReg,
            phone: phoneReg,
            description: descriptionReg,
            status: statusReg,

        }).then((response) => {
            console.log(response);
        });
    }, [usernameReg, apellidoReg, passwordReg, emailReg, phoneReg, descriptionReg, statusReg]);


    return ( 
        <div className="container ">
            <form className="row g-2">
                <h1> Recuperación de contraseña </h1> 
                <hr/>
                <FormGroup>
                    <Input
                    id="radio1"
                    type="radio"
                    value="1"
                    />
                    <Label for="radio1">
                    Enviar código por correo electrónico
                    </Label>

                    <Input
                    id="radio1"
                    type="radio"
                    value="1"
                    />
                    <Label for="radio1">
                    Enviar código por mensaje
                    </Label>
                </FormGroup>
                <div className="d-grid gap-2  mx-auto ">
                <button type="submit" className="btn btn-primary btn-lg">Continuar</button>
                </div>
            </form>
        </div>


    )
};

export default Recover;


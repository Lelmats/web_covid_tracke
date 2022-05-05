import React from "react";

function Recover() { 

    return ( 
        <div className="container ">
            <form className="row g-2">
                <h1> Recuperación de contraseña </h1> 
                <hr/>
                <div className="my-2">
                <input type="email"  placeholder="Correo electrónico" className="form-control"  aria-describedby="emailHelp" />
                </div>
                <div className="my-2">
                <input type="password"  placeholder="Contraseña" className="form-control"  aria-describedby="emailHelp" />
                </div>
                <div className="d-grid gap-2  mx-auto ">
                <button type="submit" className="btn btn-primary btn-lg">Iniciar sesión</button>
                </div>
                <button type="button" className="btn btn-link blue-600">¿Olvidaste tu contraseña?</button>
            </form>
        </div>


    )
};

export default Recover;


import React, {useState} from 'react';
import md5 from 'md5';
import 'bootstrap/dist/css/bootstrap.min.css';
import Cookies from 'universal-cookie';
import axios from 'axios';
import '../css/Login.css';

function Login() {


    const baseUrl="https://localhost:44398/api/usuarios";
    
    const [form, setForm]= useState({
        username: '',
        password: ''
    });
    const handleChange=e=>{
        const {name, value} = e.target;
        //Con esto lo guardamos en el estado y lo mostramos por consola
        setForm({
            ...form,
            [name]: value
        });
        console.log(form);

    }
    return (
       <div className="containerPrincipal">
           <div className="containerLogin">
               <div className="form-group">
                   <label>Usuario: </label>
                   <br />
                   <input 
                    type="text"
                    className="form-control"
                    name="username"
                    onChange={handleChange}
                   />
                   <label>Contraseña:</label>
                   <br />
                   <input 
                    type="password"
                    className="form-control"
                    name="password"
                    onChange={handleChange}
                   />
                   <br />
                   <button className="btn btn-primary">Iniciar Sesión</button>
               </div>
           </div>
       </div>
    );
}

export default Login;

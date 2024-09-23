import React, { useRef, useState } from "react";
import "../styles/style.css";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

export default function Login() {

    const navigate = useNavigate();

    const [user, setUser] = useState("");
    const [name, setName] = useState("");
    const [secondName, setSecondName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [confEmail, setConfEmail] = useState("");
    const [confPassword, setConfPassword] = useState("");

    const registerService = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();


        if (password !== confirmPassword) {
            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: 'Las contraseñas no coinciden.',
                confirmButtonText: 'Reintentar'
            });
            return; // Detiene la ejecución si las contraseñas no coinciden
        }

        const data = {
            user: user,
            name: name,
            lastname: secondName,
            email: email,
            password: password
        };

        setName(name);
        setSecondName(secondName);
        setUser(user);
        setEmail(email);
        setPassword(password);

        Swal.fire({
            icon: 'success',
            title: '¡Cuenta creada!',
            text: 'Tu cuenta ha sido creada exitosamente.',
            confirmButtonText: 'Ya puedes iniciar sesión' 
        }).then(() => {
            handleSignInClick(); // Redirige a /login después de cerrar la alerta
        });
    }


    // Referencias a los elementos DOM
    const containerRef = useRef<HTMLDivElement>(null);

    // Funciones para manejar los clics en los botones
    const handleSignUpClick = () => {
        if (containerRef.current) {
            containerRef.current.classList.add("sign-up-mode");
        }
    };

    const handleSignInClick = () => {
        if (containerRef.current) {
            containerRef.current.classList.remove("sign-up-mode");
        }
    };


    const loginService = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if(email == confEmail && password == confPassword){
            console.log("Inicio de sesion exitoso");
                navigate("/home")
        }else{
            Swal.fire({
                icon: 'error',
                title: 'Datos Incorrectos',
                text: 'Tu correo o contraseña son incorrectos.',
                confirmButtonText: 'Reintentar'
            })
        }
    }
    return (
        <div className="container" ref={containerRef}>
            <div className="forms-container">
                <div className="signin-signup">
                    <form action="#" className="sign-in-form" onSubmit={loginService}>

                        <img src="src\img\logo-birdwatch.svg" alt="logo_BirdWatch" />
                        <h2 className="title">Bird Watch</h2>
                        <div className="input-field">
                            <i className="fas fa-user"></i>
                            <input type="text" placeholder="Email" value={confEmail} onChange={(e) => setConfEmail(e.target.value)} required />
                        </div>
                        <div className="input-field">
                            <i className="fas fa-lock"></i>
                            <input type="password" placeholder="Contraseña"  value={confPassword} onChange={(e) => setConfPassword(e.target.value)} required />
                        </div>
                        <input type="submit" value="Iniciar Sesión" className="btn solid" />

                    </form>
                    <form action="#" className="sign-up-form" onSubmit={registerService} >
                        <h2 className="title">Bird Watch</h2>
                        <div className="input-field">
                            <i className="fas fa-user"></i>
                            <input type="text" placeholder="Nombre" value={name} onChange={(e) => setName(e.target.value)} required />
                        </div>
                        <div className="input-field">
                            <i className="fas fa-user"></i>
                            <input type="text" placeholder="Apellidos" value={secondName} onChange={(e) => setSecondName(e.target.value)} required />
                        </div>
                        <div className="input-field">
                            <i className="fas fa-user"></i>
                            <input type="text" placeholder="Usuario" value={user} onChange={(e) => setUser(e.target.value)} required />
                        </div>
                        <div className="input-field">
                            <i className="fas fa-envelope"></i>
                            <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                        </div>
                        <div className="input-field">
                            <i className="fas fa-lock"></i>
                            <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required pattern="(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}"
                                title="La contraseña debe tener al menos 8 caracteres, incluyendo una letra mayúscula, una letra minúscula, un número y un carácter especial." />
                        </div>
                        <div className="input-field">
                            <i className="fas fa-envelope"></i>
                            <input type="password" placeholder="Repetir Contraseña" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} required />
                        </div>
                        <input type="submit" className="btn" value="Crear Cuenta" />
                    </form>
                </div>
            </div>

            <div className="panels-container">
                <div className="panel left-panel">
                    <div className="content">
                        <h3>¿Eres nuevo aquí?</h3>
                        <p>¡Crea una cuenta en pocos minutos y empieza a registrar aves!</p>
                        <button className="btn transparent" id="sign-up-btn" onClick={handleSignUpClick}>
                            Crear
                        </button>
                    </div>
                    <img src="src\img\log.svg" className="image" alt="Log In Image" />
                </div>
                <div className="panel right-panel">
                    <div className="content">
                        <h3>¿Ya tienes una cuenta?</h3>
                        <p>Inicia sesión en unos segundos y comienza tu aventura compartiendo aves</p>
                        <button className="btn transparent" id="sign-in-btn" onClick={handleSignInClick}>
                            Iniciar
                        </button>
                    </div>
                    <img src="src\img\register.svg" className="image" id="girl" alt="Register Image" />
                </div>
            </div>
        </div>
    );
}

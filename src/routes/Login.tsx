import React, { useRef } from "react";
import "../styles/style.css";

export default function Login() {
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

    return (
        <div className="container" ref={containerRef}>
            <div className="forms-container">
                <div className="signin-signup">
                    <form action="#" className="sign-in-form">
                        
                        <h2 className="title">Bird Watch</h2>
                        <div className="input-field">
                            <i className="fas fa-user"></i>
                            <input type="text" placeholder="Usuario o Email" required />
                        </div>
                        <div className="input-field">
                            <i className="fas fa-lock"></i>
                            <input type="password" placeholder="Contraseña" required />
                        </div>
                        <input type="submit" value="Iniciar Sesión" className="btn solid" />

                    </form>
                    <form action="#" className="sign-up-form">
                        <h2 className="title">Bird Watch</h2>
                        <div className="input-field">
                            <i className="fas fa-user"></i>
                            <input type="text" placeholder="Nombre" required />
                        </div>
                        <div className="input-field">
                            <i className="fas fa-user"></i>
                            <input type="text" placeholder="Apellidos" required />
                        </div>
                        <div className="input-field">
                            <i className="fas fa-user"></i>
                            <input type="text" placeholder="Usuario" required />
                        </div>
                        <div className="input-field">
                            <i className="fas fa-envelope"></i>
                            <input type="email" placeholder="Email" required />
                        </div>
                        <div className="input-field">
                            <i className="fas fa-lock"></i>
                            <input type="password" placeholder="Password" required pattern="(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}"
                                title="La contraseña debe tener al menos 8 caracteres, incluyendo una letra mayúscula, una letra minúscula, un número y un carácter especial." />
                        </div>
                        <div className="input-field">
                            <i className="fas fa-envelope"></i>
                            <input type="password" placeholder="Repetir Contraseña" required/>
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

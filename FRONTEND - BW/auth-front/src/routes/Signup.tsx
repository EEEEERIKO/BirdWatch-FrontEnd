
import DefaultLayout from "../layout/DefaultLayout";

export default function Signup() {
    return (
        <DefaultLayout>
            <form className="form">

                <h1>Signup</h1>
                <label >Nombre</label>
                <input type="text" required />

                <label >Apellido</label>
                <input type="text" required />

                <label >Username</label>
                <input type="text" required/>

                <label >Email</label>
                <input type="email" required/>

                <label >Password</label>
                <input type="password" required
                    pattern="(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}"
                    title="La contraseña debe tener al menos 8 caracteres, incluyendo una letra mayúscula, una letra minúscula, un número y un carácter especial."
                 />

                <label >Confirm Password</label>
                <input type="password" required/>
                
                <button>SignUp</button>
            </form>;

        </DefaultLayout>
    )
}
    
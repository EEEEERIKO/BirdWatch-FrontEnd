import DefaultLayout from "../layout/DefaultLayout";

export default function Login() {
    return (
    <DefaultLayout>
        <form className="form">

            <h1>Login</h1>
            <label >Username</label>
            <input type="text" required />

            <label >Password</label>
            <input type="password" required />

            <button>Login</button>
        </form>;

    </DefaultLayout>
    )
}
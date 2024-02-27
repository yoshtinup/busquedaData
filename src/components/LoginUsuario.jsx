import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "../bootstrap.min.css";
function LoginUsario() {
    const gmail = "221246@gmail.com" ; 
    const pass = "22124622";
    const [correo, setCorreo] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (event) => {
        event.preventDefault();
        // Validaciones
        if (correo == gmail && password== pass) {
            console.log("correcto el password y gmail");
            navigate('/busqueda');
        }else{
            alert("datos incorrectos")
        }
    
    }

    return(
        <div className="grid text-center mt-5 ">
        <div className="container py-10"> 
            <form onSubmit={handleSubmit} className='row justify-content-center'>
                <div className="col-lg-5">
                <div
                className="bg-white rounded p-13 p-sm-3 wow fadeIn"
                data-wow-delay="0.5s"
                >
                <h1 className="display-5 text-center mb-5">Login Automatas</h1>
                <h1 className="display-5 text-center mb-5">221246 - 221251</h1>
                <div className="row g-5">
                    <div className="col-sm-12">
                    <div className="form-floating">
                        <input
                        type="email"
                        className="form-control bg-light border-0"
                        id="gname"
                        placeholder="Gmail User"
                        value={correo}
                        onChange={(e) => setCorreo(e.target.value)}
                        />
                        <label htmlFor="gname">Your Gmail</label>
                    </div>
                    </div>
                    <div className="col-sm-12">
                    <div className="form-floating">
                        <input
                        type="password"
                        className="form-control bg-light border-0"
                        id="gmail"
                        placeholder="Gurdian Email"
                        value={password} 
                        onChange={(e) => setPassword(e.target.value)}
                        />
                        <label htmlFor="gmail">Your Password</label>
                    </div>
                    </div>

                    <div className="col-12 text-center">
                    <button className="btn btn-primary py-3 px-5" type="submit">
                        Enviar 
                    </button>
                    </div>
                </div>
                </div>
                </div>
            </form>
        </div>
        </div>

    )
}
export default LoginUsario;
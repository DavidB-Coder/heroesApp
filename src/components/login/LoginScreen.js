import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom'
import { AuthContext } from '../../auth/authContext';
import { types } from '../../types/types';

export const LoginScreen = () => {

    const navigate = useNavigate();
    const { dispatch } = useContext(AuthContext);
    const lastPath = localStorage.getItem('lastPath') || '/marvel';

    const [name, setName] = useState('');

    const handleLogin = (e) => {

        e.preventDefault();
        if (!name) return

        const action = {
            type: types.login,
            payload: {
                name: name,
                logged: true
            }
        }

        dispatch(action);

        navigate(lastPath,{
            replace: true
        });
    }

    return (
        <div className="container mt-5">
            <h3>Login Screen</h3>
            <hr/>

            <form className="input-group mb-3">
                <input
                    type="text"
                    className="form-control"
                    placeholder="Nombre"
                    autoComplete="off"
                    name="name"
                    value={name}
                    onChange={({target}) => {setName(target.value)}}
                />
                <button
                    type="submit"
                    className="btn btn-primary"
                    onClick={ handleLogin }
                >
                    login
                </button>
            </form>

        </div>
    )
}

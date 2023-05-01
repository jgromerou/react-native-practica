import { useReducer, useEffect } from 'react';

interface AuthState {
  validando: boolean;
  token: string | null;
  username: string;
  nombre: string;
}

const initialState = {
  validando: true,
  token: null,
  username: '',
  nombre: '',
};

type LoginPayload = {
  username: string;
  nombre: string;
};

type AuthAction =
  | {
      type: 'logout';
    }
  | {
      type: 'login';
      payload: LoginPayload;
    };

const authReducer = (state: AuthState, action: AuthAction): AuthState => {
  switch (action.type) {
    case 'login':
      const { nombre, username } = action.payload;
      return {
        validando: false,
        token: 'ABC123',
        nombre,
        username,
      };
    case 'logout':
      return {
        validando: false,
        token: null,
        nombre: '',
        username: '',
      };

    default:
      return state;
  }
};

const Login = () => {
  const [state, dispatch] = useReducer(authReducer, initialState);

  useEffect(() => {
    setTimeout(() => {
      dispatch({ type: 'logout' });
    }, 1500);
  }, []);

  const login = () => {
    dispatch({
      type: 'login',
      payload: { nombre: 'Fernando', username: 'Strider' },
    });
  };

  const logout = () => {
    dispatch({
      type: 'logout',
    });
  };

  if (state.validando) {
    return (
      <>
        <h3>Login</h3>
        <div className="alert alert-info">Validando...</div>
      </>
    );
  }

  return (
    <>
      <h3>Login</h3>
      {state.token ? (
        <div className="alert alert-success">
          Autenticado como: {state.nombre}
        </div>
      ) : (
        <div className="alert alert-info">No autenticado...</div>
      )}

      {state.token ? (
        <button className="btn btn-danger" onClick={logout}>
          Logout
        </button>
      ) : (
        <button className="btn btn-primary" onClick={login}>
          Login
        </button>
      )}
    </>
  );
};

export default Login;

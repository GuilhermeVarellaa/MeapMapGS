import React from 'react';
import { Link } from 'react-router-dom';
import './Login.css';

class Login extends React.Component {
  render() {
    return (
      <div className="login-form">
        <h2>Login</h2>
        <form>
          <label>
            Email:
            <input type="email" name="email" />
          </label>
          <label>
            Senha:
            <input type="password" name="password" />
          </label>
          <input type="submit" value="Entrar" />
          <p>
            Não possui uma conta? <Link to="/cadastro">Cadastre-se aqui</Link>
          </p>
        </form>
      </div>
    );
  }
}

export default Login;

import React from 'react';
import { BrowserRouter as Router, Route, Switch, useLocation } from 'react-router-dom';
import Header from './components/Header/Header';
import QuemSomos from './components/Integrantes/QuemSomos';
import Empresas from './components/Empresas/Empresas';
import Noticias from './components/Noticias/Noticias';
import Cadastro from './components/Cadastro/Cadastro';
import Login from './components/Login/Login';
import Tecnologia from './components/Tecnologia/Tecnologia';
import Home from './components/Home';
import Contato from './components/Contato/Contato';

function App() {
  return (
    <Router>
      <Page />
    </Router>
  );
}

function Page() {
  const location = useLocation(); // eslint-disable-line

  return (
    <>
      <Header />
      <Switch>
        <Route path="/quem-somos" component={QuemSomos} />
        <Route path="/tecnologia" component={Tecnologia} />
        <Route path="/contato" component={Contato} />
        <Route path="/empresas" component={Empresas} />
        <Route path="/noticias" component={Noticias} />
        <Route path="/cadastro-login" component={Login} />
        <Route path="/cadastro" component={Cadastro} />
        <Route path="/" component={Home} />
      </Switch>

    </>
  );
}

export default App;

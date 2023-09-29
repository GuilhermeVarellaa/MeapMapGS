import React, { useState } from 'react';
import './Cadastro.css';

function Cadastro() {
  const [nome, setNome] = useState('');
  const [sobrenome, setSobrenome] = useState('');
  const [email, setEmail] = useState('');
  const [cpf, setCpf] = useState('');
  const [password, setPassword] = useState('');
  const [cep, setCep] = useState('');
  const [endereco, setEndereco] = useState({});

  const fetchCEP = async (cep) => {
    try {
      const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
      if (!response.ok) {
        throw new Error('Erro na requisição.');
      }
      const data = await response.json();
      setEndereco(data);
    } catch (error) {
      console.error(error);
    }
  }

  const handleCEPChange = (event) => {
    setCep(event.target.value);
    if (event.target.value.length === 8) {
      fetchCEP(event.target.value);
    }
  }

  // Insira seu manipulador de submissão aqui
  const handleSubmit = (event) => {
    event.preventDefault();
    // código de submissão aqui
  }

  return (
    <form className="cadastro-form" onSubmit={handleSubmit}>
      <h2>Cadastro</h2>
      <label>
        Nome:
        <input type="text" name="nome" value={nome} onChange={e => setNome(e.target.value)} />
      </label>
      <label>
        Sobrenome:
        <input type="text" name="sobrenome" value={sobrenome} onChange={e => setSobrenome(e.target.value)} />
      </label>
      <label>
        Email:
        <input type="email" name="email" value={email} onChange={e => setEmail(e.target.value)} />
      </label>
      <label>
        CPF:
        <input type="text" name="cpf" value={cpf} onChange={e => setCpf(e.target.value)} />
      </label>
      <label>
        Senha:
        <input type="password" name="password" value={password} onChange={e => setPassword(e.target.value)} />
      </label>
      <label>
        CEP:
        <input type="text" name="cep" value={cep} onChange={handleCEPChange} />
      </label>
      {endereco.cep && (
        <>
          <label>
            Logradouro:
            <input type="text" value={endereco.logradouro} readOnly />
          </label>
          <label>
            Bairro:
            <input type="text" value={endereco.bairro} readOnly />
          </label>
          <label>
            Cidade:
            <input type="text" value={endereco.localidade} readOnly />
          </label>
          <label>
            Estado:
            <input type="text" value={endereco.uf} readOnly />
          </label>
        </>
      )}
      <input type="submit" value="Registrar" />
    </form>
  );
}

export default Cadastro;

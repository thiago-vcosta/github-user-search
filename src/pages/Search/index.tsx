import ButtonIcon from 'core/components/ButtonIcon';
import React, { useState } from 'react';
import './styles.css';

type FormState = {
  company: string;
  public_repos: string;
  followers: string; 
  following: string;
  blog: string;
  location: string;
  created_at: string;
  avatar_url: string;
  html_url: string;
}

const dayjs = require('dayjs');

const Search = () => {
  const [search, setSearch] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [userData, setUserData] = useState<FormState>({
    company: '',
    public_repos: '',
    followers: '',
    following: '',
    blog: '',
    location: '',
    created_at: '',
    avatar_url: '',
    html_url: ''
  });

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsLoading(true);
    fetch(`https://api.github.com/users/${search}`)
      .then(response => response.json())
      .then(userResponse => setUserData(userResponse))
      .finally(() => setIsLoading(false));
  }

   const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value)
  }

  return (
    <div className="search-container">
      <form onSubmit={handleSubmit}>
        <div className="search-form">
        <h3 className="search-subtitle">Encontre um perfil Github</h3>
          <input
            value={search}
            name="usuario"
            type="text"
            className="form-control"
            placeholder="Usuário Github"
            onChange={handleOnChange}
          />
          <div className="search-form-button">
            <ButtonIcon text="Encontrar" />
          </div>
        </div>
      </form>
      <div className="search-result">
        <div className="search-result-row1">
          <div className="search-result-image">
          <img src={userData.avatar_url} alt="alternatetext" className="search-result-image2"/>
            
          </div>
          <div className="search-result-info">
            <div className="search-result-col2-row1">
              <div className="search-result-field">
                <p className="search-result-field-text">Repositórios públicos: {userData.public_repos}</p>
              </div>
              <div className="search-result-field">
                <p className="search-result-field-text">Seguidores: {userData.followers}</p>
              </div>
              <div className="search-result-field">
                <p className="search-result-field-text">Seguindo: {userData.following}</p>
              </div>
            </div>
            <div className="search-result-col2-row2">
              <h3 className="search-result-col2-title">Informações</h3>
              <div className="search-result-field2">
                <p className="search-result-field2-text">Empresa: {userData.company}</p>
              </div>
              <div className="search-result-field2">
                <p className="search-result-field2-text">Website/Blog: {userData.blog}</p>
              </div>
              <div className="search-result-field2">
                <p className="search-result-field2-text">Localidade: {userData.location}</p>
              </div>
              <div className="search-result-field2">
                <p className="search-result-field2-text">Membro desde: {(dayjs(`${userData.created_at}`).format("DD/MM/YYYY"))}</p>
              </div>
            </div>
          </div>
        </div>
        <div className="search-result-row2">
          <a href={userData.html_url} target="_blank" rel="noreferrer">
            <ButtonIcon text="Ver perfil" />
          </a>
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default Search;
import ButtonIcon from 'core/components/ButtonIcon';
import React from 'react';
import { Link } from 'react-router-dom';
import './styles.css';

const Search = () => {
  return (
    <div className="search-container">
      <div className="search-form">
        <h3 className="search-subtitle">Encontre um perfil Github</h3>
        <form>
          <input
            name="usuario"
            type="text"
            className="form-control"
            placeholder="Usuário Github"
          />
        </form>
        <Link to="/search">
          <ButtonIcon text="Começar" />
        </Link>
      </div>
      <div className="search-result">
        <div className="search-result-row1">
          <div className="search-result-image">
            <h3>imagem</h3>
          </div>
          <div className="search-result-info">
            <div className="search-result-col2-row1">
              <div className="search-result-field">
                <p className="search-result-field-text">Repositórios públicos: 62</p>
              </div>
              <div className="search-result-field">
                <p className="search-result-field-text">Seguidores: 127</p>
              </div>
              <div className="search-result-field">
                <p className="search-result-field-text">Seguindo: 416</p>
              </div>

            </div>
            <div className="search-result-col2-row2">
              <h3 className="search-result-col2-title">Informações</h3>
              <div className="search-result-field2">
                <p className="search-result-field2-text">Empresa: @ZupIT</p>
              </div>
              <div className="search-result-field2">
                <p className="search-result-field2-text">Website/Blog: https://thewashington.dev</p>
              </div>
              <div className="search-result-field2">
                <p className="search-result-field2-text">Localidade: Uberlândia</p>
              </div>
              <div className="search-result-field2">
                <p className="search-result-field2-text">Membro desde: 19/10/2013</p>
              </div>
            </div>
          </div>
        </div>
        <div className="search-result-row2">
          <Link to="/search">
            <ButtonIcon text="Ver perfil" />
          </Link>
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default Search;
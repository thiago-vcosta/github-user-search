import ButtonIcon from 'core/components/ButtonIcon';
import React from 'react';
import './styles.css';
import dayjs from 'dayjs';

type Props = {
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


const SearchResult = ({ company, public_repos, followers, following, blog, location, created_at, avatar_url, html_url }: Props) => {
  return (
    <div className="search-result">
      <div className="search-result-row1">
        <div className="search-result-image">
          <img src={avatar_url} alt="alternatetext" className="search-result-image2" />
        </div>
        <div className="search-result-info">
          <div className="search-result-col2-row1">
            <div className="search-result-field">
              <p className="search-result-field-text">Repositórios públicos: {public_repos}</p>
            </div>
            <div className="search-result-field">
              <p className="search-result-field-text">Seguidores: {followers}</p>
            </div>
            <div className="search-result-field">
              <p className="search-result-field-text">Seguindo: {following}</p>
            </div>
          </div>
          <div className="search-result-col2-row2">
            <h3 className="search-result-col2-title">Informações</h3>
            <div className="search-result-field2">
              <p className="search-result-field2-text">Empresa: {company}</p>
            </div>
            <div className="search-result-field2">
              <p className="search-result-field2-text">Website/Blog: {blog}</p>
            </div>
            <div className="search-result-field2">
              <p className="search-result-field2-text">Localidade: {location}</p>
            </div>
            <div className="search-result-field2">
              <p className="search-result-field2-text">Membro desde: {(dayjs(`${created_at}`).format("DD/MM/YYYY"))}</p>
            </div>
          </div>
        </div>
      </div>
      <div className="search-result-row2">
        <a href={html_url} target="_blank" rel="noreferrer">
          <ButtonIcon text="Ver perfil" />
        </a>
      </div>
    </div>
  );
}

export default SearchResult;

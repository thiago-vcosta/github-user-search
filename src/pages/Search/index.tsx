import ButtonIcon from 'core/components/ButtonIcon';
import React, { useState } from 'react';
import ObjLoaders from './ObjLoaders';
import SearchResult from './components/SearchResult';
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

const Search = () => {
  const [search, setSearch] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [submitDone, setSubmitDone] = useState(false);
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
    if (search !== "") {
      setIsLoading(true);
      setSubmitDone(true);
      fetch(`https://api.github.com/users/${search}`)
        .then(response => response.json())
        .then(userResponse => setUserData(userResponse))
        .finally(() => setIsLoading(false));
    } else {
      alert('Favor digitar um usuário');
    }
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
      {isLoading ? <ObjLoaders /> :
        submitDone ?
          <SearchResult company={userData.company} public_repos={userData.public_repos}
            followers={userData.followers} following={userData.following} blog={userData.blog} location={userData.location}
            created_at={userData.created_at} avatar_url={userData.avatar_url} html_url={userData.html_url} />
          : []
      }
    </div>
  );
};
export default Search;
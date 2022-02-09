import React, { useMemo } from 'react'
import { useNavigate, useLocation } from 'react-router-dom';
import queryString from 'query-string'
import { useForm } from '../../hooks/useForm';
import { getHerosByName } from '../../selectors/getHerosByName';
import { HeroCard } from '../hero/HeroCard';

export const SearchScreen = () => {
    
    const navigate = useNavigate();
    const location = useLocation();
    const { q = ''} = queryString.parse(location.search);

    const heroes = useMemo(() => getHerosByName(q), [q]);    

    const [ {searchText}, handleInputChange ] = useForm({
        searchText: q
    });    

    const handleSearch = (e) => {
        e.preventDefault();                
        navigate(`?q=${searchText}`);
    }

    return (
        <>
            <h2>Search</h2>
            <hr/>

            <div className="row">

                <div className="col-5">

                    <form>

                        <input 
                            type="text"
                            placeholder="search hero"
                            className="form-control"
                            name="searchText"
                            autoComplete="off"
                            onChange={ handleInputChange }
                            value={ searchText }
                        />
                        <button
                            type="submit"
                            className="btn btn-outline-primary mt-1"
                            onClick={handleSearch}>
                            Search
                        </button>
                    </form>

                </div>

                <div className="col-7">
                    <h4>Search Results</h4>
                    <hr />
                    {
                        (q === '')
                            ? <div className="alert alert-info animate__animated animate__zoomIn">Search a Hero</div>
                            : (heroes.length === 0) && <div className="alert alert-danger animate__animated animate__shakeX">No se encontró ningún Héroe</div>
                    }

                    {
                        heroes.map( hero => (
                            <HeroCard
                                key={hero.id}
                                {...hero}
                            />
                        ))
                    }
                </div>

            </div>
        </>
    )
}

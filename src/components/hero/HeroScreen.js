import React, { useMemo } from 'react';
import { useParams, Navigate, useNavigate } from 'react-router-dom';
import { getHerosById } from '../../selectors/getHerosById';

export const HeroScreen = () => {
    
    const { heroId } = useParams();
    const navigate = useNavigate();

    const hero = useMemo( () => getHerosById(heroId), [ heroId ]);    
    
    const handleReturn = () => {
        navigate(-1);
    }

    if (!hero) {
        return <Navigate to="/" />
    }

    const {
        id,
        superhero,
        alter_ego,
        first_appearance,
        characters,
        publisher
    } = hero;

    const imgPath = `/assets/${id}.jpg`;


    return (
        <div className="row mt-5">
            <div className="col-4">
                <img 
                    src={imgPath} 
                    alt={hero.superhero}
                    className="img-thumbnail"
                />
            </div>
            <div className="col-8">
                <h3>{superhero}</h3>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item"> <b>Alter ego:</b>{ alter_ego }</li>
                    <li className="list-group-item"> <b>Publisher:</b>{ publisher }</li>
                    <li className="list-group-item"> <b>First Aparence:</b>{ first_appearance }</li>
                </ul>
                <h5>Characters</h5>
                <p>{ characters }</p>

                <button
                    className="btn btn-outline-info"
                    onClick={ handleReturn }
                >
                    Return
                </button>
            </div>
        </div>
    )
}

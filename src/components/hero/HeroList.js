import { useMemo } from 'react'
import { getHerosByPublisher } from '../../selectors/getHerosByPublisher'
import PropTypes from 'prop-types'
import { HeroCard } from './HeroCard';

export const HeroList = ({publisher}) => {

    const heroes = useMemo( () => getHerosByPublisher(publisher), [publisher]);

    return (
        <div className="row row-cols-1 row-cols-md-3 g-3">
            {
                heroes.map( hero => (
                    <HeroCard 
                        key={hero.id} 
                        {...hero}
                    />
                ))
            }            
        </div>
    )
}

HeroList.propTypes = {
    publisher: PropTypes.string.isRequired
}

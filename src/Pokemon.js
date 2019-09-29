import React from 'react';
import './pokemon.css'
class Pokemon extends React.Component{
    static defaultProps={id: 4, name: 'Charmander', type: 'fire', base_experience: 62
    }
    
    render(){
        let padder=(number)=>(number<=999 ? `00${number}`.slice(-3): number);
        var poke=this.props;
        var urla="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/"+padder(poke.id)+".png"
        return (<div className='pokemon'>
            <h1>{poke.name}</h1>
            <img src={urla} alt={poke.name}/>
            <div>
                <p>Type:{poke.type}</p>
                <p>Base experience:{poke.base_experience}</p>
            </div>

        </div>);
    }
}

export default Pokemon;
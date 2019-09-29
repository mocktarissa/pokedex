import React from 'react';
import './pokemon.css'
class Pokemon extends React.Component{
    static defaultProps={id: 4, name: 'Charmander', type: 'fire', base_experience: 62
    }
    render(){
        var poke=this.props;
        var urla="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/"+poke.id+".png"
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
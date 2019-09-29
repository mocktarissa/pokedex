import React from 'react';
import './pokemon.css'
class Pokemon extends React.Component{
    
    render(){
        var poke=this.props;
        var urla="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/"+poke.id+".png"
        return (<div className='pokemon'>
            <h1>{poke.name}</h1>
            <img src={urla} alt={poke.name}/>
            <p>
                <span>Type:{poke.type}</span>
                <span>Base experience:{poke.base_experience}</span>
            </p>

        </div>);
    }
}

export default Pokemon;
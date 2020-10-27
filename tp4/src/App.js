import React from 'react';
import './App.css';
import Boutons from './Composants/Boutons';
import Profil from './Composants/Profil';

class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {numero: 0};
    }
    
    profils = [
    {
        nom: 'Leclerc',
        prenom: 'Charles',
        datedenaissance: new Date('1804').toLocaleString(),
    },
        
    {
        nom: 'Hamilton',
        prenom: 'Lewis',
        datedenaissance: new Date('1804').toLocaleString(),
    },
        
    {
        nom: 'Gasly',
        prenom: 'Pierre',
        datedenaissance: new Date('1804').toLocaleString(),
    }
        
    ];

    handleClick = (newnumero) => {
        
        this.setState({
            
            numero: newnumero
        });
    }

    render(){
    
        return (
      
            <div className="App">
        
                <header className="App-header">
          
                    <div className="Btn">
                         {this.profils.map((profil,numero) => <Boutons name= {profil.nom} i= {numero} clickHandler={this.handleClick} />)}
                    </div>

                </header>

                <Profil profil={this.profils[this.state.numero]} />
            </div>
    );
  }
}

export default App;

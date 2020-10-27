import React from 'react';
import './Profil.css';

class Profil extends React.Component{
    constructor(props) {
        super(props);
        this.state = {style: "red"};
      }

      backgroundColors= ["black",
                         "blue",
                         "yellow",];

    getStyle = () => {
        var newStyle = "";
        do{
            newStyle = this.backgroundColors[Math.floor(Math.random() * this.backgroundColors.length)];
        }while(newStyle === this.state.style)
        this.setState({
            style : newStyle
        });
    }

    render(){
        return (
            <div className="txt" style={{backgroundColor: this.state.style}}>
                <p>{this.props.profil.prenom}</p>
                <p>{this.props.profil.nom}</p>
                <p>{this.props.profil.datedenaissance}</p>
                <button className="Btn" onClick={this.getStyle}>Change style</button>
            </div>
        );
    }
}

export default Profil;

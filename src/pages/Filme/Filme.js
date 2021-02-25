import React, {Component} from 'react'
import './Filme.css'

class Filme extends Component {
    constructor(props) {
        super(props);
        this.state = {
            filme: []
        }
    }

    componentDidMount() {
        const { id } = this.props.match.params;
        let url = `https://sujeitoprogramador.com/r-api/?api=filmes/${id}`;

        fetch(url)
            .then(res => res.json())
                .then(filme => {
                    this.setState({filme})
                    console.log(filme);
                });
    }

    
    render() {
        return(
            <div className = "filme-info">
                <h1>{this.state.filme.nome}</h1>
                <img src={this.state.filme.foto} alt=""/>
                <h3>Sinopse</h3>
                {this.state.filme.sinopse}
            </div>
        );
    }
}

export default Filme;
import React from 'react';

class TechList extends React.Component {
  state = {
    newTech: '',
    techs: [
      'NodeJS',
      'ReactJS',
      'React Native'
    ]
  }

  handleInputChange = e => {
    this.setState({
      newTech: e.target.value
    });
  }

  handleDelete(tech) {
    this.setState({
      techs: this.state.techs.filter(t => t !== tech)
    });
  }

  handleSubmit = e => {
    e.preventDefault();
    this.setState({
      newTech: '',
      techs: [
        ...this.state.techs,
        this.state.newTech
      ]
    })
  }

  render() {
    const { techs } = this.state;

    return (

      <form onSubmit={this.handleSubmit}>
        <h1>{this.state.newTech}</h1>
        <ul>
          {techs.map(tech => (
            <li key={tech}>
              {tech}
              <button type='button' onClick={() => this.handleDelete(tech)}> Remover </button>
            </li>
          ))}
        </ul>
        <input 
          type="text" 
          onChange={this.handleInputChange} 
          value={this.state.newTech} />
        <button type="submit">Enviar</button>
      </form>

    );
  }
}

export default TechList;
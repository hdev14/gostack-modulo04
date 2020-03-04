import React from 'react';

import TechItem from './TechItem';

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
            <TechItem 
              key={tech} 
              tech={tech}
              onDelete={() => this.handleDelete(tech)} />
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
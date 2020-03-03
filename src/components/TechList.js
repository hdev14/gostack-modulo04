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

  handlerInputChange = e => {
    this.setState({
      newTech: e.target.value
    });
  }

  handlerOnSubmit = e => {
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
      <form onSubmit={this.handlerOnSubmit}>
        <h1>{this.state.newTech}</h1>
        <ul>
          {techs.map(tech => <li key={tech}>{tech}</li>)}
        </ul>
        <input 
          type="text" 
          onChange={this.handlerInputChange} 
          value={this.state.newTech} />
        <button type="submit">Enviar</button>
      </form>
    );
  }
}

export default TechList;
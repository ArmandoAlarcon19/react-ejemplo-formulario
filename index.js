import React, { Component } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import './style.css';

class Formulario extends Component{
  constructor(props){
    super(props);
    this.state = {
      email:'',
      password: ''
    }
  }

  syncChanges (property, value) {
    let state = {};
    state[property] = value;
    this.setState(state);
  }

  enviar = () =>{
    console.log(this.state);
  }
  render(){
    return(
      <form>
      <input type='email' 
      value={this.state.email}
      onChange={(event) => this.syncChanges('email',event.target.value )} 
      placeholder='email'/>
      <input type='password' 
      value={this.state.password} 
      onChange={(event) => this.syncChanges('password', event.target.value)}
      placeholder='password'/>
      <div>
        <button onClick={this.enviar}>Enviar</button>
      </div>
      </form>
    )
  }
}

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: 'React'
    };
  }

  render() {
    return (
      <div>
        <Hello name={this.state.name} />
        <p>
          Start editing to see some magic happen :)
        </p>
        <Formulario/>
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));

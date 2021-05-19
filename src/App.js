import React from 'react';
import './App.css';

const list = ["Яблоко", "Апельсин", "Груша"];

class List extends React.Component {

render () {
  return (
    <ul>
      {this.props.listArr.map(element => {
        return <li key ={element}>{element}</li>

      } )}
    </ul>
  ) 
}
}

const listsec = [
  {
    id:'1',
    value: 'Яблоко'
  },
  {
    id:'2',
    value: 'Апельсин'
  },
  {
    id:'3',
    value: 'Груша'
  }
]


class ListSec extends React.Component {

  render () {
    return (
      <ul>
        {this.props.listArr.map(element => {
          return <li key ={element.id}>{element.value}</li>
  
        } )}
      </ul>
    ) 
  }
  }

class Button extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count : 0
    }
    this.handleClick = this.handleClick.bind(this)

  }

  handleClick () {
    this.setState({
      count : this.state.count + 1
    })
  }

  handleClicke() {
    this.setState((prevState,props)=>{
    console.log(prevState,props);
    return {
      count : prevState.count - 1 
      }
    
    }) 
    } 

  render() {
    return (
      <div className = 'App'>
        <div><h1>{this.state.count}</h1></div>
        <button onClick = {this.handleClick}>
          Click +
        </button>
        <button onClick = {() => this.handleClicke()}>
        Click -
      </button>
      </div>
    )
  }
}







class App extends React.Component {
  render () {
  return (
    <div>
      <header>

    <Button />
    <List listArr = {list}/>
    <ListSec listArr = {listsec}/>

      </header>
    </div>
  
  );
  }
}





export default App;

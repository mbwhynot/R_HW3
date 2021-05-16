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

class App extends React.Component {
  render () {
  return (
    <div>
      <header>
    <List listArr = {list}/>
    <ListSec listArr = {listsec}/>
      </header>
    </div>
  
  );
  }
}

export default App;

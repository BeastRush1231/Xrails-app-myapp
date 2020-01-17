import React from 'react';
import Jumbotron from './Jumbotron.js'
import Table from './Table/Table.js'
import Item from './Table/Item.js'

class Home extends React.Component {
  constructor(){
    super()

    this.state = {
      five_x_ruby_modules: [
        { id: 1, title: '1. Setting up a new Ruby on Rails App with React.', description: 'lorem isupm', active: false },
        { id: 2, title: '2. Adding React to an Existing Rails App.', description: 'lorem isupm', active: false },
        { id: 3, title: '3. Building a Hello World App.', description: 'lorem isupm', active: false },
        { id: 4, title: '4. ', description: 'lorem isupm', active: false }
      ]
    }
  }

  render(){
    return (
      <div>
        <Jumbotron />
        <Table />
        <Item />
      </div>
    )
  };
}

export default Home;
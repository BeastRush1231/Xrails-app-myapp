import React from 'react';
import Jumbotron from './Jumbotron.js'
import Table from './Table/Table.js'

class Home extends React.Component {
  constructor(){
    super()

    this.state = {
      five_x_ruby_modules: [
        { id: 1, 
          title: '1th 5xruby AstroCamp DemoProject Video.', 
          description: 'lorem isupm',
          src: 'https://www.youtube.com/embed/CHdVqxBpEcY', 
          active: false 
        },
        { id: 2, 
          title: '2nd 5xruby AstroCamp DemoProject Video.', 
          description: 'lorem isupm',
          src: 'https://www.youtube.com/embed/dR_-10fBYOM', 
          active: false 
        },
        { id: 3, 
          title: '3rd 5xruby AstroCamp DemoProject Video', 
          description: 'lorem isupm',
          src: 'https://www.youtube.com/embed/dR_-10fBYOM', 
          active: false 
        },
        { id: 4, 
          title: '4th 5xruby AstroCamp DemoProject Video', 
          description: 'lorem isupm',
          src: 'https://www.youtube.com/embed/dR_-10fBYOM', 
          active: false 
        }
      ]
    }
  }

  render(){
    return (
      <div>
        <Jumbotron />
        <Table five_x_ruby_modules={this.state.five_x_ruby_modules}/>
      </div>
    )
  };
}

export default Home;
import React from 'react';

class Home extends React.Component {
  // constructor(){
  //   this.state = {
  //     modules: [
  //       { id: 1, title: '1. Setting up a new Ruby on Rails App with React.', description: '', active: false },
  //       { id: 2, title: '2. Adding React to an Existing Rails App.', description: '', active: false },
  //       { id: 3, title: '3. Building a Hello World App.', description: '', active: false },
  //       { id: 4, title: '4. ', description: '', active: false }
  //     ]
  //   }
  // }

  render(){
    return (
      <div className="bg-red-700 h-screen flex justify-around">
        <div className="left">left</div>
        <div className="right">right</div>
      </div>
    )
  };
}

export default Home;
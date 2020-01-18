import React from 'react';
import Item from './Item';
import ActiveItem from './ActiveItem';

class Table extends React.Component{
  constructor(props){
    super(props)
  }

  render(){
    // props = Home.js > this.state.five_x_ruby_modules

    const items = this.props.five_x_ruby_modules.map( data => {
      return (
        data.active 
        ? <ActiveItem key={data.id} title={data.title} description={data.description}src={data.src}/> 
        : <Item key={data.id} title={data.title} description={data.description} src={data.src}/>
      )
    });

    return (
      <div className="container mx-auto">
        <div className="text-center pt-8">
          <h2 className="pb-3 text-2xl lg:text-4xl font-bold">
            5xruby DemoProject - Videos
          </h2>
        </div>
        {/* Item.js */}
        {items}
        {/* Item.js */}
      </div>
    )
  }
}

export default Table;
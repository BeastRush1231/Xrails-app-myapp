import React from 'react'

class Table extends React.Component{
  constructor(props){
    super(props)
  }

  render(){
    return (
      <div className="py-5">
        <div className="container mx-auto">
          <div className="text-center">
            <h2 className="py-4 text-2xl lg:text-4xl font-bold">
              5xruby DemoProject - Videos
            </h2>
          </div>
        </div>
      </div>
    )
  }
}

export default Table;
import React from 'react';
import Video from '../Table/Video.js';

const ActiveItem = (props) => {

  // props > Table.js > Home.js
  return (
    <div className="container mx-auto p-5 lg:px-20 lg:py-8">
      <div className="w-full mx-auto">
        <div className="text-center flex border-2 border-black p-3 flex-wrap lg:flex-no-wrap">
          <div className="w-full lg:w-1/2 lg:mt-10">
            <div className="pt-8 leading-loose">
              <h4 className="py-3 text-xl lg:text-2xl font-normal leading-tight">{props.title}</h4>
              <p className="text-xl font-normal">{props.description}</p>
              <div className="my-2 py-2">
                <a href={props.src} target="_blank" className="bg-red-700 border-2 border-black text-white font-bold cursor-pointer p-2">Watch this video</a>
              </div>
            </div>
          </div>
          <div className="w-full lg:w-1/2">
            <Video src={props.src}/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ActiveItem;
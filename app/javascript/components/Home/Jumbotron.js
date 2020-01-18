import React from 'react'

const BoxShadow = {
  boxShadow: `
    0px 0px 0px 3px #473228, 
    -6px 6px #feb2b2,
    -6px 6px 0px 3px #473228
  `
};

const Jumbotron = () => {
  return (
    <section className="lg:py-40 bg-red-700 text-white">
      <div className="container mx-auto flex flex-wrap">
        <div className="w-full lg:w-1/2 text-center">
          <div className="py-4">
            <h1 className="py-3 text-3xl lg:text-6xl font-bold leading-tight">5xruby For Demo ProjectList</h1>
            <p className="text-xl font-normal">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad, sint.</p>
            <div className="mt-8">
              <a className="bg-white border-black text-black font-bold cursor-pointer py-4 px-10" style={BoxShadow}>Get Started</a>
            </div>
          </div>
        </div>
        <div className="w-full lg:w-1/2">
          <div className="py-10 lg:py-4">
            <iframe width="100%" height="330" src="https://www.youtube.com/embed/CHdVqxBpEcY" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Jumbotron;
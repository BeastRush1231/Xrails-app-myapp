import React from 'react'

const Item = (props) => {
  return (
    <div className="flex">
      <div className="md:w-5/6">
        <div className="text-center">
          <div className="card px-5">
            <div className="flex">
              <div className="w-1/3">1</div>
              <div className="w-2/3">2</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Item
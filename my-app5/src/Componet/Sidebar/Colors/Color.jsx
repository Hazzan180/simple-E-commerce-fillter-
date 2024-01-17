import React from 'react'

const Data = [
  {id:1, title:"All", value:""},
  {id:2, title:"Black", value:"black"},
  {id:3, title:"Blue", value:"blue"},
  {id:4, title:"Red", value:"red"},
  {id:5, title:"Green", value:"Green"},
]

const Color = ({handleChage}) => {
  return (
    <div className="sidebar-item">
      <h3>Color</h3>

      <form>
        {
          Data.map((item) => (
            <div className="sidebar-list" key={item.id}>
              <input 
                type="radio" 
                value={item.value}
                name="color" 
                onChange={handleChage} 
              />
              <span>{item.title} </span>
            </div>
          ))
        }
      </form>
    </div>
  )
}

export default Color
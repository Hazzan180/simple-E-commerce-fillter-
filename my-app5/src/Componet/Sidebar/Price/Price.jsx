import React from 'react'

const Data = [
  {id:1, title:"All", value:""},
  {id:2, title:"$0 - 50", value:"50"},
  {id:3, title:"$100 - $150", value:"150"},
  {id:4, title:"Over $150", value:"200"},
]

const Price = ({handleChage}) => {
  return (
    <div className="sidebar-item">
      <h3>Price</h3>

      <form>
        {
          Data.map((item) => (
            <div className="sidebar-list" key={item.id}>
              <input 
                type="radio" 
                value={item.value}
                name="price" 
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

export default Price
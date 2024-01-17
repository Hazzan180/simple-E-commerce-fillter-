

const Data = [
  {id:1, title:"All", value:""},
  {id:2, title:"Sneakers", value:"sneakers"},
  {id:3, title:"Flats", value:"flats"},
  {id:4, title:"Sandals", value:"sandals"},
  {id:5, title:"Heels", value:"heels"},
]

const Category = ({handleChage}) => {
 
  return (
    <div className="sidebar-item">
      <h3>Category</h3>

      <form>
        {
          Data.map((item) => (
            <div className="sidebar-list" key={item.id}>
              <input 
                type="radio" 
                value={item.value}
                name="category" 
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

export default Category
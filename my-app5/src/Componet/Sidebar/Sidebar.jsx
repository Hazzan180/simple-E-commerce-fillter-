import { IoCloseOutline } from "react-icons/io5";

const Data1 = [
  {id:1, title:"All", value:"all"},
  {id:2, title:"Sneakers", value:"sneakers"},
  {id:3, title:"Flats", value:"flats"},
  {id:4, title:"Sandals", value:"sandals"},
  {id:5, title:"Heels", value:"heels"},
]

const Data2 = [
  {id:1, title:"All", value:"all"},
  {id:2, title:"$0 - 50", value:"50"},
  {id:3, title:"$100 - $150", value:"150"},
  {id:4, title:"Over $150", value:"200"},
]

const Data3 = [
  {id:1, title:"All", value:"all"},
  {id:2, title:"Black", value:"black"},
  {id:3, title:"Blue", value:"blue"},
  {id:4, title:"Red", value:"red"},
  {id:5, title:"Green", value:"green"},
]

const Sidebar = ({handleChage, menuRef,  closeMenu}) => {
  //let menuRef = useRef()

  //const openMenu = () => navRef.current.classList.add('sidebar-responsive')
  return (
    <div className='sidebar' ref={menuRef}>
      <div className="sidebar-item">
        <IoCloseOutline className="close" onClick={ closeMenu}/>
      <form>
      <h3>Category</h3>
        {
          Data1.map((item) => (
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

      <h3>Price</h3>
        {
          Data2.map((item) => (
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

      <h3>Color</h3>
        {
          Data3.map((item) => (
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
    </div>
  )
}

export default Sidebar
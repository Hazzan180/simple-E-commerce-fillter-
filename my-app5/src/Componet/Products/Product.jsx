import React from 'react'
import Card from '../Card/Card'

const Data = [
  {id: 1, title: "All Products", value: 'all'},
  {id: 2, title: "Nike", value: 'Nike' },
  {id: 3, title: "Adidas", value: 'Adidas'},
  {id: 4, title: "Puma", value: 'Puma'},
  {id: 5, title: "Vans", value: 'Vans'},
] 

const Product = ({handleClick, productsData}) => {
  return (
    <div className='product-Container'>
      <h2>Recommended</h2>
      <div className='button-list'>
      {
        Data.map(item => (
          <button 
          key={item.id} 
          value={item.value}
          onClick={handleClick} 
          >
            {item.title}
          </button>
        ))
      }
      </div>


      <section className='card-container'>
        {
          productsData.length == 0 ? <h1>No item found</h1>
          : 
          productsData.map((item, index) => (
            <Card key={index} item={item}/>
          ))
        }
      </section>
    </div>
  )
}

export default Product
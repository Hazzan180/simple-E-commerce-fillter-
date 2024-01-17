import { useRef, useState } from 'react';
import Navigation from './Componet/Navigation/Navigation';
import Product from './Componet/Products/Product';
import Sidebar from './Componet/Sidebar/Sidebar';
import Data from './db/Data';

const App = () => {
  const [productsData, setProductsData] = useState(Data);
  const menuRef = useRef();

  const handleInputChange = (e) => {
    let searchTerm = e.target.value;
    let searchProducts = Data.filter((item) =>
      item.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setProductsData(searchProducts);
  };

  const openMenu = () => {
    menuRef.current.classList.add('sidebar-responsive');
  };

  const closeMenu = () => menuRef.current.classList.remove('sidebar-responsive');

  const handleChage = (e) => {
    const selectedCategory = e.target.value;

    // Define mapping of categories to filtering functions
    const categoryFilters = {
      all: () => setProductsData(Data),
      sneakers: () => filterByCategory('sneakers'),
      flats: () => filterByCategory('flats'),
      sandals: () => filterByCategory('sandals'),
      heels: () => filterByCategory('heels'),
      '50': () => filterByPrice('50'),
      '150': () => filterByPrice('150'),
      '200': () => filterByPrice('200'),
      black: () => filterByColor('black'),
      blue: () => filterByColor('blue'),
      red: () => filterByColor('red'),
      green: () => filterByColor('green'),
    };

    const filteringFunction = categoryFilters[selectedCategory];

    if (filteringFunction) {
      filteringFunction();
    }
  };

  const filterByCategory = (category) => {
    const filterProduct = Data.filter((item) => item.category === category);
    setProductsData(filterProduct);
  };

  const filterByPrice = (price) => {
    const filterProduct = Data.filter((item) => item.newPrice === price);
    setProductsData(filterProduct);
  };

  const filterByColor = (color) => {
    const filterProduct = Data.filter((item) => item.color === color);
    setProductsData(filterProduct);
  };

  const handleClick = (e) => {
    const clickCategory = e.target.value;

    const filterFunctions = {
      all: () => setProductsData(Data),
      Nike: () => filterByCompany('Nike'),
      Adidas: () => filterByCompany('Adidas'),
      Puma: () => filterByCompany('Puma'),
      Vans: () => filterByCompany('Vans'),
    };

    let filterButton = filterFunctions[clickCategory];

    if (filterButton) {
      filterButton();
    }
  };

  const filterByCompany = (company) => {
    const filterProduct = Data.filter((item) => item.company === company);
    setProductsData(filterProduct);
  };

  return (
    <div className='grid-container'>
      <Navigation
        handleInputChange={handleInputChange}
        openMenu={openMenu}
      />
      <Sidebar menuRef={menuRef} handleChage={handleChage} closeMenu={closeMenu}/>
      <Product handleClick={handleClick} productsData={productsData} />
    </div>
  );
};

export default App;

import React, { useState } from 'react';
import data from './data';
import Menu from './Menu';
import Categories from './Categories';
import './index.css';
const allCategory = ['all',...new Set(data.map((item)=>item.category))];


const FinalMenu = () => {
  const[menu,setMenu] = useState(data);
  const[categories,setCategories] = useState(allCategory);
  const filterItems = (category)=>{
    if(category==='all'){
      setMenu(data);
      return;
    }
    const newItems = data.filter((item)=>
      item.category ===category
    );setMenu(newItems);
  }
  return (
    <main>
      <section className='menu section'>
        <div className="title">
        <h2>Restrurent Menu</h2>
        <div className="underline"></div>
        </div>
        <Categories categories={categories} filterItems={filterItems}/>
        <Menu items={menu}/>
      </section>
    </main>
  )
}

export default FinalMenu
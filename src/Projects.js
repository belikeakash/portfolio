import React, { useState } from 'react';
import Menu from './Project-2';
import Categories from './Categories';
import items from './data/pro';
import "./Project.css"

const allCategories = ['all', ...new Set(items.map((item)=> item.category))] ;
console.log(allCategories)


function Project() {
  const [menuItems, setMenuItems] = useState(items);
  const [categories, setCategories] = useState(allCategories);

  const filterItems = (category) => {
    if(category == 'all') {
      setMenuItems(items)
      return;
    }
    const newItems = items.filter((item) => item.category === category)
    setMenuItems(newItems)
  }
  return <main>
    <section id='c1' className="menuu sectionn">
      <div className="titlee">
        <h2>Projects</h2>
        <div className="underline">
        </div>
      </div>
      <Categories categories={categories} filterItems={filterItems} />
      <Menu items={menuItems} />
    </section>

  </main>;
}

export default Project;

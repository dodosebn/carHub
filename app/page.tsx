import React from 'react';
import Hero from '../components/Hero';
import CustomFilter from '../components/CustomFilter';
import SearchBar from '../components/SearchBar'
const App = () => {
  return (
    <main className="text-lg overflow-x-hidden">
      <Hero />
      <div className='mt-12 padding-x padding-y max-width' id='discover'>
<div className='home__text-container'>
<h1 className='text-4xl font-extrabold'>Car catalogue</h1>
<p>Explore the cars you miht like</p>
</div>
<div className='home__filters'>
<SearchBar />
<div className='home__filter-container'>
<CustomFilter title='Fuel'/>
<CustomFilter title='Year'/>
</div>
</div>
      </div>
    </main>
  );
};

export default App;

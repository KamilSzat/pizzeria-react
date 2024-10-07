import React from 'react';
import './App.css';
import pizza1 from './picture/margherita.jfif';
import pizza2 from './picture/pepperoni.jfif';
import pizza3 from './picture/vege_suprima.jfif';
import pizza4 from './picture/BBQ_chicken.jfif';
import pizza5 from './picture/hawajska.jfif';

function App() {
  const dishes = [
    {
      name: 'Margherita',
      size: 'Średnia',
      description: 'Klasyczna pizza z sosem pomidorowym, mozzarellą i bazylią.',
      imageUrl: pizza1
    },
    {
      name: 'Peppperoni',
      size: 'Duża',
      description: 'Pikantna pepperoni z mozzarellą i sosem pomidorowym.',
      imageUrl: pizza2
    },
    {
      name: 'Vege Supreme',
      size: 'Wielka',
      description: 'Pizza pełna świeżych warzyw i sera.',
      imageUrl: pizza3
    },
    {
      name: 'BBQ Chicken',
      size: 'Duża',
      description: 'Grilowany kurczak mz sosem BBQ cebulą.',
      imageUrl: pizza4
    },
    {
      name: 'Hawajska',
      size: 'Średnia',
      description: 'Pizza z ananasem, mozzarellą i szynką.',
      imageUrl: pizza5
    }
  ];
  return(
      <div className="pizza">
        {dishes.map((dish, index) => (<div className="dish" key={index}>
          <img
          src={dish.imageUrl}
          alt={dish.name}
          className="dish-image" />
          <div className="dish-info">
            <h1>{dish.name}</h1>
            <p><strong>{dish.size}</strong></p>
            <p><em>{dish.description}</em></p>
          </div>
        </div>
        ))}
      </div>
  );
}

export default App;

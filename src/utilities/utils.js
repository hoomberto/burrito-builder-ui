import React from 'react'

export const renderIngredientButtons = (handler) => {
  const possibleIngredients = ['beans', 'steak', 'carnitas', 'sofritas', 'lettuce', 'queso fresco', 'pico de gallo', 'hot sauce', 'guacamole', 'jalapenos', 'cilantro', 'sour cream'];
  return possibleIngredients.map(ingredient => {
    return (
      <button id={!/\s/g.test(ingredient) ? ingredient : ingredient.replace(/\s/g, '')} key={ingredient} name={ingredient} onClick={e => handler(e)}>
        {ingredient}
      </button>
    )
  });
}

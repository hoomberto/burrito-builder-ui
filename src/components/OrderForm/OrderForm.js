import React, { useState } from 'react';
import { renderIngredientButtons } from '../../utilities/utils'
import { getOrders, postOrder } from '../../apiCalls'

const OrderForm = ({ update }) => {
  const [name, setName] = useState('')
  const [ingredients, setIngredients] = useState([])
  const [userWarning, setUserWarning] = useState(false)

  const updateOrders = async () => {
    let data = await getOrders().catch(err => console.error('Error fetching:', err))
    update(data.orders)
  }

  const handleSubmit = e => {
    e.preventDefault();
    if (ingredients.length < 1 || !name) return setUserWarning(true)
    let newOrder = {
      name,
      ingredients
    }
    postOrder(newOrder)
    .then(response => updateOrders())
    setUserWarning(false)
    clearInputs();
  }

  const clearInputs = () => {
    setName('')
    setIngredients([])
  }

  const handleIngredientChange = (e) => {
    e.preventDefault()
    if (!ingredients.includes(e.target.name)) {
      setIngredients([...ingredients, e.target.name])
    }
  }

  return (
    <form>
      <input
        type='text'
        placeholder='Name'
        name='name'
        value={name}
        onChange={e => setName(e.target.value)}
      />

    { renderIngredientButtons(handleIngredientChange) }

      <p>Order: { ingredients.join(', ') || 'Nothing selected' }</p>

      <button onClick={e => handleSubmit(e)}>
        Submit Order
      </button>
      {!userWarning ? null : <h3>Please make sure your name is entered and at least one ingredient is selected.</h3>}
    </form>
  )
}

export default OrderForm;

import React from 'react';
import { deleteOrder, getOrders } from '../../apiCalls'
import './Orders.css';

const Orders = ({ orders, update }) => {

  const updateOrders = (id) => {
    let updated = orders.filter(order => order.id != parseInt(id))
    update(updated)
  }

  const handleDelete = (e) => {
    const { id } = e.target
    deleteOrder(id).then(() => updateOrders(id))
  }

  let orderEls;
  if (orders) {
    orderEls = orders.map(order => {
      return (
        <div key={order.id} className="order">
          <h3>{order.name}</h3>
          <ul className="ingredient-list">
            {order.ingredients.map((ingredient, index) => {
              return <li key={index}>{ingredient}</li>
            })}
          </ul>
          <button id={order.id} onClick={handleDelete}>🗑</button>
        </div>
      )
    })
  }

  return (
    <section id="orderSection">
      { orderEls ? orderEls : <p>No orders yet!</p> }
    </section>
  )
}

export default Orders;

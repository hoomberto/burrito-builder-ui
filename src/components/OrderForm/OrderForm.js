import React, { useState, useEffect, Component } from 'react';

const OrderForm = () => {
  const [name, setName] = useState('')
  const [ingredients, setIngredients] = useState([])

  const handleSubmit = e => {
    e.preventDefault();
    if (ingredients.length < 1 || !name) alert("STOP") return
    clearInputs();
    // POST here probably, followed by a get
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

  const renderIngredientButtons = () => {
    const possibleIngredients = ['beans', 'steak', 'carnitas', 'sofritas', 'lettuce', 'queso fresco', 'pico de gallo', 'hot sauce', 'guacamole', 'jalapenos', 'cilantro', 'sour cream'];
    return possibleIngredients.map(ingredient => {
      return (
        <button key={ingredient} name={ingredient} onClick={e => handleIngredientChange(e)}>
          {ingredient}
        </button>
      )
    });
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

    { renderIngredientButtons() }

      <p>Order: { ingredients.join(', ') || 'Nothing selected' }</p>

      <button onClick={e => handleSubmit(e)}>
        Submit Order
      </button>
    </form>
  )
}


// class OrderForm extends Component {
//   constructor(props) {
//     super();
//     this.props = props;
//     this.state = {
//       name: '',
//       ingredients: []
//     };
//   }
//
//
//   handleSubmit = e => {
//     e.preventDefault();
//     this.clearInputs();
//   }
//
//   clearInputs = () => {
//     this.setState({name: '', ingredients: []});
//   }
//
//   render() {
    // const possibleIngredients = ['beans', 'steak', 'carnitas', 'sofritas', 'lettuce', 'queso fresco', 'pico de gallo', 'hot sauce', 'guacamole', 'jalapenos', 'cilantro', 'sour cream'];
    // const ingredientButtons = possibleIngredients.map(ingredient => {
    //   return (
    //     <button key={ingredient} name={ingredient} onClick={e => this.handleIngredientChange(e)}>
    //       {ingredient}
    //     </button>
    //   )
    // });
//
    // return (
    //   <form>
    //     <input
    //       type='text'
    //       placeholder='Name'
    //       name='name'
    //       value={this.state.name}
    //       onChange={e => this.handleNameChange(e)}
    //     />
    //
    //     { ingredientButtons }
    //
    //     <p>Order: { this.state.ingredients.join(', ') || 'Nothing selected' }</p>
    //
    //     <button onClick={e => this.handleSubmit(e)}>
    //       Submit Order
    //     </button>
    //   </form>
    // )
//   }
// }

export default OrderForm;

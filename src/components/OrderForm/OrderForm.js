import React, { useState, useEffect, Component } from 'react';

const OrderForm = () => {
  const [name, setName] = useState('')
  const [ingredients, setIngredients] = useState([])

  const handleSubmit = e => {
    e.preventDefault();
    this.clearInputs();
    // POST here probably, followed by a get
  }

  const clearInputs = () => {
    this.setState({name: '', ingredients: []});
  }

  const handleIngredientChange = () => {
    return
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

  const handleNameChange = e => {
    setName(e.target.value)
  }
  // 
  // const handleSubmit = () => {
  //   setIngredients()
  // }


  return (
    <form>
      <input
        type='text'
        placeholder='Name'
        name='name'
        value={name}
        onChange={e => handleNameChange(e)}
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

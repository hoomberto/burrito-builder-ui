import React, { useState, useEffect } from 'react';
import './App.css';
import {getOrders} from '../../apiCalls';
import Orders from '../../components/Orders/Orders';
import OrderForm from '../../components/OrderForm/OrderForm';


const App = () => {
  const [orders, setOrders] = useState('')

  useEffect(async () => {
    let data = await getOrders().catch(err => console.error('Error fetching:', err))
    console.log(data)
    setOrders(data.orders)
  }, [])

  return (
    <main className="App">
      <header>
        <h1>Burrito Builder</h1>
        <OrderForm />
      </header>
    </main>
  )
}

// class App extends Component {
//   constructor(props) {
//     super();
//   }
//
//   // componentDidMount() {
//   //   getOrders()
//   //     .catch(err => console.error('Error fetching:', err));
//   // }
//
//   render() {
//     return (
//       <main className="App">
//         <header>
//           <h1>Burrito Builder</h1>
//           <OrderForm />
//         </header>
//
//         <Orders orders={this.state.orders}/>
//       </main>
//     );
//   }
// }


export default App;

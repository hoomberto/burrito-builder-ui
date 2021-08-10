import React, { useState, useEffect } from 'react';
import './App.css';
import {getOrders} from '../../apiCalls';
import Orders from '../../components/Orders/Orders';
import OrderForm from '../../components/OrderForm/OrderForm';


const App = () => {
  const [orders, setOrders] = useState('')

  useEffect(() => {
    const setData = async() => {
      let data = await getOrders().catch(err => console.error('Error fetching:', err))
      setOrders(data.orders)
    }
    setData()
  }, [])

  return (
    <main className="App">
      <header>
        <h1>Burrito Builder</h1>
        <OrderForm />
        <Orders orders={!orders ? false : orders} />
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

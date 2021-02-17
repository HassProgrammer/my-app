import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

const App = () => {
  const products = [
    {name:'Web Software', price:'$200'},
    {name:'Desktop Software', price:'$500'},
    {name:'Mobile Apps', price:'$300'}
  ]

  return (
    <div className="App">
      <header className="App-header">
        <Counter></Counter>
        <ul>
          {
            products.map(product => <li>{product.name}</li>)
          }
        </ul>
        <Product product={products[0]}></Product>
        <Product product={products[1]}></Product>
        <Person name="The Khan" job="Software Developer"></Person>
        <Person name="A Khan" job="Computer Engineer"></Person>
        <Person></Person>
        
        
      </header>
    </div>
  );
}

function  Counter() {
  const[count, setCount] = useState(0);
  const handleIncrease = () => {
    const newCount = count +1;
    setCount(newCount);
  };
  return(
    <div>
      <h1>Count: {count}</h1>
      <button onClick={()=>setCount(count -1)}>Decrease</button>
      <button onClick={handleIncrease}>Increase</button>
    </div>
  )
}

function Product(props) {
  const productStyle={
    border: '2px solid gray',
    borderRadius:'5px',
    backgroundColor:'lightgray',
    height:'200px',
    width:'200px',
    float:'left' 

  }
  return (
    <div style={productStyle}>
      <h3>{props.product.name}</h3>
      <h4>{props.product.price}</h4>
      <button>Buy Now</button>

    </div>
  )
}

function Person(props) {
  return (
    <div style={{border: '2px solid yellow', width:'400px'}}>
      <h3>My Name:{props.name} </h3>
      <p>My Profession:{props.job} </p>
    </div>
  )
  
}

export default App;

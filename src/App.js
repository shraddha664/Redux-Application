import React from 'react'
import "./App.css"
import {useSelector,useDispatch} from "react-redux";
import { incNumber } from './actions/index'
import { decNumber } from './actions/index'
 
const App = () => {
   const myState=useSelector((state)=>state.changeTheNumber);
  const dispatch=useDispatch();
   return (
    <div className="container">
      <h1> Increment/Decrement Counter</h1>
      <h4>
Using React and Redux
      </h4>
      <div className="quantity">
        <a className="quantity-minus" title="Decrement" onClick={()=>dispatch(decNumber())}><span>-</span></a>
        <input name="quantity" type="text" className="quantity-input" value={myState} />
        <a className="quantity-plus" title="Increment" onClick={()=>dispatch(incNumber(5))} ><span>+</span></a>

      </div>
    </div>
  )
}

export default App;
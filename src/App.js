import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import {addCustomerAction, removeCustomerAction} from './store/customerReducer';
import './App.css';

function App() {
  const dispatch = useDispatch();
  const cash = useSelector(state => state.cash.cash);
  const customers = useSelector(state => state.customers.customers)
  console.log(cash);

  const addCash = () => {
    dispatch({type: "ADD_CASH", payload: 1})
  }   

  const getCash = () => { 
    dispatch({type: "GET_CASH", payload: 1})
  }

  const addCustomer = name => {
    const customer = {
      name: name,
      id: Date.now()
    }
    dispatch(addCustomerAction(customer))
  }

  const removeCustomer = customer => {
    console.log(removeCustomerAction(customer))
    console.log(customers)
    dispatch(removeCustomerAction(customer.id))
  }

  return (
    <div className="App">
      <div>
        {cash}
      </div>
      <div>
        <Button onClick={addCash}>Add Cash</Button>
        <Button onClick={getCash}>Get Cash</Button>
        <Button onClick={() => addCustomer(prompt())}>Add client</Button>
      </div>
      {customers.length > 0 ? 
        <div>
          {customers.map(customer => 
            <div onClick={() => removeCustomer(customer)}>{customer.name}</div>
          )}
        </div> 
        : 
        <div>
          Clients not exists!
        </div>
      }
    </div>
  );
}

export default App;

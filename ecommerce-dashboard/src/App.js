import "./App.css";
import { BrowserRouter, Route } from "react-router-dom";

import Protected from "./protected";
import Login from "./Login";
import AddProduct from "./AddProduct";
import Register from "./Register";
import UpdateProduct from "./UpdateProduct";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/add">
          <Protected Cmp={AddProduct} />
        </Route>
        <Route path="/update">
          <Protected Cmp={UpdateProduct} />
        </Route>
        <Route path="/register">
          <Register />
        </Route>
      </BrowserRouter>
    </div>
  );
}

export default App;

import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Protected from "./protected";
import Login from "./Login";
import AddProduct from "./AddProduct";
import Register from "./Register";
import UpdateProduct from "./UpdateProduct";
import ProductList from "./ProductList";
import Search from "./SearchProduct";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/add">
            <Protected Cmp={AddProduct} />
          </Route>
          <Route path="/update/:id">
            <Protected Cmp={UpdateProduct} />
          </Route>
          <Route path="/search">
            <Protected Cmp={Search} />
          </Route>
          <Route path="/register">
            <Register />
          </Route>
          <Route path="/">
            <Protected Cmp={ProductList} />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;

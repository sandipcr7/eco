import Header from "./Header";
import "./App.css";
import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
function ProductList() {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetchData();
  }, []);
  async function deleteOperation(id) {
    let result = await fetch("http://localhost:8000/api/delete/" + id, {
      method: "DELETE",
    });
    result = await result.json();
    console.warn(result);
    fetchData();
  }

  async function fetchData() {
    let response = await fetch("http://localhost:8000/api/list");
    response = await response.json();
    setData(response);
  }
  console.log("result", data);
  return (
    <div>
      <Header />

      <h1>Product List</h1>
      <div className="col-sm-8 offset-sm-2">
        <Table>
          <tr>
            <td>Id</td>
            <td>Name</td>
            <td>Price</td>
            <td>Description</td>
            <td>Image</td>
            <td>Operations</td>
          </tr>
          {data.map((item) => (
            <tr>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.price}</td>
              <td>{item.description}</td>
              <td>
                <img
                  style={{ width: 100 }}
                  src={"http://localhost:8000/" + item.file_path}
                />
              </td>
              <td>
                <span
                  onClick={() => deleteOperation(item.id)}
                  className="delete"
                >
                  Delete
                </span>
              </td>
            </tr>
          ))}
        </Table>
      </div>
    </div>
  );
}

export default ProductList;
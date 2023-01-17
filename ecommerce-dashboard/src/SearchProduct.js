import Header from "./Header";
import { useState } from "react";
import { Table } from "react-bootstrap";

function Search() {
  const [data, setData] = useState([]);

  async function searchComponent(key) {
    if (key.length > 1) {
      let result = await fetch("http://localhost:8000/api/search/" + key);
      result = await result.json();
      console.warn(result);
      setData(result);
    }
  }
  return (
    <div>
      <Header />
      <div className="col-sm-6 offset-sm-3">
        <h1>Search Product</h1>
        <br />
        <input
          type="text"
          onChange={(e) => searchComponent(e.target.value)}
          className="form-control"
          placeholder="Search Product"
        />
        <br />

        {data.length > 0 ? (
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
                    alt="not found"
                  />
                </td>
              </tr>
            ))}
          </Table>
        ) : null}
      </div>
    </div>
  );
}

export default Search;

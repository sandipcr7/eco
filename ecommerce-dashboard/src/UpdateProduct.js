import Header from "./Header";
import { withRouter } from "react-router-dom";
import { useState, useEffect } from "react";
function UpdateProduct(props) {
  const [data, setData] = useState([]);
  console.warn("props", props.match.params.id);
  // useEffect(async () => {
  //   let result = await fetch(
  //     "http://localhost:8000/api/product/" + props.match.params.id
  //   );
  //   result = await result.json();
  //   setData(result);
  // });

  useEffect(() => {
    async function fetchData() {
      let result = await fetch(
        "http://localhost:8000/api/product/" + props.match.params.id
      );
      result = await result.json();
      setData(result);
    }
    fetchData();
  }, [props.match.params.id]); // Or [] if effect doesn't need props or state

  return (
    <div>
      <Header />
      <h1>UpdateProduct Page</h1>
      <input type="text" defaultValue={data.name} /> <br />
      <br />
      <input type="text" defaultValue={data.price} /> <br />
      <br />
      <input type="text" defaultValue={data.description} /> <br />
      <br />
      <input type="file" defaultValue={data.file_path} /> <br />
      <br />
      <img
        style={{ width: 100 }}
        src={"http://localhost:8000/" + data.file_path}
      />
      <br />
      <br />
      <button className="btn btn-primary">Update</button>
    </div>
  );
}

export default withRouter(UpdateProduct);

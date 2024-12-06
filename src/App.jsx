import React, { useEffect, useState } from 'react';

const App = () => {

  const [value, setvalue] = useState([])

  const datafetch = () => {
    fetch("https://fakestoreapi.in/api/products").
      then(response => response.json())
      .then(data => setvalue(data.products))
      .catch(error => console.error(error));
  }

  useEffect(() => {
    datafetch()
  }, [])

  console.log(value)
  return (

    <>
      <div className="container bg-light">
        <div className="row" style={{ justifyContent: 'space-between', alignItems: 'center' }} >

          {value.map((e) => {
            return (
              <div class="card" style={{ width: "22rem", gap: "10px", height: "38rem", margin: '15px' }}>
                <img src={e.image} class="card-img-top" alt={e.title} />
                <div class="card-body">
                  <h5 class="card-title">{e.title}</h5>
                  <p class="card-text">{e.description.substring(0, 5)}</p>
                  <p class="card-text">{e.price}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>

    </>

  );
}

export default App;

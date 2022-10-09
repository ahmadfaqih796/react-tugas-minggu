import React, { useState } from 'react';

export default function App() {
  const [numOfRow, setNumOfRow] = useState(null);
  const [isSubmit, setIsSubmit] = useState(false);
  const [rows, setRows] = useState([]);

  const handleChange = (e) => {
    console.log(e.target.value);
    setNumOfRow(e.target.value);
    setIsSubmit(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let data = [];
    for (let i = 0; i < numOfRow; i++) {
      data.push(0);
    }
    setRows(data);
    setIsSubmit(true);
  };

  return (
    <div className="min-vh-100" style={{ padding: '20px' }}>
      <div className="container">
        <div className="row justify-content-between">
          <div className="col-auto">
            <h3>Tugas Minggu 7</h3>
          </div>
          <div className="col-auto">
            <form onSubmit={handleSubmit}>
              <div className="row">
                <div className="col-7">
                  <input
                    className="form-control"
                    name="numOfRow"
                    value={numOfRow}
                    type="number"
                    placeholder="enter number of rows"
                    onChange={handleChange}
                  />
                </div>
                <div className="col-5">
                  <button
                    type="submit"
                    className="btn btn-outline-primary"
                    disabled={numOfRow === null || numOfRow < 1}
                  >
                    Buat Tabel
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
        {rows && isSubmit && (
          <table className="mt-5 table">
            <thead>
              <tr className="text-center">
                <th scope="col">no</th>
                <th scope="col">name</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((el, index) => {
                return (
                  <tr
                    className="text-center"
                    key={index}
                    style={{
                      backgroundColor: index % 2 === 0 ? 'white' : 'lightGrey',
                    }}
                  >
                    <td scope="row">{index + 1}</td>
                    <td>Aku</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
}

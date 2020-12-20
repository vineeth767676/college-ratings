import React from "react";
import "./styles.css";
import { useState } from "react";

const colleges = {
  Engineering: [
    {name: "PES University", rating: "4/5" },
    {name: "REVA University", rating: "3.8/5"},
    {name: "BITM Bellary", rating: "1.8/5" }
  ],

  Medical: [
    {name: "VIMS Medical College",rating: "5/5"},
    {name: "St. John's Medical College",rating: "4.1/5"},
    {name: "JSS Medical College",rating: "3.8/5"}
  ],

  Aviation: [
    {name: "Cirrus Aviation Academy", rating: "4.3/5"},
    {name: "Bangalore Aviation Academy ",rating: "4/5"},
    {name: "Bradford Aviation Academy ",rating: "3.9/5"
    }
  ],

  Agriculture: [
    {name: "UAS Raichur",rating: "5/5"},
    {name: "UAHS Bangalore",rating: "4.8/5"},
    {name: "UAS Dharwad",rating: "4.2/5"}
  ]
};

export default function App() {
  const [selectedCollege, setCollege] = useState("Medical");
  function genreClickHandler(genre) {
    setCollege(genre);
  }
  return (
    <div className="App">
      <h1> 🎓Know about Colleges🔎 </h1>
      <p> 👇Select below to know more👇</p>

      <div>
        {Object.keys(colleges).map((genre) => (
          <button
            onClick={() => genreClickHandler(genre)}
            style={{
              cursor: "pointer",
              background: "#E5E7EB",
              borderRadius: "0.5rem",
              padding: "0.5rem  1rem",
              border: "1px solid black",
              margin: "1rem 0.3rem"
            }}
          >
            {genre}
          </button>
        ))}
      </div>
      <hr/>
      <div style={{ textAlign: "center" }}>
        <ul style={{ paddingInlineStart: "0" }}>
          {colleges[selectedCollege].map((college) => (
            <li
              key={college.name}
              style={{
                listStyle: "none",
                padding: "1rem",
                border: "1px solid",
                width: "97%",
                margin: "1rem 0rem",
                borderRadius: "0.5rem",
                
              }}
            >
              {" "}
              <div style={{ fontSize: "larger" }}> {college.name} </div>
              <div style={{ fontSize: "smaller" }}> {college.rating} </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

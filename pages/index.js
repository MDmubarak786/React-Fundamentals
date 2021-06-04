import axios from "axios";
import React, { useState, useRef, useEffect } from "react";
// `http://www.omdbapi.com/?t=${name}&apikey=58da2715`
const index = () => {
  const [name, setname] = useState("");
  const [movie, setmovie] = useState('');
  // const [image, setimage] = useState(null);
  // const [year, setyear] = useState(null);

  // const [newval, setnewval] = useState(null);
  // const number = useRef(null);
  const handleSumbit = (event) => {
    event.preventDefault();
    // console.log(number.current.value);
    axios
      .get(`https://api.github.com/users/${name}`)
      .then((res) => { setmovie(res.data); console.log(movie); });
    setname('');
    // number.current.value = null;
  };

  return (
    <div>
      <h1>React Form</h1>
      <form onSubmit={handleSumbit}>
        <label htmlFor="Name">Name</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setname(e.target.value)}
          placeholder="Name"
          autoFocus
        />
        {/* <label htmlFor="id">ID value</label>
        <input type="text" placeholder="Number" ref={number} /> */}
        <button type="submit">Submit</button>
      </form>
      <div>
        {movie.data && movie.data.map(values => {
          <ul>
            <li>{values.id}</li>
            <li>{values.Login}</li>
          </ul>
        })}
      </div>
      <div>
        {/* <h1>{movie}</h1> */}
        {/* {image && <img src={image} alt="Movie_poster" />} */}
        {/* <h2>{year}</h2> */}
        {/* {datavalues && datavalues.map((newvalues) => <ul>{newvalues.Title}</ul>)} */}
        {/* {newval && newval.map((newvales) => <ul>{newvales}</ul>)} */}
        {/* <ul>{newval && newval.map((values) => (<li>{values.Title}</li>))}</ul> */}
        {/* {newval &&
          newval.map(values => <li>{values.Title}</li>)} */}
        {/* {movie && movie.map((values, index) =>
        (
          <ul>
            <li key={index}>{values[1]}</li>
            <li key={index}>{values}</li>
          </ul>
        )
        )} */}
      </div>
    </div>
  );
};

export default index;
//  {
//    newvalues.Title;
//  }
//  {
//    newvalues.Year;
//  }
//  {
//    newvalues.Rated;
//  }
//  {
//    newvalues.Released;
//  }
//  {
//    newvalues.Runtime;
//  }

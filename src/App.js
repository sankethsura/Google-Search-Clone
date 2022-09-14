import "./App.css";
import React from "react";
import { useState } from "react";
import Search from "./SearchPage";
import Loading from "./Loding";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SearchPage2 from "./SearchPage2";
import { useEffect } from "react";

function App() {
  const [isLoading, setIsLoading] = useState(false);

  const apikey = "AIzaSyBHgEnsHIv1qvEcQ0qxYR1MnRNpWKjFqw8";
  const contextKey = "250239121eed5434b";
  const [data, setData] = useState(null);
  const [term, setTerm] = useState(null);

  useEffect(() => {
    // props.setIsLoading(true)
    const fetchData = async () => {
      fetch(
        `https://www.googleapis.com/customsearch/v1?key=${apikey}&cx=${contextKey}&q=${term}`
      )
        .then((response) => response.json())
        .then((result) => {
          setData(result);
        });
      // props.setIsLoading(false)
    };
    fetchData();
  }, [term]);

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route
            exact
            path="/"
            element={<Search setTerm={setTerm} term={term} />}
          />
          <Route path="/search" element={<SearchPage2 data={data} setTerm={setTerm} term={term} />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

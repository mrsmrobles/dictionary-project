import React, { useState } from "react";
import axios from "axios";
import "./Dictionary.css";
import Results from "./Results";
import Photos from "./Photos";

export default function Dictionary() {
  let [keyword, setKeyword] = useState("hello");
  let [results, setResults] = useState(null);
  let [loaded, setLoaded] = useState(false);
  let [photos, setPhotos] = useState(null);

  function handleDictionaryResponse(response) {
    setResults(response.data);
  }

  function handlePexelsResponse(response) {
    setPhotos(response.data.photos);
  }

  function search() {
    //api documentation: https://www.shecodes.io/learn/apis/dictionary
    let apiKey = "0afcd2ao9bb24495ta6dd7a01113764b";
    let apiUrl = `https://api.shecodes.io/dictionary/v1/define?word=${keyword}&key=${apiKey}`;
    axios.get(apiUrl).then(handleDictionaryResponse);

    let pexelsApiKey =
      "eMccf8IYBVZvkZ0XRjAxyxnY0yVrm0BFrmzZdw0IRLlp75VCXYcaH0nM";
    let pexelsApiUrl = `https://api.pexels.com/v1/search?query=${keyword}&per_page=9`;
    let headers = { Authorization: `${pexelsApiKey}` };
    axios.get(pexelsApiUrl, { headers: headers }).then(handlePexelsResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }

  function load() {
    setLoaded(true);
    search();
  }

  if (loaded) {
    return (
      <div className="Dictionary">
        <section>
          <form onSubmit={handleSubmit}>
            <input
              type="search"
              autoFocus={true}
              placeholder="Search for a word..."
              onChange={handleKeywordChange}
            />
          </form>
          <div className="hint">ex: sunset, book, swimming...</div>
          <Results results={results} />
          <Photos photos={photos} />
        </section>
      </div>
    );
  } else {
    load();
    return "Loading..";
  }
}

import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Search = () => {
  const [term, setTerm] = useState('programming');
  const [results, setResults] = useState([]);
  
  useEffect(() => {
    const searchWikiApi = async () => {
      const { data } = await axios.get('https://en.wikipedia.org/w/api.php', {
        params: {
          action: 'query',
          list: 'search',
          origin: '*',
          format: 'json',
          srsearch: term
        }
      });

      setResults(data.query.search);
    };

    // First time rendering component
    if (term && !results.length) {
      searchWikiApi();
    }
    else {
      // Setting a timer to Search after 500ms
      const timeoutId = setTimeout(() => {
        if (term) { searchWikiApi(); }
      }, 500);
  
      // ONLY a FUNCTION can be call by an UseEffect
      // Cancelling the previous timeout
      return () => {
        clearTimeout(timeoutId);
      }
    }

  }, [term]);

  const renderedResults = results.map(result => {
    return (
      <div key={result.pageid} className="item">
        <div className="right floated content">
          <a 
            className="ui button"
            href={`https://en.wikipedia.org?curid=${result.pageid}`}
          >
            Read!
          </a>
        </div>
        <div className="content">
          <div className="header">
            {result.title}
          </div>
          <span dangerouslySetInnerHTML={{ __html: result.snippet }}></span>
        </div>
      </div>
    );
  })

  return (
    <div>
      <div className="ui form">
        <div className="field">
          <label>Enter search term</label>
          <input 
            className="input" 
            type="text"
            value={term}
            onChange={e => setTerm(e.target.value)}
          />
        </div>
      </div>
      <div className="ui celled list">
        {renderedResults}
      </div>
    </div>
  );
}

export default Search;
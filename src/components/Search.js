import React, { useState, useEffect } from "react";
import axios from "axios";
const Search = () => {
  const [term, setTerm] = useState("");
  const [list, setList] = useState([]);
  console.log("term:", term);

  useEffect(() => {
    let clearTimeOutRef;
    if (term) {
      clearTimeOutRef = setTimeout(async () => {
        const { data } = await axios.get("https://en.wikipedia.org/w/api.php", {
          params: {
            srsearch: term,
            origin: "*",
            action: "query",
            format: "json",
            limit: 15,
            list: "search",
          },
        });
        setList(data.query.search);
      }, 500);
    }
    return () => {
      clearTimeout(clearTimeOutRef);
    };
  }, [term]);

  const renderList = list.map(({ pageid, title, snippet }) => {
    return (
      <div className="item" key={pageid}>
        <div className="content">
          <a className="header">{title}</a>
          <div
            className="description"
            dangerouslySetInnerHTML={{ __html: snippet }}
          ></div>
        </div>
      </div>
    );
  });
  return (
    <div className="ui search">
      <div className="ui icon input massive">
        <input
          className="prompt"
          type="text"
          placeholder="Wikipedia search"
          onChange={(e) => {
            setTerm(e.target.value);
          }}
        />
        <i className="search icon"></i>
      </div>

      <div
        className="ui relaxed divided list"
        style={{ width: "500px", margin: "40px auto" }}
      >
        {renderList}
      </div>
    </div>
  );
};
export default Search;

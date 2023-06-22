import React from "react";

function Search({ setSearchTerm }) {
  const handleInputChange = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <div className="ui large fluid icon input">
      <input
        type="text"
        placeholder="Search your Recent Transactions"
        onChange={handleInputChange}
      />
      <i className="circular search link icon"></i>
    </div>
  );
}

export default Search;

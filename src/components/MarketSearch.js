import React from 'react'

function MarketSearch() {
  return (
    <div>
      <h1>Search for a Entity</h1>
      <div className="stock_input">
        <form>
          <input type="ticker" placeholder="Search for a Stock" />
        </form>
        <button>Search</button>
      </div>
    </div>
  );
}

export default MarketSearch

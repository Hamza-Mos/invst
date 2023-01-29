import React from 'react'

function Market() {
  return (
    <div>
      <div className="stock_input">
            <form>
              <input type="ticker" placeholder="Search for a Stock" />
            </form>
            <button>Search</button>
      </ div>
      
    </div>
  )
}

export default Market

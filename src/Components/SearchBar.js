import React from "react";

export default function SearchBar({filterText, inStockOnly, onFilterTextChange }) {
  return (
    <form>
      <input type="text" value={filterText} placeholder="Search..." onChange={e => onFilterTextChange(e.target.value)} />
      <label>
        <input type="checkbox" checked={inStockOnly} /> Only show products in stock
      </label>
    </form>
  );
}

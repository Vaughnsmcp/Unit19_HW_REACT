import React from "react";
import SearchBox from "./SearchBox.js";
function Nav({ handleSearchChange }) {
  return (
    <nav className="navbar navbar-expand">
      <div className="navbar-collapse row justify-content-center" id="navbarNav">
        <SearchBox handleSearchChange={handleSearchChange} />
      </div>
    </nav>
  );
}
export default Nav;

import React from "react";
import SearchBar from "@components/SearchBar/Search";
import Meeting from "@components/Meeting/Meeting";
import NavBar from "@components/NavBar/NavBar";

export default function () {
  return (
    <div>
      <h1 className="Title">Schedule</h1>
      <NavBar />
      <SearchBar />
      <Meeting />
    </div>
  );
}

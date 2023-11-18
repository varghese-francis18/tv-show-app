import React, { useState } from "react";
import { Search as SearchIcon } from "react-bootstrap-icons";
import s from "./style.module.css";

const SearchBar = ({ onSubmit }) => {
  const [value, setValue] = useState("");

  function submit(e) {
    if (e.key === "Enter" && e.target.value.trim() !== "") {
      onSubmit(e.target.value);
      setValue("");
    }
  }

  function handleChange(e) {
    setValue(e.target.value);
  }

  return (
    <>
      <input
        className={s.input}
        onChange={handleChange}
        type="text"
        placeholder="Search a TV show..."
        onKeyUp={submit}
        value={value}
      />
      <SearchIcon size={27} className={s.icon} />
    </>
  );
};

export default SearchBar;

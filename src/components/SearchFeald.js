import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { faCaretUp } from "@fortawesome/free-solid-svg-icons";
// import { faXmark} from '@fortawesome/free-regular-svg-icons'
import "../assets/style/searchfeald.css";

function SearchFeald() {
  const filterList = [
    "Movies",
    "TV Shows",
    "People",
    "Collections",
    "Companies",
    "Keywords",
  ];

  const [filterTag, setFilterTag] = useState(`${filterList[0]}`);
  const [filterActive, setFilterActive] = useState(false);
  const [searchActive, setSearchActive] = useState(false);
  const [searcInput, setSearchInput] = useState('')

  const filterSelect = (e) => {
    setFilterTag(`${filterList[e.target.dataset.index]}`);
  };

  const toggleFilter = () => {
    if (filterActive == false) {
      setFilterActive(true);
    } else {
      setFilterActive(false);
    }
  };

  const inputSearch = (e) => {
    setSearchInput(e.target.value)
    searchToggle()
    console.log(e.target.value)
  }

  const searchToggle = () => {
    if (!searcInput == '')
    {
      setSearchActive(true)
    }
    else if (searcInput == '')
    {
      setSearchActive(false)
    }
  };

  const handelform = (e) => {
    e.preventDefault()
  }

  return (
    <>
      <form className="search_area" onSubmit={handelform}>
        <div className="search_filter" onClick={toggleFilter}>
          <p className="search_filter_tag">{filterTag}</p>
          <FontAwesomeIcon
            className="search_filter_icon"
            style={{
              transform: `${
                filterActive ? "rotate(180deg)" : "rotate(0deg)"
              }`,
            }}
            icon={faCaretUp}
          />
        </div>

        <input type="text" value={searcInput} onChange={inputSearch} />
        <FontAwesomeIcon
          className={`${searchActive?"search_cancel, search_cancel_active":"search_cancel"}`}
          icon={faXmark} />
      </form>

      <div
        className="filtertick"
        style={{ display: `${filterActive ? "block" : "none"}` }}
      >
        <ul>
          {filterList.map((list, index) => (
            <li onClick={filterSelect} key={index} data-index={index}>
              {list}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default SearchFeald;

import React, { createContext, useEffect, useState } from "react";

const defaultValues = {
  beers: [],
  originalBeers: [],
  sortBy: "Sort By",
  pageSize: 25,
  searchInput: "",

  currentPage: 1,

  handleAddBeers: () => {},
  handlePageSizeChange: () => {},
  handleSortBy: () => {},
  handleSearchBar: () => {},
  setPage: () => {},
};

export const BeersContext = createContext(defaultValues);

export const BeersContextProvider = (props) => {
  const [beers, setBeers] = useState([]);
  const [originalBeers, setOriginalBeers] = useState([]);
  const [pageSize, setPageSize] = useState(25);
  const [sortBy, setSortBy] = useState("Sort By");
  const [searchInput, setSearchInput] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  // const [suggestions, setSuggestions] = useState([]);

  const handleSearchBar = (value) => {
    setSearchInput(value);

    if (value.trim() === "") {
      // If the search input is empty, reset to show all beers
      setBeers(originalBeers);
    } else {
      // Filter the beers based on the search input (case-insensitive)
      const searchedBeers = beers.filter((beer) =>
        beer.name.toLowerCase().includes(value.trim().toLowerCase())
      );
      setBeers(searchedBeers);
    }
  };
  // In summary, the handleSearchBar function updates the search input state (searchInput)
  //  and filters the list of beers (beers) based on the search input.
  //  If the search input becomes empty, it resets the list to show all the beers again. Otherwise,
  // it filters the beers to display only those whose names contain the search input (case-insensitive).

  const handleAddBeers = (beersResults) => {
    setBeers(beersResults);
    setOriginalBeers(beersResults);
  };
  useEffect(() => {
    setBeers([]);
  }, []);
  const setPage = (value) => {
    console.log("Setting current page:", value);
    setCurrentPage(value);
  };
  const handlePageSizeChange = (value) => {
    const parsedValue = parseInt(value);
    console.log(parsedValue);
    setPageSize(parsedValue);
    // setCurrentPage(parsedValue);
    setCurrentPage(1);
    // setCurrentPage(1);
    if (parsedValue === 5) {
      originalBeers.slice(0, 5);
      setBeers(originalBeers);
    } else if (parsedValue === 10) {
      originalBeers.slice(0, 10);
      setBeers(originalBeers);
    } else if (parsedValue === 20) {
      originalBeers.slice(0, 20);
      setBeers(originalBeers);
    } else {
      setBeers(originalBeers);
    }
  };
  const handleSortBy = (value) => {
    // const value = e.target.value;
    setSortBy(value);

    if (value === "name") {
      const sortedBeers = [...beers].sort((beer1, beer2) =>
        beer1.name.localeCompare(beer2.name)
      );
      setBeers(sortedBeers);
    }
    if (value === "abv-asc") {
      const sortedBeers = [...beers].sort(
        (beer1, beer2) => beer1.abv - beer2.abv
      );
      setBeers(sortedBeers);
    }
    if (value === "abv-desc") {
      const sortedBeers = [...beers].sort(
        (beer1, beer2) => beer2.abv - beer1.abv
      );
      setBeers(sortedBeers);
    }
    if (value === "ibu-asc") {
      const sortedBeers = [...beers].sort(
        (beer1, beer2) => beer1.ibu - beer2.ibu
      );
      setBeers(sortedBeers);
    }
    if (value === "ibu-desc") {
      const sortedBeers = [...beers].sort(
        (beer1, beer2) => beer2.ibu - beer1.ibu
      );
      setBeers(sortedBeers);
    }
  };

  return (
    <BeersContext.Provider
      value={{
        beers: beers,
        originalBeers: originalBeers,
        pageSize: pageSize,
        sortBy: sortBy,
        searchInput: searchInput,
        handleAddBeers: handleAddBeers,
        handlePageSizeChange: handlePageSizeChange,
        handleSortBy: handleSortBy,
        handleSearchBar: handleSearchBar,
        currentPage: currentPage,
        setPage: setPage,
      }}
    >
      {props.children}
    </BeersContext.Provider>
  );
};

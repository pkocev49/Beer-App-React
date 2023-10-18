import { useContext, useEffect, useState } from "react";
import "./Beers.css";
import BeerCard from "../../Components/BeerCard/BeerCard";
import { BeersContext } from "../../BeersContext";
import { makeApiCall } from "../../utils/fetchBeers";
import { Pagination } from "@mui/material";
import { Box } from "@mui/material";

const Beers = () => {
  const [errorMessage, setErrorMessage] = useState("");
  const [loading, setLoading] = useState(false); // Add a loading state

  // const [currentPage, setCurrentPage] = useState(1);

  const {
    beers,
    pageSize,
    sortBy,
    handlePageSizeChange,
    handleAddBeers,
    handleSortBy,
    currentPage,
    setPage,
  } = useContext(BeersContext);
  const URL = `https://api.punkapi.com/v2/beers`;
  const perPage = pageSize;

  useEffect(() => {
    if (beers.length === 0) {
      setLoading(true);
      makeApiCall(URL)
        .then((results) => {
          handleAddBeers(results);
          setLoading(false);
        })
        .catch((error) => {
          setErrorMessage(error);
          console.log(error);
          setLoading(false);
        });
    }
  }, [beers]);

  const indexOfLastBeer = currentPage * perPage;
  const indexOfFirstPage = indexOfLastBeer - perPage;
  const currentBeers = beers.slice(indexOfFirstPage, indexOfLastBeer);

  const paginate = (e, value) => {
    console.log("Paginate called with value:", value);
    setPage(value);
    window.scroll({ top: "1800px", behavior: "smooth" });
  };
  if (loading) {
    return (
      <div className="body">
        <div className="loader"></div>
      </div>
    );
  }

  return (
    <>
      <div className="selectDiv">
        <select
          className="page-size-select" // Add custom class for Page Size select
          name="page-size"
          onChange={(e) => handlePageSizeChange(e.target.value)}
          value={pageSize}
        >
          <option value={25}>Show All</option>
          <option value={5}>Show 5</option>
          <option value={10}>Show 10</option>
          <option value={20}>Show 20</option>
        </select>

        <select
          className="sort-by-select" // Add custom class for Sort By select
          name="sort-by"
          onChange={(e) => handleSortBy(e.target.value)}
          value={sortBy}
        >
          <optgroup label="Sort By">
            <option disabled hidden>
              Sort By
            </option>
          </optgroup>
          <option value="name">name</option>
          <option value="abv-asc">Alcohol % asc</option>
          <option value="abv-desc">Alcohol % desc</option>
          <option value="ibu-asc">Bitterness asc</option>
          <option value="ibu-desc">Bitterness desc</option>
        </select>
      </div>
      <div className="beers">
        {currentBeers.map((beer, index) => (
          <BeerCard key={index} beer={beer} />
        ))}
      </div>

      <Box
        sx={{
          display: "flex",
          flexWrap: "nowrap",
          justifyContent: "center",
          mt: "50px",
          mb: "50px",
        }}
      >
        <Pagination
          className="custom-pagination"
          count={Math.ceil(beers.length / perPage)}
          page={currentPage}
          onChange={paginate}
          variant="outlined"
          shape="rounded"
        />
      </Box>
    </>
  );
};

export default Beers;

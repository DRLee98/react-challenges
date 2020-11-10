/* eslint-disable import/no-anonymous-default-export */
import React, { useState } from "react";
import SearchPresenter from "./SearchPresenter";
import { moviesApi, tvApi } from "../../api";

const SearchContainer = () => {
  const [data, setData] = useState({
    movieResults: [],
    tvResults: [],
  });
  const [view, setView] = useState({
    movie: true,
    tv: true,
  });
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();

  const handleSubmit = (event) => {
    event.preventDefault();
    if (search !== "") {
      searchByTerm();
    }
  };

  const updateTerm = (event) => {
    const {
      target: { value },
    } = event;
    setSearch(value);
  };

  const searchByTerm = async () => {
    setLoading(true);
    try {
      const {
        data: { results: movieResults },
      } = await moviesApi.search(search);
      const {
        data: { results: tvResults },
      } = await tvApi.search(search);
      setData({
        movieResults: [...data.movieResults, ...movieResults],
        tvResults: [...data.tvResults, ...tvResults],
      });
    } catch {
      setError("Can't find results.");
    } finally {
      setLoading(false);
    }
  };

  const viewMode = {
    movieView: () => setView({ ...view, movie: view.movie ? false : true }),
    tvView: () => setView({ ...view, tv: view.tv ? false : true }),
  };

  return (
    <SearchPresenter
      searchTerm={search}
      loading={loading}
      error={error}
      handleSubmit={handleSubmit}
      updateTerm={updateTerm}
      viewFunc={viewMode}
      view={view}
      {...data}
    />
  );
};

export default SearchContainer;

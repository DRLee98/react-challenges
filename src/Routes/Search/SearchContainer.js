/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable import/no-anonymous-default-export */
import React, { useEffect, useState } from "react";
import SearchPresenter from "./SearchPresenter";
import { moviesApi, tvApi } from "../../api";

const SearchContainer = ({
  match: {
    params: { word },
  },
}) => {
  const [data, setData] = useState({
    movieResults: [],
    tvResults: [],
  });
  const [view, setView] = useState({
    movie: true,
    tv: true,
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();

  const searchByTerm = async () => {
    setLoading(true);
    try {
      const {
        data: { results: movieResults },
      } = await moviesApi.search(word);
      const {
        data: { results: tvResults },
      } = await tvApi.search(word);
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

  useEffect(() => {
    searchByTerm();
  }, [word]);

  return (
    <SearchPresenter
      loading={loading}
      error={error}
      viewFunc={viewMode}
      view={view}
      {...data}
    />
  );
};

export default SearchContainer;

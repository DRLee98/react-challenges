/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable import/no-anonymous-default-export */
import React, { useState, useEffect } from "react";
import DetailPresenter from "./DetailPresenter";
import { moviesApi, tvApi } from "../../api";

const DetailContainer = ({
  match: {
    params: { id },
  },
}) => {
  const [data, setData] = useState({
    result: null,
    credits: null,
  });
  const [view, setView] = useState({
    cast: true,
    season: true,
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState();

  let {
    location: { hash },
  } = window;

  const isMovie = hash.includes("movie");
  const parsedId = parseInt(id);
  if (isNaN(parsedId)) {
    hash = "/";
  }

  let result = null;
  let credits = null;
  const LoadData = async () => {
    try {
      if (isMovie) {
        ({ data: result } = await moviesApi.movieDetail(parsedId));
        ({ data: credits } = await moviesApi.movieCredits(parsedId));
      } else {
        ({ data: result } = await tvApi.showDetail(parsedId));
        ({ data: credits } = await tvApi.showCredits(parsedId));
      }
    } catch {
      setError("Can't find anything.");
    } finally {
      setData({ result, credits });
      setLoading(false);
    }
  };

  const viewMode = {
    castView: () => setView({ ...view, cast: view.cast ? false : true }),
    seasonView: () => setView({ ...view, season: view.season ? false : true }),
  };

  useEffect(() => {
    LoadData();
  }, []);

  return (
    <DetailPresenter
      error={error}
      loading={loading}
      viewFunc={viewMode}
      view={view}
      {...data}
    />
  );
};

export default DetailContainer;

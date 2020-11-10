/* eslint-disable no-use-before-define */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import PersonPresenter from "./PersonPresenter";
import { personApi } from "api";

const PersonContainer = ({
  match: {
    params: { id },
  },
}) => {
  const [data, setData] = useState({
    person: null,
    movies: null,
    shows: null,
  });
  const [view, setView] = useState({
    movie: true,
    tv: true,
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState();

  const LoadData = async () => {
    try {
      const { data: person } = await personApi.personDetail(id);
      const { data: movies } = await personApi.personMovies(id);
      const { data: shows } = await personApi.personShows(id);
      setData({
        person,
        movies,
        shows,
      });
    } catch {
      setError("Can't find person information.");
    } finally {
      setLoading(false);
    }
  };

  const viewMode = {
    movieView: () => setView({ ...view, movie: view.movie ? false : true }),
    tvView: () => setView({ ...view, tv: view.tv ? false : true }),
  };

  useEffect(() => {
    LoadData();
  }, []);
  console.log({ ...data });
  return (
    <PersonPresenter
      loading={loading}
      error={error}
      viewFunc={viewMode}
      view={view}
      {...data}
    />
  );
};

export default PersonContainer;

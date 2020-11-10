/* eslint-disable no-use-before-define */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import PersonPresenter from "./PersonPresenter";
import { personDetail, personCredits } from "api";

const PersonContainer = ({
  match: {
    params: { id },
  },
}) => {
  const [data, setData] = useState({
    person: null,
    credits: null,
  });
  const [view, setView] = useState({
    movie: true,
    tv: true,
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState();

  const LoadData = async () => {
    try {
      const { data: person } = await personDetail(id);
      const { data: credits } = await personCredits(id);
      setData({
        person,
        credits,
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

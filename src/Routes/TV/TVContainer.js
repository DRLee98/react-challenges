/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable import/no-anonymous-default-export */
import React, { useState, useEffect } from "react";
import TVPresenter from "./TVPresenter";
import { tvApi } from "../../api";

const TVContainer = () => {
  const [data, setData] = useState({
    topRated: [],
    popular: [],
    airingToday: [],
  });
  const [page, setPage] = useState({
    topRated: 1,
    popular: 1,
    airingToday: 1,
  });
  const [view, setView] = useState({
    topRated: true,
    popular: true,
    airingToday: true,
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState();

  const LoadData = async () => {
    try {
      const {
        data: { results: topRated },
      } = await tvApi.topRated(page.topRated);
      const {
        data: { results: popular },
      } = await tvApi.popular(page.popular);
      const {
        data: { results: airingToday },
      } = await tvApi.airingToday(page.airingToday);
      setData({
        topRated: [...data.topRated, ...topRated],
        popular: [...data.popular, ...popular],
        airingToday: [...data.airingToday, ...airingToday],
      });
    } catch {
      setError("Can't find movie information.");
    } finally {
      setLoading(false);
    }
  };

  const nextPage = {
    topRatedPage: () => setPage({ ...page, topRated: page.topRated + 1 }),
    popularPage: () => setPage({ ...page, popular: page.popular + 1 }),
    airingTodayPage: () =>
      setPage({ ...page, airingToday: page.airingToday + 1 }),
  };

  const viewMode = {
    topRatedView: () =>
      setView({ ...view, topRated: view.topRated ? false : true }),
    popularView: () =>
      setView({ ...view, popular: view.popular ? false : true }),
    airingToday: () =>
      setView({ ...view, airingToday: view.airingToday ? false : true }),
  };

  useEffect(() => {
    LoadData();
  }, [page]);

  return (
    <TVPresenter
      loading={loading}
      error={error}
      pageFunc={nextPage}
      viewFunc={viewMode}
      view={view}
      {...data}
    />
  );
};

export default TVContainer;

/* eslint-disable import/no-anonymous-default-export */
import React, { useState, useEffect } from "react";
import HomePresenter from "./HomePresenter";
import { moviesApi } from "api";

const HomeContainer = () => {
  const [data, setData] = useState({
    nowPlaying: [],
    upcoming: [],
    popular: [],
  });
  const [page, setPage] = useState({
    nowPlaying: 1,
    upcoming: 1,
    popular: 1,
  });
  const [view, setView] = useState({
    nowPlaying: true,
    upcoming: true,
    popular: true,
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState();

  const LoadData = async () => {
    try {
      const {
        data: { results: nowPlaying },
      } = await moviesApi.nowPlaying(page.nowPlaying);
      const {
        data: { results: upcoming },
      } = await moviesApi.upcoming(page.upcoming);
      const {
        data: { results: popular },
      } = await moviesApi.popular(page.popular);
      setData({
        nowPlaying: [...data.nowPlaying, ...nowPlaying],
        upcoming: [...data.upcoming, ...upcoming],
        popular: [...data.popular, ...popular],
      });
    } catch {
      setError("Can't find movie information.");
    } finally {
      setLoading(false);
    }
  };

  const nextPage = {
    nowPlayingPage: () => setPage({ ...page, nowPlaying: page.nowPlaying + 1 }),
    upcomingPage: () => setPage({ ...page, upcoming: page.upcoming + 1 }),
    popularPage: () => setPage({ ...page, popular: page.popular + 1 }),
  };

  const viewMode = {
    nowPlayingView: () =>
      setView({ ...view, nowPlaying: view.nowPlaying ? false : true }),
    upcomingView: () =>
      setView({ ...view, upcoming: view.upcoming ? false : true }),
    popularView: () =>
      setView({ ...view, popular: view.popular ? false : true }),
  };

  useEffect(() => {
    LoadData();
  }, [page]);

  return (
    <HomePresenter
      loading={loading}
      error={error}
      pageFunc={nextPage}
      viewFunc={viewMode}
      view={view}
      {...data}
    />
  );
};

export default HomeContainer;

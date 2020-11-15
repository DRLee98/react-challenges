/* eslint-disable react-hooks/exhaustive-deps */
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

  const LoadNowPlaying = async () => {
    const {
      data: { results: nowPlaying },
    } = await moviesApi.nowPlaying(page.nowPlaying);
    setData({
      ...data,
      nowPlaying: [...data.nowPlaying, ...nowPlaying]
    });
  }

  const LoadUpcoming = async () => {
    const {
      data: { results: upcoming },
    } = await moviesApi.upcoming(page.upcoming);
    setData({
      ...data,
      upcoming: [...data.upcoming, ...upcoming]
    });
  }

  const LoadPopular = async () => {
    const {
      data: { results: popular },
    } = await moviesApi.popular(page.popular);
    setData({
      ...data,
      popular: [...data.popular, ...popular]
    });
  }

  const nextPage = {
    nowPlayingPage: () => setPage({ ...page, nowPlaying: page.nowPlaying + 1 }),
    upcomingPage: () => setPage({ ...page, upcoming: page.upcoming + 1 }),
    popularPage: () => setPage({ ...page, popular: page.popular + 1 }),
  };

  const viewMode = {
    nowPlayingView: () =>
      setView({ ...view, nowPlaying: !view.nowPlaying }),
    upcomingView: () =>
      setView({ ...view, upcoming: !view.upcoming }),
    popularView: () =>
      setView({ ...view, popular: !view.popular }),
  };

  useEffect(() => {
    LoadData();
  }, []);

  useEffect(() => {
    LoadNowPlaying();
  }, [page.nowPlaying]);

  useEffect(() => {
    LoadUpcoming();
  }, [page.upcoming]);

  useEffect(() => {
    LoadPopular();
  }, [page.popular]);

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

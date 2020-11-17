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

  const [targetData, setTargetData] = useState();

  const LoadData = async () => {
    try {
      LoadPages(targetData);
    } catch {
      setError("Can't find movie information.");
    } finally {
      setLoading(false);
    }
  };

  const LoadPages = async (target) => {
    const {
      data: { results: nowPlaying },
    } = await moviesApi.nowPlaying(page.nowPlaying);
    const {
      data: { results: upcoming },
    } = await moviesApi.upcoming(page.upcoming);
    const {
      data: { results: popular },
    } = await moviesApi.popular(page.popular);
    switch (target) {
      case 0:
        return setData({
          ...data,
          nowPlaying: [...data.nowPlaying, ...nowPlaying],
        });
      case 1:
        return setData({
          ...data,
          upcoming: [...data.upcoming, ...upcoming],
        });
      case 2:
        return setData({
          ...data,
          popular: [...data.popular, ...popular],
        });
      default:
        return setData({
          nowPlaying: [...data.nowPlaying, ...nowPlaying],
          upcoming: [...data.upcoming, ...upcoming],
          popular: [...data.popular, ...popular],
        });
    }
  };

  const nextPage = {
    nowPlayingPage: () => {
      setTargetData(0);
      setPage({ ...page, nowPlaying: page.nowPlaying + 1 });
    },
    upcomingPage: () => {
      setTargetData(1);
      setPage({ ...page, upcoming: page.upcoming + 1 });
    },
    popularPage: () => {
      setTargetData(2);
      setPage({ ...page, popular: page.popular + 1 });
    },
  };

  const viewMode = {
    nowPlayingView: () => setView({ ...view, nowPlaying: !view.nowPlaying }),
    upcomingView: () => setView({ ...view, upcoming: !view.upcoming }),
    popularView: () => setView({ ...view, popular: !view.popular }),
  };

  useEffect(() => {
    LoadData();
  }, []);

  useEffect(() => {
    LoadPages(targetData);
  }, [page]);

  return (
    <HomePresenter loading={loading} error={error} pageFunc={nextPage} viewFunc={viewMode} view={view} {...data} />
  );
};

export default HomeContainer;

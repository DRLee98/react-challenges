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
      data: { results: topRated },
    } = await tvApi.topRated(page.topRated);
    const {
      data: { results: popular },
    } = await tvApi.popular(page.popular);
    const {
      data: { results: airingToday },
    } = await tvApi.airingToday(page.airingToday);
    switch (target) {
      case 0:
        return setData({
          ...data,
          topRated: [...data.topRated, ...topRated],
        });
      case 1:
        return setData({
          ...data,
          popular: [...data.popular, ...popular],
        });
      case 2:
        return setData({
          ...data,
          airingToday: [...data.airingToday, ...airingToday],
        });
      default:
        return setData({
          topRated: [...data.topRated, ...topRated],
          popular: [...data.popular, ...popular],
          airingToday: [...data.airingToday, ...airingToday],
        });
    }
  };

  const nextPage = {
    topRatedPage: () => {
      setTargetData(0);
      setPage({ ...page, topRated: page.topRated + 1 });
    },
    popularPage: () => {
      setTargetData(1);
      setPage({ ...page, popular: page.popular + 1 });
    },
    airingTodayPage: () => {
      setTargetData(2);
      setPage({ ...page, airingToday: page.airingToday + 1 });
    },
  };

  const viewMode = {
    topRatedView: () => setView({ ...view, topRated: !view.topRated }),
    popularView: () => setView({ ...view, popular: !view.popular }),
    airingTodayView: () => setView({ ...view, airingToday: !view.airingToday }),
  };

  useEffect(() => {
    LoadData();
  }, []);

  useEffect(() => {
    LoadPages(targetData);
  }, [page]);

  return <TVPresenter loading={loading} error={error} pageFunc={nextPage} viewFunc={viewMode} view={view} {...data} />;
};

export default TVContainer;

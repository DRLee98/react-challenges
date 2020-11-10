/* eslint-disable import/no-anonymous-default-export */
import React, { useState, useEffect } from "react";
import PersonPresenter from "./PersonPresenter";
import { person } from "api";

const PersonContainer = ({
  match: {
    params: { id },
  },
}) => {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState();

  const LoadData = async () => {
    try {
      const { data } = await person(id);
      setData(data);
    } catch {
      setError("Can't find person information.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    LoadData();
  }, []);

  return <PersonPresenter loading={loading} error={error} {...data} />;
};

export default PersonContainer;

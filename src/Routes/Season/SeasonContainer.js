/* eslint-disable import/no-anonymous-default-export */
import React from "react";
import SeasonPresenter from "./SeasonPresenter";
import { tvApi } from "../../api";

export default class extends React.Component {
  state = {
    data: null,
    error: null,
    loading: true,
  };

  async componentDidMount() {
    const {
      match: {
        params: { id, season },
      },
      history: { push },
    } = this.props;
    const parsedId = parseInt(id);
    const parsedSeason = parseInt(season);
    if (isNaN(parsedId) || isNaN(parsedSeason)) {
      return push("/");
    }
    try {
      const { data } = await tvApi.seasonDetail(id, season);
      this.setState({ data });
    } catch {
      this.setState({ error: "Can't find collection." });
    } finally {
      this.setState({ loading: false });
    }
  }
  render() {
    return <SeasonPresenter {...this.state} />;
  }
}

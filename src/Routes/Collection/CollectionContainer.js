/* eslint-disable import/no-anonymous-default-export */
import React from "react";
import CollectionPresenter from "./CollectionPresenter";
import { collection } from "../../api";

export default class extends React.Component {
  state = {
    data: null,
    error: null,
    loading: true,
  };

  async componentDidMount() {
    const {
      match: {
        params: { id },
      },
      history: { push },
    } = this.props;
    const parsedId = parseInt(id);
    if (isNaN(parsedId)) {
      return push("/");
    }
    try {
      const { data } = await collection(id);
      this.setState({ data });
    } catch {
      this.setState({ error: "Can't find collection." });
    } finally {
      this.setState({ loading: false });
    }
  }

  render() {
    return <CollectionPresenter {...this.state} />;
  }
}

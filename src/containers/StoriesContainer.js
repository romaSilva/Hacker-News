import React, { useEffect, useState, Fragment } from "react";
import { getStoryIds } from "../services/hnApi";
import Story from "../components/Story";
import {
  GlobalStyle,
  StoriesContainerWrapper,
} from "../styles/StoriesContainerStyles";

const StoriesContainer = () => {
  const [storyIds, setStoryIds] = useState([]);

  useEffect(() => {
    getStoryIds().then((res) => setStoryIds(res.data));
  }, []);

  return (
    <Fragment>
      <GlobalStyle />
      <StoriesContainerWrapper data-test-id="stories-container">
        <h1>Hacker News Stories</h1>
        {storyIds.map((id) => (
          <Story key={id} storyId={id} />
        ))}
      </StoriesContainerWrapper>
    </Fragment>
  );
};

export default StoriesContainer;

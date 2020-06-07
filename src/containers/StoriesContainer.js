import React, { useEffect, useState, useMemo, Fragment } from "react";
import { getStoryIds } from "../services/hnApi";
import Story from "../components/Story";
import {
  GlobalStyle,
  StoriesContainerWrapper,
} from "../styles/StoriesContainerStyles";
import { useInfiniteScroll } from "../hooks/useInfiniteScroll";

const StoriesContainer = () => {
  const { count } = useInfiniteScroll();
  const [storyIds, setStoryIds] = useState([]);

  useEffect(() => {
    getStoryIds().then((res) => setStoryIds(res.data));
  }, []);

  return (
    <Fragment>
      <GlobalStyle />
      <StoriesContainerWrapper data-test-id="stories-container">
        <h1>Hacker News Stories</h1>
        {storyIds.slice(0, count).map((id) => (
          <Story key={id} storyId={id} />
        ))}
      </StoriesContainerWrapper>
    </Fragment>
  );
};

export default StoriesContainer;

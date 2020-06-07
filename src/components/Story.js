import React, { useState, useEffect } from "react";
import { getStory } from "../services/hnApi";
import { selectFields } from "../utils/selectFields";
import {
  StoryWrapper,
  StoryTitle,
  StoryMeta,
  StoryMetaElement,
} from "../styles/StoryStyles";

const Story = ({ storyId }) => {
  const [story, setStory] = useState({});

  useEffect(() => {
    getStory(storyId).then(
      ({ data }) => data && data.url && setStory(selectFields(data))
    );
  }, []);

  return story && story.url ? (
    <StoryWrapper data-testid="story">
      <StoryTitle>
        <a href={story.url}>{story.title}</a>
      </StoryTitle>
      <StoryMeta>
        <span className="story__by" data-testid="story-by">
          <StoryMetaElement color="black">By: </StoryMetaElement>
          {story.by}
        </span>
        <span className="story__time" data-testid="story-time">
          <StoryMetaElement color="black">Posted: </StoryMetaElement>
          {story.time}
        </span>
      </StoryMeta>
    </StoryWrapper>
  ) : null;
};

export default Story;

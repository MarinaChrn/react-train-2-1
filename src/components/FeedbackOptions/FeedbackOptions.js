import PropTypes from "prop-types";
import {
  FeedbackContainer,
  FeedbackOption,
  FeedbackTitle,
  OptionButton,
  StyledFeedbackOptions,
} from "./FeedbackOptions.styled";

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <FeedbackContainer>
      <FeedbackTitle>Please leave feedback</FeedbackTitle>
      <StyledFeedbackOptions>
        {options.map((option, index) => (
          <FeedbackOption key={index}>
            <OptionButton onClick={(evt) => onLeaveFeedback(option)}>
              {option}
            </OptionButton>
          </FeedbackOption>
        ))}
      </StyledFeedbackOptions>
    </FeedbackContainer>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.array.isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};

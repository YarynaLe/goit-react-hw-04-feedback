import {
  FeedbackButtonList,
  FeedbackButtonListItem,
} from './FeedbackOptions.styled.jsx';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <FeedbackButtonList>
      {options.map(option => {
        return (
          <FeedbackButtonListItem
            key={option}
            type="button"
            onClick={() => onLeaveFeedback(option)}
          >
            {option}
          </FeedbackButtonListItem>
        );
      })}
    </FeedbackButtonList>
  );
};

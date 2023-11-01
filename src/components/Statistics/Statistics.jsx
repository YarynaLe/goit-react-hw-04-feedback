import { StatList, StatListItem } from './Statistics.styled';

export const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => {
  return (
    <StatList>
      <StatListItem>Good: {good}</StatListItem>
      <StatListItem>Neutral: {neutral}</StatListItem>
      <StatListItem>Bad: {bad}</StatListItem>
      <StatListItem>Total: {total}</StatListItem>
      <StatListItem>Positive feedback: {positivePercentage}%</StatListItem>
    </StatList>
  );
};

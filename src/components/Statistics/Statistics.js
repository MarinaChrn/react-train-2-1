import PropTypes from "prop-types";
import {
  StatisticTitle,
  StatisticsContainer,
  StatisticsPoint,
} from "./Statistics.styled";

export const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => {
  return (
    <StatisticsContainer>
      <StatisticTitle>Statistic</StatisticTitle>
      <StatisticsPoint>Good: {good}</StatisticsPoint>
      <StatisticsPoint>Neutral: {neutral}</StatisticsPoint>
      <StatisticsPoint>Bad: {bad}</StatisticsPoint>
      <StatisticsPoint>Total: {total}</StatisticsPoint>
      <StatisticsPoint>
        Positive percentage: {positivePercentage}%
      </StatisticsPoint>
    </StatisticsContainer>
  );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number,
  positivePercentage: PropTypes.number,
};

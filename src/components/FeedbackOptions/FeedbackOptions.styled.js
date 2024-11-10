import styled from "styled-components";

export const FeedbackContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const FeedbackTitle = styled.p`
  font-weight: 600;
  font-size: 22px;
`;

export const StyledFeedbackOptions = styled.ul`
  list-style: none;
  display: flex;
  gap: 15px;
  padding-left: 0;
`;

export const FeedbackOption = styled.li``;

export const OptionButton = styled.button`
  border: 1px solid #989898;
  border-radius: 4px;
  background-color: transparent;
  min-width: 90px;
  font-size: 18px;
  cursor: pointer;
  padding: 10px 15px;
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.2);
  transition: background-color 0.3s ease, border 0.3s ease, color 0.3s ease,
    transform 0.2s ease;

  &:hover,
  &:focus {
    background-color: #719ab0;
    border: 1px solid #808080;
    color: white;
    transform: scale(1.05);
  }
`;

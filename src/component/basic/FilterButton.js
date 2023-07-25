import { styled } from 'styled-components';
import { FilterImg, imgName } from '../atoms/FilterImg';

export const FilterButtonContainer = styled.button`
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  height: 110px;
  width: 82px;
  border-style: none;
  background-color: transparent;
`;

export const FilterSpan = styled.span`
  font-size: 16px;
  height: 24px;
`;

export const FilterButton = ({ ...rest }) => {
  return (
    <FilterButtonContainer {...rest}>
      <FilterImg src={imgName.All}/>
      <FilterSpan>전체</FilterSpan>
    </FilterButtonContainer>
  );
};

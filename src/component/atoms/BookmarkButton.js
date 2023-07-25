import { styled } from 'styled-components';

const ButtonStyle = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  border-style: none;
  background-color: transparent;
  width: 24px;
  height: 24px;
  cursor: pointer;
`;

export const BookmarkButton = ({ isBookmarked }) => {

  const buttonText = isBookmarked ? "/image_component/star_on.png" : "/image_component/star_off.png";

  return (
    <ButtonStyle isBookmarked={isBookmarked}>
      <img src={buttonText} alt='' />
    </ButtonStyle>
  );
};
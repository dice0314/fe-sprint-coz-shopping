import { styled } from 'styled-components';

export const imgName = {
  All: "/image_component/All.png",
  Product: "/image_component/Product.png",
  Exhibition: "/image_component/Exhibition.png",
  Category: "/image_component/Category.png",
  Brand: "/image_component/Brand.png",
};

const ImgStyle = styled.img`
`;

export const FilterImg = ({ image, ...rest }) => {
  return (
    <ImgStyle src={imgName[image]} alt={imgName[image]} {...rest}/>
  );
};

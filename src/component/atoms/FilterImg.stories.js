import React from 'react';
import { FilterImg, imgName } from './FilterImg';

export default {
  title: 'Atoms/FilterImg',
  component: FilterImg,
  parameters: {
    backgrounds: { default: 'light' }, // 스토리의 배경색 설정
    controls: { hideNoControlsWarning: true }, // 컨트롤 경고 메시지 숨김 설정
  },
};

const keys = Object.keys(imgName);

export const AllImg = () => (
  <div style={{ display: 'flex' }}>
    {keys.map((el) => (
      <FilterImg key={el} image={el} />
    ))}
  </div>
);

export const FilterImgs = (args) => <FilterImg {...args} />;
FilterImgs.args = {
  image: 'All',
};
FilterImgs.argTypes = {
  image: {
    options: keys,
    control: { type: 'select' },
  },
};
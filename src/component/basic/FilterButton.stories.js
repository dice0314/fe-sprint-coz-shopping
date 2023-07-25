import { useState } from 'react';
import { FilterButton } from './FilterButton';

export default {
  title: 'Basic/FilterButton',
  component: FilterButton,
  parameters: {
    backgrounds: { default: 'light' },
  },
};

const Template = (args) => {
  const [currentFilter, setcurrentFilter] = useState();

  return (
    <FilterButton />
  );
};

export const Default = (args) => <Template {...args} />;

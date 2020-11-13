import React, { useState } from 'react';
import Accordion from './components/Accordion';
import Search from  './components/Search';
import Dropdown from  './components/Dropdown';
import Translate from './components/Translate';

const items = [
  {
    title: 'What is React?',
    content: 'React is a front end javascript framework.'
  },
  {
    title: 'Why use React?',
    content: 'React is a favorite JS Library among engineers.'
  },
  {
    title: 'How do you use React?',
    content: 'You use React by creating components.'
  }
]

const options = [
  {
    label: 'Color Red',
    value: 'red'
  },
  {
    label: 'Color Green',
    value: 'green'
  },
  {
    label: 'Color Blue',
    value: 'blue'
  }
]

export default () => {
  const [selected, setSelected] = useState(options[0]);

  return (
    <div>
      {/* <Accordion items={items} /> */}
      {/* <Search /> */}
      {/* <Dropdown 
        options={options}
        selected={selected}
        onSelectedChange={setSelected}
        label="Select a Color"
      /> */}
      <Translate />
    </div>
  );
};
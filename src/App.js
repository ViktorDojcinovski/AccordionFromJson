import React from 'react';
import JsonToAccordion from './JsonToAccordion.component';

import data from './data.json';

const App = () => {
  return (
    <div>
      <JsonToAccordion data={data} />
    </div>
  );
};

export default App;

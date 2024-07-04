// App.js
import React from 'react';
import {LanguageProvaider} from './LanguageContext';
import LanguageSelector from './LanguageSelector';
import Greeting from './Greeting';

const App = () => {
  return (
    <LanguageProvaider>
      <div>
        <h1>language selector app</h1>
        <LanguageSelector />
        <Greeting />
      </div>
    </LanguageProvaider>
  );
};

export default App;

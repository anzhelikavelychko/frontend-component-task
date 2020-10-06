import React from 'react';
import ReactDOM from 'react-dom';

import styles from './index.css';

const App = () => {
  return (
    <div className={styles.app}>
      <div>Welcome to my-webpack-react-starter</div>
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector('#root'));

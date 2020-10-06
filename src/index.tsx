import React from 'react';
import ReactDOM from 'react-dom';

import styles from './index.css';

const App = () => {
  return (
    <div className={styles.dupa}>
      <div>Welcome to my-webpack-react-starter</div>
      <div className={styles.dupa2}>here will be the component</div>
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector('#root'));

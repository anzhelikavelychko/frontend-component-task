import React, {useState} from 'react';
import ReactDOM from 'react-dom';

import styles from './index.css';

import RoleSelector from './components/RoleSelector';
import {roles} from './utils/data';

const App = () => {
  const [selectedRole, setSelectedRole] = useState('viewOnly');

  return (
    <div className={styles.app}>
      <RoleSelector selectedRole={selectedRole} setSelectedRole={setSelectedRole} />
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector('#root'));

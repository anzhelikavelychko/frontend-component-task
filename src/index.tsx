import React, {useState} from 'react';
import ReactDOM from 'react-dom';

import styles from './index.css';

import RoleSelector from './components/RoleSelector';
import CheckBoxes from './components/CheckBoxes';
import data from './utils/data';

const App = () => {
  const [selectedRole, setSelectedRole] = useState('viewOnly');
  const [selectedBoxes, setSelectedBoxes] = useState({
    create: false,
    update: false,
    move: false,
    delete: false,
    view: false,
    share: false
  });

  const getStatusesOfCheckBoxes = () => {
    const selectedObj = data.filter((user) => user.role === selectedRole);
    return selectedObj[0].values;
  };
  return (
    <div className={styles.app}>
      <RoleSelector selectedRole={selectedRole} setSelectedRole={setSelectedRole} />
      Folders
      <CheckBoxes
        statuses={getStatusesOfCheckBoxes()}
        selectedRole={selectedRole}
        selectedBoxes={selectedBoxes}
        setSelectedBoxes={setSelectedBoxes}
      />
      <br />
      Gems
      <CheckBoxes
        statuses={getStatusesOfCheckBoxes()}
        selectedRole={selectedRole}
        selectedBoxes={selectedBoxes}
        setSelectedBoxes={setSelectedBoxes}
      />
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector('#root'));

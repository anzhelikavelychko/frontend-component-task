import React, {useState} from 'react';
import ReactDOM from 'react-dom';

import styles from './index.css';

import RoleSelector from './components/RoleSelector';
import CheckBoxes from './components/CheckBoxes';
import data, {roles} from './utils/data';

const App = () => {
  const [selectedRole, setSelectedRole] = useState('viewOnly');
  const [customsCheckBoxState, setcustomsCheckBoxState] = useState({
    create: false,
    update: false,
    move: false,
    delete: false,
    view: false,
    share: false
  });

  const selectedObj = data.filter((user) => user.role === selectedRole);

  const getStatesOfCheckBoxes = () => {
    return selectedObj[0].values;
  };

  const handleSubmit = (e) => {
    console.log('Current State', {
      value: selectedRole,
      role: roles[selectedRole],
      states: selectedRole === 'custom' ? customsCheckBoxState : selectedObj[0].values
    });
  };
  return (
    <div className={styles.app}>
      <div className={styles.mainContainer}>
        <div className={styles.rolesContainer}>
          <RoleSelector selectedRole={selectedRole} setSelectedRole={setSelectedRole} />
        </div>
        <div className={styles.folders}>
          <label>Folders</label>
          <CheckBoxes
            states={getStatesOfCheckBoxes()}
            selectedRole={selectedRole}
            customsCheckBoxState={customsCheckBoxState}
            setcustomsCheckBoxState={setcustomsCheckBoxState}
          />
        </div>
        <div className={styles.gems}>
          <label>Gems</label>
          <CheckBoxes
            states={getStatesOfCheckBoxes()}
            selectedRole={selectedRole}
            customsCheckBoxState={customsCheckBoxState}
            setcustomsCheckBoxState={setcustomsCheckBoxState}
          />
        </div>
      </div>

      <div className={styles.buttonContainer}>
        <button className={styles.button} onClick={handleSubmit}>
          SAVE
        </button>
      </div>
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector('#root'));

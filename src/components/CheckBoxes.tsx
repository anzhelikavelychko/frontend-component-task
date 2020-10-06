import React, {useState} from 'react';

import createEnum from '../utils/actionsHelper/createEnum';
import styles from '../index.css';

export default ({states, selectedRole, customsCheckBoxState, setcustomsCheckBoxState}) => {
  const items = createEnum({
    create: 'Create',
    update: 'Update',
    move: 'Move',
    delete: 'Delete',
    view: 'View',
    share: 'Share'
  });
  const handleChangeOfBoxes = (status) => {
    setcustomsCheckBoxState(
      Object.keys(customsCheckBoxState).reduce(
        (acc, item) => ({
          ...acc,
          [item]: item === status ? !customsCheckBoxState[item] : customsCheckBoxState[item]
        }),
        {}
      )
    );
  };

  return (
    <div className={styles.checkboxContainer}>
      {Object.keys(items).map((key) => (
        <div key={key.toString()} className={styles.checkboxItem}>
          {selectedRole === 'custom' ? (
            <>
              <input
                type="checkbox"
                checked={customsCheckBoxState[key]}
                onChange={() => handleChangeOfBoxes(key)}
              />
              <label>{items[key]}</label>
            </>
          ) : (
            <>
              <input type="checkbox" checked={states[key]} readOnly disabled={!states[key]} />
              <label className={!states[key] ? styles.disabledLabel : undefined}>
                {items[key]}
              </label>
            </>
          )}
        </div>
      ))}
    </div>
  );
};

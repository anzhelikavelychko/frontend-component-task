import React from 'react';

import {roles} from '../utils/data';
import styles from '../index.css';

const RoleSelector = ({selectedRole, setSelectedRole}) => {
  return (
    <>
      <label>User Role:</label>
      <select
        value={selectedRole}
        onChange={(e) => setSelectedRole(e.target.value)}
        className={styles.selector}
      >
        {!!roles &&
          Object.keys(roles).map((key) => (
            <option key={key.toString()} value={key}>
              {roles[key]}
            </option>
          ))}
      </select>
    </>
  );
};

export default RoleSelector;

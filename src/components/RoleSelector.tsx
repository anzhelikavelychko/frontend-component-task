import React, {useState} from 'react';

import {roles} from '../utils/data';

const RoleSelector = ({selectedRole, setSelectedRole}) => {
  const handleChange = (e) => {
    setSelectedRole(e.target.value);
  };
  const handleSubmit = () => {
    console.log('Submit happened');
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        User Role:
        <select value={selectedRole} onChange={handleChange}>
          {!!roles &&
            Object.keys(roles).map((key) => (
              <option key={key.toString()} value={key}>
                {roles[key]}
              </option>
            ))}
        </select>
      </label>
      <input type="submit" value="Submit" />
    </form>
  );
};

export default RoleSelector;

import React, {useState} from 'react';

import createEnum from '../utils/actionsHelper/createEnum';

export default ({statuses, selectedRole, selectedBoxes, setSelectedBoxes}) => {
  const items = createEnum({
    create: 'Create',
    update: 'Update',
    move: 'Move',
    delete: 'Delete',
    view: 'View',
    share: 'Share'
  });
  const handleChangeOfBoxes = (status) => {
    setSelectedBoxes(
      Object.keys(selectedBoxes).reduce(
        (acc, item) => ({
          ...acc,
          [item]: item === status ? !selectedBoxes[item] : selectedBoxes[item]
        }),
        {}
      )
    );
  };

  return (
    <>
      {Object.keys(items).map((key) => (
        <div key={key.toString()}>
          {selectedRole === 'custom' ? (
            <>
              <input
                type="checkbox"
                checked={selectedBoxes[key]}
                onChange={() => handleChangeOfBoxes(key)}
              />
              <label>{items[key]}</label>
            </>
          ) : (
            <>
              <input type="checkbox" checked={statuses[key]} readOnly disabled={!statuses[key]} />
              <label>{items[key]}</label>
            </>
          )}
        </div>
      ))}
    </>
  );
};

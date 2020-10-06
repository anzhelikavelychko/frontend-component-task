import createEnum from './actionsHelper/createEnum';

export const roles = createEnum({
  admin: 'Admin',
  user: 'User',
  member: 'Member',
  viewOnly: 'View - Only'
});

const roleRights = {
  admin: {create: true, update: true, move: true, delete: true, view: true, share: true},
  user: {create: true, update: true, move: false, delete: false, view: true, share: true},
  member: {create: false, update: false, move: false, delete: false, view: true, share: true},
  viewOnly: {create: false, update: false, move: false, delete: false, view: true, share: false}
};

export default Object.keys(roles).map((key) => ({
  role: roles[key],
  values: roleRights[key]
}));

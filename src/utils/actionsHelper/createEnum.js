const createProxy =
  typeof Proxy === 'function'
    ? (object) =>
        new Proxy(object, {
          get: (target, name) => {
            if (name in target) return target[name];

            throw new RangeError(`Please initialize Enum member ${name} in ${target}`);
          }
        })
    : (x) => x;

export default (object, prefix = '') => {
  if (prefix) prefix = `${prefix}.`;

  return createProxy(
    Object.keys(object)
      .filter((key) => !object[key])
      .reduce(
        (p, c) => ({
          ...p,
          [c]: `${prefix}${c}`
        }),
        object
      )
  );
};

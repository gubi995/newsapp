export const classNames = (...classes) => {
  const classNames = [];

  classes.forEach((c) => {
    if (typeof c === 'string') {
      classNames.push(c);
    }

    if (typeof c === 'object') {
      Object.entries(c).forEach(([key, value]) => {
        if (value) {
          classNames.push(key);
        }
      });
    }
  });

  return classNames.join(' ');
};

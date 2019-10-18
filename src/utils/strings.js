const kebabCase = text => {
  return text.replace(/\s+/g, '-').toLowerCase();
};

export const createClassName = (type, name) => {
  const kType = kebabCase(type);
  const kName = kebabCase(name);
  return `${kType}-${kName}`;
};

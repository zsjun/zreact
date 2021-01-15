export default (type, props, ...children) => {
  return {
    type,
    props,
    ...children,
  };
};

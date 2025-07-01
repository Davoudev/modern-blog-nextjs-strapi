const ConditionalRender = ({ condition, children }) => {
  if (condition) return children;
};
export default ConditionalRender;

const Product = [];
const Reducer = (state = { Product }, Action) => {
  switch (Action.type) {
    case "success":
      return { Product: Action.payload };
    case "fail":
      return { Product: Action.payload };
    default:
      return state;
  }
};
export default Reducer;
import axios from "axios";

const Action = () => async (dispatch) => {
  try {
    const Product = await axios.get("https://reduxweb-backend.onrender.com/getproduct");
    const res = Product.data;
    dispatch({ type: "success", payload: res });
  } catch (err) {
    dispatch({ type: "fail", payload: err.message });
  }
};
export default Action;
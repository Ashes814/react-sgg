import CountUI from "../../components/Count";
// import store from "../../redux/store";
import { connect } from "react-redux";
import {
  createIncrementAction,
  createDecrementAction,
  createIncrementAsyncAction,
} from "../../redux/count_action";

const mapStateToProps = (state) => {
  return { count: state };
};

// const mapDispatchToProps = (dispatch) => {
//   return {
//     jia: (number) => {
//       dispatch(createIncrementAction(number));
//     },
//     jian: (number) => {
//       dispatch(createDecrementAction(number));
//     },
//     asyncJia: (number, time) => {
//       dispatch(createIncrementAsyncAction(number, time));
//     },
//   };
// }
const mapDispatchToProps = {
  jia: createIncrementAction,
  jian: createDecrementAction,
  asyncJia: createIncrementAsyncAction,
};

export default connect(mapStateToProps, mapDispatchToProps)(CountUI);

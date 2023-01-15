import CountUI from "../../components/Count";
// import store from "../../redux/store";
import { connect } from "react-redux";
import {
  createIncrementAction,
  createDecrementAction,
  createIncrementAsyncAction,
} from "../../redux/count_action";

function mapStateToProps(state) {
  return { count: state };
}

function mapDispatchToProps(dispatch) {
  return {
    jia: (number) => {
      dispatch(createIncrementAction(number));
    },
    jian: (number) => {
      dispatch(createDecrementAction(number));
    },
    asyncJia: (number, time) => {
      dispatch(createIncrementAsyncAction(number, time));
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(CountUI);

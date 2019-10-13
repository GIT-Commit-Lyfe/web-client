import { GET_STATE } from "../dispatch";

const defaultStateSeller = () => {
  return {
    type: GET_STATE,
  };
};

export default { defaultStateSeller }
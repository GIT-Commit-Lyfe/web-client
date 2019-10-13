import axios from "axios";

export const logger = store => next => action => {
  console.log("Before action", action);
  next(action);
  console.log("After action", store.getState());
};

export const API = store => next => async action => {
  console.log("Hitting api...");

//   if (action.type === HIT_API) {
//     next({
//       type: API_LOADING
//     });

//     try {
//       let { data } = await axios.get(action.url);

//       next({
//         type: SUCCESS_HIT_API,
//         payload: data,
//         key: action.key
//       });
//     } catch (error) {
//       next({
//         type: ERROR_HIT_API
//       });
//     }
//   } else {
//     next({
//       ...action
//     });
//   }
};

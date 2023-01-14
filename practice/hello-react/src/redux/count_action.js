import { INCREMENT, DECREMENT } from "./constant";

export const createIncrementAction = function (data) {
  return { type: INCREMENT, data: data };
};

export const createDecrementAction = function (data) {
  return { type: DECREMENT, data: data };
};

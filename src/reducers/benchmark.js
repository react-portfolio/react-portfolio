import { UPDATE_BENCHMARK } from '../constants/ActionTypes';

export default function counter(state = 0, action) {
  switch (action.type) {
  case UPDATE_BENCHMARK:
    return action.benchmark;
  default:
    return state;
  }
}

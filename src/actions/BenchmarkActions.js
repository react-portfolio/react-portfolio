import { UPDATE_BENCHMARK } from '../constants/ActionTypes';

export function updateBenchmark(newBenchmark) {
  return {
    type: UPDATE_BENCHMARK,
    benchmark: newBenchmark
  };
}

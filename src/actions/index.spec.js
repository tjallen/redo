import * as types from '../constants';
import * as actions from './index';

describe('actions', () => {
  it('should create an ADD_TODO action', () => {
    const text = 'foo';
    const expected = {
      type: types.ADD_TODO,
      text,
    };
    expect(actions.addTodo(text)).toEqual(expected);
  });
});
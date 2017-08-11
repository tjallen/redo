import * as types from '../../constants';
import * as actions from '../index';

jest.mock('uuid', () => {
  return {
    v4: jest.fn(() => 1)
  };
});

describe('actions', () => {
  it('should create an ADD_TODO action', () => {
    const text = 'foo';
    const expected = {
      type: types.ADD_TODO,
      text,
      id: 1,
    };
    expect(actions.addTodo(text)).toEqual(expected);
  });
});
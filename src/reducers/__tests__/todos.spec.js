import reducer from '../todos';
import * as types from '../../actions';

jest.mock('uuid', () => {
  return {
    v4: jest.fn(() => 0)
  };
});

describe('todos reducer', () => {
  it('should return initial state', () => {
    const expected = [
        { id: 0, text: 'foo', editing: false, completed: false },
        { id: 0, text: 'bar', editing: false, completed: true },
        { id: 0, text: 'baz', editing: false, completed: false },
    ];
    expect(reducer(undefined, {})).toEqual(expected);
  });
  it('should handle recieving ADD_TODO action', () => {
    expect(
      reducer([], {
        type: types.ADD_TODO, text: 'foo', id: 0
      })
    ).toEqual([
      {
        id: 0,
        text: 'foo',
        completed: false,
      }
    ]);
  });
});
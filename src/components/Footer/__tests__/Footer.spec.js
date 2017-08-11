import React from 'react';
import { mount } from 'enzyme';
import TodoCount from '../TodoCount';

// helper
function init() {
  const props = {
    count: 1,
  };
  const TodoCountWrap = mount(<TodoCount {...props} />);
  
  return {
    props,
    TodoCountWrap,
  };
};

describe('components', () => {
  describe('TodoCount', () => {
    it('should render the count from props', () => {
      const { TodoCountWrap } = init();
      expect(TodoCountWrap.find('p').text()).toBe('1')
    });
  });
});
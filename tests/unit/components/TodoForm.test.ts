import { describe, it, expect } from 'vitest';
import { mount } from '@vue/test-utils';
import TodoForm from '../../../src/todo-app/components/TodoForm.vue';

describe('TodoForm', () => {
  it('renders properly', () => {
    const wrapper = mount(TodoForm);
    expect(wrapper.find('input').exists()).toBe(true);
    expect(wrapper.find('button').exists()).toBe(true);
  });
});

import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';

import LikeButton from './like-button';
const noop = () => null;

const Wrapper = (props) => {
  const { changeLike = noop } = props;
  return <LikeButton action={changeLike}></LikeButton>;
};

describe('LikeButton', () => {
  let container = null;
  beforeEach(() => {
    container = document.createElement('div');
    document.body.appendChild(container);
  });

  afterEach(() => {
    unmountComponentAtNode(container);
    container.remove();
    container = null;
  });

  it('renders without crashing', () => {
    act(() => {
      render(<Wrapper />, container);
    });
    expect(container.textContent).toBe('');
  });

  it('calls action when clicked', () => {
    const changeLike = jest.fn();
    act(() => {
      render(<Wrapper changeLike={changeLike} />, container);
    });

    const button = container.querySelector('button');
    act(() => {
      button.dispatchEvent(new MouseEvent('click', { bubbles: true }));
    });

    expect(changeLike).toHaveBeenCalledTimes(1);
  });
});

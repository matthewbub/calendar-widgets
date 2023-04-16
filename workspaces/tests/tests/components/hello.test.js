import React from 'react';
import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import { Hello } from 'calendar-widgets';

describe('Hello', () => {
  it('renders a div with "Hello, World!" text', () => {
    const { getByText } = render(<Hello />);
    const divElement = getByText(/Hello, World!/i);
    expect(divElement).toBeInTheDocument();
  });
});

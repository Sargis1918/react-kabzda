import React from 'react';
import { render, screen,fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import ProfileStatus from './ProfileStatus';
import { BrowserRouter as Router } from 'react-router-dom';

describe('ProfileStatus component', () => {
  test('status from props should be in state', () => {
    render(
      <Router>
        <ProfileStatus status={'it-kamasutra.com'} />
      </Router>
    );
    
    const statusElement = screen.getByText('it-kamasutra.com');
    expect(statusElement).toBeInTheDocument();
  });
 
  test('input is present but not visible initially', () => {
    render(
      <Router>
        <ProfileStatus status={'it-kamasutra.com'} />
      </Router>
    );

    const statusElement = screen.getByTestId('profile-status');
    fireEvent.click(statusElement);

    const inputElement = screen.getByTestId('profile-status-value');
    expect(inputElement).toBeInTheDocument();
    expect(inputElement).toBeVisible();
  });
  test('input is present and not visible initially', () => {
    
    render(
      <Router>
        <ProfileStatus status={'it-kamasutra.com'} />
      </Router>
    );

    const inputElement = screen.queryByTestId('profile-status-value');
   
    expect(inputElement).not.toBeInTheDocument();
  });
});

import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import FetchData, { fetchData } from './FetchData';

// Mock the fetchData function
jest.mock('./FetchData', () => ({
  ...jest.requireActual('./FetchData'),
  fetchData: jest.fn(),
}));

test('displays fetched data', async () => {
  fetchData.mockResolvedValueOnce({ message: 'Hello World' });
  
  render(<FetchData />);
  
  // Wait for the component to finish loading
  await waitFor(() => {
    expect(screen.getByText(/Hello World/i)).toBeInTheDocument();
  });
});

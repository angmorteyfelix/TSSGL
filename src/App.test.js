import { fireEvent, render, screen } from '@testing-library/react';
import Contact from './pages/Contact';

describe('Contact quote request', () => {
  beforeEach(() => {
    Object.defineProperty(window, 'location', {
      writable: true,
      value: { href: '' },
    });
  });

  test('submits the quote request by opening a mailto link for the operations team', () => {
    render(<Contact />);

    fireEvent.change(screen.getByLabelText(/^name$/i), {
      target: { value: 'Ada Lovelace' },
    });
    fireEvent.change(screen.getByLabelText(/^vessel name \/ company$/i), {
      target: { value: 'M/V Test' },
    });
    fireEvent.change(screen.getByLabelText(/^message$/i), {
      target: { value: 'Please send a quote for agency support.' },
    });

    fireEvent.click(screen.getByRole('button', { name: /send request/i }));

    expect(window.location.href).toContain('mailto:operations@thalassashoreservicesgh.com');
    expect(window.location.href).toContain('Request%20Quote');
    expect(window.location.href).toContain('Ada%20Lovelace');
  });
});

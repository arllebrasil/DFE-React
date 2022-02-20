import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from './app/store';
import App from './pages/app/App';
import { randomInt } from 'crypto';

const TestView = (
  <Provider store={store}>
    <App title='Meu App Redux' />
  </Provider>
);

describe('', () => {
  it('There are hits in the view', async () => {
    const { findAllByPlaceholderText, findByText } = render(
      TestView
    );

    const items = await findAllByPlaceholderText('hit-item');
    const itemsSize = items.length;
    expect(itemsSize).toBeGreaterThan(0);
  });

  it('There is Hit Detalils in the view',async ()=>{
    const { findAllByPlaceholderText, findByText } = render(
      TestView
    );

    const items = await findAllByPlaceholderText('hit-item');
    const itemsSize = items.length;

    fireEvent.click(items[randomInt(itemsSize)]);
    const detalhes = await findByText('Detalhes');
    expect(detalhes).toBeInTheDocument();
  });

  it('There is not Hit Detalils  in the view',async ()=>{
    const { findAllByPlaceholderText, findByText, queryByText} = render(
      TestView
    );

    const items = await findAllByPlaceholderText('hit-item');
    const itemsSize = items.length;

    fireEvent.click(items[randomInt(itemsSize)]);
    const closeDetalhes = await findByText('Fechar');
    fireEvent.click(closeDetalhes);
    expect(queryByText('Detalhes')).toBeFalsy();
  });
});

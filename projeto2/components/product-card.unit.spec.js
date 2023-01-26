import ProductCard from './product-card';
import { fireEvent, render, screen } from '@testing-library/react';

const product = {
  title: 'Relógio bonito',
  price: '22.00',
  image:
    'https://images.unsplash.com/photo-1495856458515-0637185db551?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
};

const addToCart = jest.fn();

const renderProductCard = () => {
  render(<ProductCard product={product} addToCart={addToCart} />);
};

describe('ProductCard', () => {
  it('should render ProductCard', () => {
    renderProductCard();

    expect(screen.getByTestId('product-card')).toBeInTheDocument();
  });

  it('should display proper content', () => {
    renderProductCard();

    expect(
      screen.getByText(new RegExp(product.title, 'i')),
    ).toBeInTheDocument();

    expect(
      screen.getByText(new RegExp(product.price, 'i')),
    ).toBeInTheDocument();

    expect(screen.getByTestId('image')).toHaveStyle({
      backgroundImage: product.image,
    });
  });

  it('should call props.addToCart() when button is clicked', async () => {
    renderProductCard();

    const button = screen.getByRole('button');
    await fireEvent.click(button);

    expect(addToCart).toHaveBeenCalledTimes(1);
    expect(addToCart).toHaveBeenCalledWith(product);
  });
});

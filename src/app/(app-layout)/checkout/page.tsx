import CartItemList from '@/cart/cart-item-list';
import CartTotalPrice from '@/cart/cart-total-price';
import CheckoutForm from '@/checkout/checkout-form';
import Container from '@/common/container';
import PageTitle from '@/common/page-title';
import SectionTitle from '@/common/section-title';
import Paper from '@/common/paper';
import ClearCartButton from '@/cart/clear-cart-button';
import { getCart } from '@/cart/cart-fetchers';

export default async function CheckoutPage() {
  const cart = await getCart();

  return (
    <>
      <PageTitle title="Checkout" />
      <Container maxWidth="sm" className="space-y-4">
        <section>
          <SectionTitle as="h2" actions={<ClearCartButton cart={cart} />}>
            Cart
          </SectionTitle>
          <Paper>
            <CartItemList />
            <CartTotalPrice />
          </Paper>
        </section>
        {cart && (
          <section>
            <SectionTitle as="h2">Credit/Debit Card Information</SectionTitle>
            <Paper>
              <CheckoutForm />
            </Paper>
          </section>
        )}
      </Container>
    </>
  );
}

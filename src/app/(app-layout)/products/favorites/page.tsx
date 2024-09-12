import { routes } from '@/core/routing/routing.utils';
import { getMetadata } from '@/core/seo/seo.utils';
import { PageTitle } from '@/core/ui/components/page-title';
import { redirectToSignIn } from '@/features/auth/auth.actions';
import { getUser } from '@/features/auth/auth.data';
import { getFavorites } from '@/features/favorites/favorites.data';
import { ProductGrid } from '@/features/products/components/product-grid';

export const metadata = getMetadata({
  title: 'Favorites',
  description: 'See all your favorites',
  pathname: routes.favorites(),
});

export default async function FavoritesPage() {
  const [user, favorites] = await Promise.all([getUser(), getFavorites()]);

  if (!user) return redirectToSignIn();

  return (
    <main>
      <PageTitle title="Favorites" />
      <ProductGrid products={favorites} />
    </main>
  );
}

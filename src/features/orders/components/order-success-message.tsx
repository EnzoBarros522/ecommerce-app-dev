import { routes } from '@/core/routing/utils';
import { ButtonLink } from '@/core/ui/components/button-link';
import { CircleCheckIcon } from '@/core/ui/components/icons';

export function OrderSuccessMessage() {
  return (
    <div className="text-success grid place-items-center gap-4">
      <CircleCheckIcon className="text-7xl" />
      <div className="text-center text-2xl font-semibold">
        Your order has been received
      </div>
      <ButtonLink href={routes.search()}>Back to Store</ButtonLink>
    </div>
  );
}

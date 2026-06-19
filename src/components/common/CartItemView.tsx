import type { CartItemType } from './CartItemType';

interface CartItemViewProps {
  item: CartItemType;
}

export const CartItemView = ({ item }: CartItemViewProps) => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        padding: '10px 0',
        borderBottom: '1px solid #eee',
      }}
    >
      <span>name: (x{item.quantity})</span>
      <strong>{item.price * item.quantity} ₴</strong>
    </div>
  );
};

import { forwardRef, useImperativeHandle, useRef } from 'react';
import { createPortal } from 'react-dom';
import Cart from './Cart';

const CartModal = forwardRef(function Modal(
  { cartItems, onUpdateCartItemQuantity, title, actions },
  ref
) {

  return createPortal(
    <dialog id="modal" ref={ref}>
      <h2>{title}</h2>
      <Cart items={cartItems} onUpdateItemQuantity={onUpdateCartItemQuantity} />
      <form method="dialog" id="modal-actions">
        {actions}
      </form>
    </dialog>,
    document.getElementById('modal')
  );
});

export default CartModal;

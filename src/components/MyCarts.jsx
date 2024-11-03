import React from 'react'
import { RiDeleteBin3Line } from 'react-icons/ri';
import { useDispatch, useSelector } from 'react-redux';
import { clearCart, removeFromCart, updateCart } from '../slices/CartSlice';

const MyCarts = () => {
  const dispatch = useDispatch();
  const cartProducts = useSelector(state => state.cart.products) || [];
  const totalQuantity = useSelector(state => state.cart.totalQuantity) || [];
  const totalAmount = useSelector(state => state.cart.totalAmount) || 0;

  const handleRemoveProduct = (id) => {
    dispatch(removeFromCart(id));
  };

  const handleEmptyCart = () => {
    dispatch(clearCart());
  };

  const handleQuantityChange = (id, e) => {
    const newQuantity = parseInt(e.target.value, 10);
    console.log(`Updating quantity for ID: ${id}, New Quantity: ${newQuantity}`);

    if (newQuantity >= 0) {
      dispatch(updateCart({ id, quantity: newQuantity }));
    }
  };

  return (
    <div className='p-[5%] pt-[20%] md:pt-[15%] lg:pt-[8%] xl:px-[6rem] bg-gradient-to-r from-brown from-0% to-nude1 to-100% text-brown3 font-primary'>
      <div className="py-3 min-h-[50vh]">
        <table className="w-full h-full">
          <thead className="bg-brown4 text-brown3">
            <tr className="font-semibold md:font-bold text-[14px] md:text-[16px] capitalize">
              <th className="py-3 px-1 md:p-3 text-left">name</th>
              <th className="py-3 px-1 md:p-3">quantity</th>
              <th className="py-3 px-1 md:p-3">price</th>
              <th className="py-3 px-1 md:p-3">action</th>
            </tr>
          </thead>

          <tbody className="bg-brown text-brown3">
            {cartProducts.length > 0 ? (
              cartProducts.map(product => (
                <tr key={product._id} className="font-semibold md:font-bold text-[14px] md:text-[16px] capitalize text-center hover:bg-nude1">
                  <td className="py-3 px-1 md:p-3 text-left max-w-[100px] truncate overflow-hidden">{product.name}</td>
                  <td className="py-3 px-1 md:p-3">
                    <input
                      type="number"
                      className="focus:outline-none focus:border-none w-16 bg-transparent text-center"
                      value={product.quantity}
                      min="0"
                      onChange={(e) => handleQuantityChange(product._id, e)}
                    />
                  </td>
                  <td className="py-3 px-1 md:p-3">
                    ${(product.price * product.quantity).toFixed(2)}                  
                  </td>
                  <td className="py-3 px-1 md:p-3">
                    <button onClick={() => handleRemoveProduct(product._id)} className="pt-1 text-red-500">
                      <RiDeleteBin3Line className="w-[20px] h-[20px]" />
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="5" className="py-3 text-center">Your cart is empty.</td>
              </tr>
            )}
          </tbody>

          <tfoot className="bg-brown text-brown3 w-full">
            <tr className="w-full font-semibold md:font-bold text-[14px] md:text-[16px] capitalize">
              <td className="py-3 px-1" colSpan={2}>
                total quantity : {totalQuantity}
              </td>
              <td className="py-3 px-1" colSpan={2}>
                total amount : $ {totalAmount.toFixed(2)}
              </td>
            </tr>
          </tfoot>
        </table>

        <div className="flex justify-end mt-3 mr-2">
          {cartProducts.length > 0 &&
            <button onClick={handleEmptyCart}
              className="text-red-500 flex justify-center items-center gap-2">
              <RiDeleteBin3Line className="w-[20px] h-[20px]" /> empty cart
            </button>
          }
        </div>
      </div>
    </div>
  )
}

export default MyCarts;

import Navbar from '../components/Navbar';

const Cart = () => {
  return (
    <div>
      <Navbar />
      <div className="p-10 text-center">
        <h1 className="text-4xl font-bold">Your Cart</h1>
        <p>Items in your cart will appear here.</p>
      </div>
    </div>
  );
};

export default Cart;

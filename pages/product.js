import Navbar from '../components/Navbar';

const Product = () => {
  return (
    <div>
      <Navbar />
      <div className="p-10 text-center">
        <h1 className="text-4xl font-bold">Our Products</h1>
        <p>Explore the best products in the market!</p>
        {/* Display products here */}
      </div>
    </div>
  );
};

export default Product;

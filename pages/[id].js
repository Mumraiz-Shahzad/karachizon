import { useRouter } from 'next/router';
import Navbar from '../Navbar';

const ProductDetail = () => {
  const router = useRouter();
  const { id } = router.query;

  return (
    <div>
      <Navbar />
      <div className="p-10 text-center">
        <h1 className="text-4xl font-bold">Product {id}</h1>
        <p>Details for product {id} will appear here.</p>
      </div>
    </div>
  );
};

export default ProductDetail;

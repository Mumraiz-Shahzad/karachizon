import Navbar from '../components/Navbar';

const FAQ = () => {
  return (
    <div>
      <Navbar />
      <div className="p-10 text-center">
        <h1 className="text-4xl font-bold">Frequently Asked Questions</h1>
        <ul className="mt-4 space-y-4">
          <li>Q: How do I buy products?</li>
          <li>A: Simply add them to your cart and checkout.</li>
          <li>Q: How can I contact customer service?</li>
          <li>A: Visit our contact page to get in touch.</li>
        </ul>
      </div>
    </div>
  );
};

export default FAQ;

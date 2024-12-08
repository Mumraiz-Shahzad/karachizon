import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="bg-blue-600 text-white p-4">
      <ul className="flex justify-center space-x-6">
        <li><Link href="/">Home</Link></li>
        <li><Link href="/about">About Us</Link></li>
        <li><Link href="/faq">FAQ</Link></li>
        <li><Link href="/cart">Cart</Link></li>
        <li><Link href="/product">Products</Link></li>
        <li><Link href="/contact">Contact Us</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;

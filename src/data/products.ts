import { Product } from '@/types/product';
import whiteTee from '@/assets/products/white-tee.jpg';
import emeraldKurta from '@/assets/products/emerald-kurta.jpg';
import navyJacket from '@/assets/products/navy-jacket.jpg';
import mustardDress from '@/assets/products/mustard-dress.jpg';
import roseTop from '@/assets/products/rose-top.jpg';
import oliveShirt from '@/assets/products/olive-shirt.jpg';
import maroonBlazer from '@/assets/products/maroon-blazer.jpg';
import tealTunic from '@/assets/products/teal-tunic.jpg';

export const products: Product[] = [
  {
    id: '1',
    title: 'Classic White Tee',
    description: 'Timeless cotton t-shirt perfect for any occasion. Soft, breathable fabric with a comfortable fit.',
    price: 899,
    color: 'white',
    image: whiteTee,
    category: 'Tops',
    stock: 25,
  },
  {
    id: '2',
    title: 'Emerald Silk Kurta',
    description: 'Elegant emerald green silk kurta with intricate embroidery. Perfect for festive occasions.',
    price: 2499,
    color: 'emerald',
    image: emeraldKurta,
    category: 'Traditional',
    stock: 15,
  },
  {
    id: '3',
    title: 'Navy Blazer',
    description: 'Sophisticated navy blue blazer for professional and formal events. Tailored fit with premium fabric.',
    price: 4999,
    color: 'navy',
    image: navyJacket,
    category: 'Outerwear',
    stock: 12,
  },
  {
    id: '4',
    title: 'Mustard Flow Dress',
    description: 'Flowing mustard yellow dress perfect for summer evenings. Lightweight and elegant.',
    price: 3299,
    color: 'mustard',
    image: mustardDress,
    category: 'Dresses',
    stock: 18,
  },
  {
    id: '5',
    title: 'Rose Blouse',
    description: 'Soft rose pink blouse with puff sleeves. Comfortable and stylish for everyday wear.',
    price: 1799,
    color: 'rose',
    image: roseTop,
    category: 'Tops',
    stock: 20,
  },
  {
    id: '6',
    title: 'Olive Casual Shirt',
    description: 'Relaxed fit olive green shirt perfect for casual outings. Breathable cotton blend.',
    price: 1499,
    color: 'olive',
    image: oliveShirt,
    category: 'Shirts',
    stock: 22,
  },
  {
    id: '7',
    title: 'Maroon Blazer',
    description: 'Rich maroon blazer that adds elegance to any outfit. Perfect for special occasions.',
    price: 4599,
    color: 'maroon',
    image: maroonBlazer,
    category: 'Outerwear',
    stock: 10,
  },
  {
    id: '8',
    title: 'Teal Tunic',
    description: 'Comfortable teal tunic with button details. Versatile piece for your wardrobe.',
    price: 2199,
    color: 'teal',
    image: tealTunic,
    category: 'Traditional',
    stock: 16,
  },
];

export const colorPalettes = {
  fair: {
    name: 'Fair',
    colors: ['navy', 'emerald', 'maroon', 'rose', 'charcoal'],
  },
  medium: {
    name: 'Medium',
    colors: ['mustard', 'teal', 'olive', 'maroon', 'navy'],
  },
  deep: {
    name: 'Deep',
    colors: ['white', 'rose', 'mustard', 'teal', 'emerald'],
  },
};

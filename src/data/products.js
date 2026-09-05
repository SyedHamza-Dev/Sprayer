import amberClassic from '../assets/products/product-amber-classic.jpg';
import minimalistStone from '../assets/products/product-minimalist-stone.jpg';
import crystalDark from '../assets/products/product-crystal-dark.jpg';
import navyEau from '../assets/products/product-navy-eau.jpg';
import redCinematic from '../assets/products/product-red-cinematic.jpg';
import texturedPink from '../assets/products/product-textured-pink.jpg';
import crystalFloral from '../assets/products/product-crystal-floral.jpg';

export const products = [
  {
    id: 1,
    title: 'Golden Hour',
    notes: 'Amber, Vanilla, Sandalwood',
    image: amberClassic,
    originalPrice: 89,
    price: 65,
    rating: 4.5,
  },
  {
    id: 2,
    title: 'Stone & Salt',
    notes: 'Sea Salt, Driftwood, Musk',
    image: minimalistStone,
    originalPrice: 75,
    price: 58,
    rating: 4,
  },
  {
    id: 3,
    title: 'Clear Noir',
    notes: 'Bergamot, Black Pepper, Cedar',
    image: crystalDark,
    originalPrice: 95,
    price: 72,
    rating: 5,
  },
  {
    id: 4,
    title: 'Midnight Parfum',
    notes: 'Oud, Leather, Smoked Vetiver',
    image: navyEau,
    originalPrice: 110,
    price: 84,
    rating: 4.5,
  },
  {
    id: 5,
    title: 'Ember Rouge',
    notes: 'Rose, Saffron, Patchouli',
    image: redCinematic,
    originalPrice: 98,
    price: 76,
    rating: 4.5,
  },
  {
    id: 6,
    title: 'Blush Velvet',
    notes: 'Peony, Iris, White Musk',
    image: texturedPink,
    originalPrice: 68,
    price: 49,
    rating: 4,
  },
  {
    id: 7,
    title: 'Petal Crystal',
    notes: 'Jasmine, Neroli, Soft Woods',
    image: crystalFloral,
    originalPrice: 82,
    price: 61,
    rating: 5,
  },
];

export const featuredProductIds = [1, 3, 4];

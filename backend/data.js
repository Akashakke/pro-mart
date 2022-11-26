import bcrypt from 'bcryptjs';

const data = {
  users: [
    {
      name: 'Akash',
      email: 'admin@example.com',
      password: bcrypt.hashSync('123456'),
      isAdmin: true,
    },
    {
      name: 'Praveen',
      email: 'user@example.com',
      password: bcrypt.hashSync('123456'),
      isAdmin: false,
    },
  ],
    products: [
      {
        
        name: 'MSI Raider Laptop',
        slug: 'iphone-13-pro',
        category: 'Smartphones',
        image: 'https://cdn1.smartprix.com/rx-iyJaB5CUl-w420-h420/msi-raider-ge67-hx-1.webp', // 679px × 829px
        price: 120,
        countInStock: 10,
        brand: 'iPhone',
        rating: 4.5,
        numReviews: 10,
        description: 'Gaming',
      },
      {
        
        name: 'Asus ZenBook Pro Laptop',
        slug: 'oneplus-10-r',
        category: 'Smartphones',
        image: 'https://cdn1.smartprix.com/rx-ia5Ztd3KK-w420-h420/asus-zenbook-pro-duo.webp',
        price: 250,
        countInStock: 0,
        brand: 'Business',
        rating: 4.0,
        numReviews: 10,
        description: 'Business',
      },
      {
        
        name: 'Nikon D850',
        slug: 'samsung-s22-ultra',
        category: 'Smartphones',
        image: 'https://cdn1.smartprix.com/rx-ieo8fit7s-w420-h420/nikon-d850-45-7mp-ds.webp',
        price: 25,
        countInStock: 10,
        brand: 'DSLR',
        rating: 4.5,
        numReviews: 14,
        description: 'Nikon',
      },
      {
        
        name: 'GoPro HERO10',
        slug: 'sony-xperia-5',
        category: 'Smartphones',
        image: 'https://cdn1.smartprix.com/rx-iqO1A85Ni-w420-h420/gopro-hero10-23mp-sp.webp',
        price: 65,
        countInStock: 5,
        brand: 'Sports',
        rating: 4.5,
        numReviews: 10,
        description: 'Sports',
      },
      {
        
        name: 'Samsung M8',
        slug: 'poco-f4-gt',
        category: 'Smartphones',
        image: 'https://cdn1.smartprix.com/rx-i9b3HVdAo-w420-h420/samsung-m8-ls32bm80b.webp',
        price: 65,
        countInStock: 5,
        brand: 'Poco',
        rating: 4.5,
        numReviews: 10,
        description: 'Smart monitor',
      },
      {
        
        name: 'Dell P3223QE',
        slug: 'motorola-edge-ultra',
        category: 'Smartphones',
        image: 'https://cdn1.smartprix.com/rx-i6GMu55sc-w420-h420/dell-p3223qe-32-inch.webp',
        price: 65,
        countInStock: 5,
        brand: 'Motorola',
        rating: 4.5,
        numReviews: 10,
        description: 'LED Monitor',
      },
      {
        
        name: 'Zebronics Zeb-Juke Bar',
        slug: 'realme-gt-2',
        category: 'Smartphones',
        image: 'https://cdn1.smartprix.com/rx-iKmmY1zkc-w420-h420/zebronics-zeb-juke-b.webp',
        price: 65,
        countInStock: 5,
        brand: 'Realme',
        rating: 4.5,
        numReviews: 10,
        description: 'Zebronics',
      },
      {
        
        name: 'Sony HT-S40R',
        slug: 'xiaomi-12-ultra',
        category: 'Smartphones',
        image: 'https://cdn1.smartprix.com/rx-iK8qfNamX-w420-h420/sony-ht-s40r-600w-so.webp',
        price: 65,
        countInStock: 5,
        brand: 'Redmi',
        rating: 4.5,
        numReviews: 10,
        description: 'Sony',
      },
    ],
  };
  export default data;
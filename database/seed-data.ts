import bcrypt from 'bcryptjs';

interface SeedProduct {
  description: string;
  images: string[];
  inStock: number;
  price: number;
  sizes: ValidSizes[];
  slug: string;
  tags: string[];
  title: string;
  type: ValidTypes;
  gender: 'men' | 'women' | 'kid' | 'unisex';
}

interface SeedUser {
  name: string;
  email: string;
  password: string;
  role: 'admin' | 'client';
}

type ValidSizes = 'XS' | 'S' | 'M' | 'L' | 'XL' | 'XXL' | 'XXXL';
type ValidTypes = 'shirts' | 'pants' | 'hoodies' | 'hats';

interface SeedData {
  users: SeedUser[];
  products: SeedProduct[];
}

export const initialData: SeedData = {
  users: [
    {
      name: 'Srdjan Coralic',
      email: 'srdjan@gmail.com',
      password: bcrypt.hashSync('123456'),
      role: 'admin',
    },
    {
      name: 'Test User',
      email: 'test@gmail.com',
      password: bcrypt.hashSync('123456'),
      role: 'client',
    },
  ],
  products: [
    {
      description:
        "Inspired by our fully integrated home solar and storage system, the Tesla Solar Roof Tee advocates for clean, sustainable energy wherever you go. Designed for fit, comfort and style, the tee features an aerial view of our seamless Solar Roof design on the front with our signature T logo above 'Solar Roof' on the back. Made from 100% Peruvian cotton.",
      images: ['1703767-00-A_0_2000.jpg', '1703767-00-A_1.jpg'],
      inStock: 15,
      price: 35,
      sizes: ['S', 'M', 'L', 'XL'],
      slug: 'men_solar_roof_tee',
      type: 'shirts',
      tags: ['shirt'],
      title: "Men's Solar Roof Tee",
      gender: 'men',
    },
    {
      description:
        "Inspired by the world’s most unlimited resource, the Let the Sun Shine Tee highlights our fully integrated home solar and storage system. Designed for fit, comfort and style, the tee features a sunset graphic along with our Tesla wordmark on the front and our signature T logo printed above 'Solar Roof' on the back. Made from 100% Peruvian cotton.",
      images: ['1700280-00-A_0_2000.jpg', '1700280-00-A_1.jpg'],
      inStock: 17,
      price: 35,
      sizes: ['XS', 'S', 'XL', 'XXL'],
      slug: 'men_let_the_sun_shine_tee',
      type: 'shirts',
      tags: ['shirt'],
      title: "Men's Let the Sun Shine Tee",
      gender: 'men',
    },

    {
      description:
        "Designed to celebrate Tesla's incredible performance mode, the Plaid Mode Tee features great fit, comfort and style. Made from 100% cotton, it's the next best thing to riding shotgun at the Nürburgring.",
      images: ['1549268-00-A_0_2000.jpg', '1549268-00-A_2.jpg'],
      inStock: 82,
      price: 35,
      sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
      slug: 'men_plaid_mode_tee',
      type: 'shirts',
      tags: ['shirt'],
      title: "Men's Plaid Mode Tee",
      gender: 'men',
    },

    {
      description:
        'Inspired by Tesla Battery Day and featuring the unveiled tabless battery cell, Battery Day Tee celebrates the future of energy storage and cell manufacturing. Designed for fit, comfort and style, Battery Day Tee is made from 100% cotton with a stylized cell printed across the chest. Made in Peru.',
      images: ['1633802-00-A_0_2000.jpg', '1633802-00-A_2.jpg'],
      inStock: 5,
      price: 30,
      sizes: ['XS', 'S', 'XXL'],
      slug: 'men_battery_day_tee',
      type: 'shirts',
      tags: ['shirt'],
      title: "Men's Battery Day Tee",
      gender: 'men',
    },

    {
      description:
        'Introducing the Tesla Chill Collection. The Men’s Chill Quarter Zip Pullover has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The pullover features subtle thermoplastic polyurethane Tesla logos on the left chest and below the back collar, as well as a custom matte zipper pull. Made from 60% cotton and 40% recycled polyester.',
      images: ['1740140-00-A_0_2000.jpg', '1740140-00-A_1.jpg'],
      inStock: 7,
      price: 85,
      sizes: ['XS', 'S', 'M'],
      slug: 'men_chill_quarter_zip_pullover_-_gray',
      type: 'shirts',
      tags: ['shirt'],
      title: "Men's Chill Quarter Zip Pullover - Gray",
      gender: 'men',
    },

    {
      description:
        'As with the iconic Tesla logo, the Cybertruck Graffiti Hoodie is a classic in the making. Unisex style featuring soft fleece and an adjustable, jersey-lined hood for comfortable coverage.',
      images: ['7654420-00-A_0_2000.jpg', '7654420-00-A_1_2000.jpg'],
      inStock: 13,
      price: 60,
      sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
      slug: 'cybertruck_graffiti_hoodie',
      type: 'hoodies',
      tags: ['hoodie'],
      title: 'Cybertruck Graffiti Hoodie',
      gender: 'unisex',
    },

    {
      description:
        'The Relaxed T Logo Hat is a classic silhouette combined with modern details, featuring a 3D T logo and a custom metal buckle closure. The ultrasoft design is flexible and abrasion resistant, while the inner sweatband includes quilted padding for extra comfort and moisture wicking. The visor is fully made from recycled plastic bottles. 100% Cotton.',
      images: ['1740417-00-A_0_2000.jpg', '1740417-00-A_1.jpg'],
      inStock: 13,
      price: 35,
      sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
      slug: 'thermal_cuffed_beanie',
      type: 'hats',
      tags: ['hats'],
      title: 'Thermal Cuffed Beanie',
      gender: 'unisex',
    },

    {
      description:
        "Designed for style and comfort, the ultrasoft Women's T Logo Short Sleeve Scoop Neck Tee features a tonal 3D silicone-printed T logo on the left chest. Made of 50% Peruvian cotton and 50% Peruvian viscose.",
      images: ['8765090-00-A_0_2000.jpg', '8765090-00-A_1.jpg'],
      inStock: 30,
      price: 35,
      sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
      slug: 'women_t_logo_short_sleeve_scoop_neck_tee',
      type: 'shirts',
      tags: ['shirt'],
      title: "Women's T Logo Short Sleeve Scoop Neck Tee",
      gender: 'women',
    },

    {
      description:
        "Inspired by our popular home battery, the Tesla Powerwall Tee is made from 100% cotton and features the phrase 'Pure Energy' under our signature logo in the back. Designed for fit, comfort and style, the exclusive tee promotes sustainable energy in any",
      images: ['9877040-00-A_0_2000.jpg', '9877040-00-A_1.jpg'],
      inStock: 10,
      price: 130,
      sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
      slug: 'women_powerwall_tee',
      type: 'shirts',
      tags: ['shirt'],
      title: 'Women’s Powerwall Tee',
      gender: 'women',
    },

    {
      description:
        'The Kids Scribble T Logo Tee is made from 100% Peruvian cotton and features a Tesla T sketched logo for every young artist to wear.',
      images: ['8529312-00-A_0_2000.jpg', '8529312-00-A_1.jpg'],
      inStock: 0,
      price: 25,
      sizes: ['XS', 'S', 'M'],
      slug: 'kids_scribble_t_logo_tee',
      type: 'shirts',
      tags: ['shirt'],
      title: 'Kids Scribble T Logo Tee',
      gender: 'kid',
    },
    {
      description:
        'The Kids Cybertruck Tee features the iconic Cybertruck graffiti wordmark and is made from 100% Peruvian cotton for maximum comfort.',
      images: ['8529342-00-A_0_2000.jpg', '8529342-00-A_1.jpg'],
      inStock: 10,
      price: 25,
      sizes: ['XS', 'S', 'M'],
      slug: 'kids_cybertruck_tee',
      type: 'shirts',
      tags: ['shirt'],
      title: 'Kids Cybertruck Tee',
      gender: 'kid',
    },
    {
      description:
        "The refreshed Kids Racing Stripe Tee is made from 100% Peruvian cotton, featuring a newly enhanced racing stripe with a brushed Tesla wordmark that's perfect for any speed racer.",
      images: ['8529354-00-A_0_2000.jpg', '8529354-00-A_1.jpg'],
      inStock: 10,
      price: 30,
      sizes: ['XS', 'S', 'M'],
      slug: 'kids_racing_stripe_tee',
      type: 'shirts',
      tags: ['shirt'],
      title: 'Kids Racing Stripe Tee',
      gender: 'kid',
    },
  ],
};

import heroDiningImg from '../assets/images/hero_restaurant_dining_1791702917515.jpg';
import staffHospitalityImg from '../assets/images/staff_hospitality_1791702935931.jpg';
import royalThaliImg from '../assets/images/indian_veg_thali_1791702953097.jpg';
import crispDosaImg from '../assets/images/south_indian_dosa_1791702983000.jpg';
import paneerButterMasalaImg from '../assets/images/paneer_butter_masala_1791703001677.jpg';

export interface MenuItem {
  id: string;
  name: string;
  hindiName?: string;
  category: 'north-indian' | 'breads' | 'rice-biryani' | 'south-indian' | 'starters' | 'beverages';
  price: number;
  description: string;
  image: string;
  isPopular?: boolean;
  isChefSpecial?: boolean;
  jainAvailable?: boolean;
  spiciness?: 'Mild' | 'Medium' | 'Spicy';
}

export interface Review {
  id: string;
  name: string;
  role: string;
  rating: number;
  date: string;
  comment: string;
  favoriteDish: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: string;
  description: string;
  image: string;
}

export const RESTAURANT_INFO = {
  name: 'Apna Swad Pure Veg Restaurant',
  hindiTag: 'अपना स्वाद शुद्ध शाकाहारी',
  tagline: 'Pure Veg. Pure Happiness.',
  subtitle:
    'Enjoy the authentic taste of India with delicious vegetarian food, fresh ingredients, and the warmth of Indian hospitality.',
  vegBadge: '100% Pure Vegetarian',
  address: 'Shop No. 14–16, Ground Floor, Shanti Heights, Near City Mall, MG Road, Pune, Maharashtra 411001',
  addressNote: 'Demonstration Address (customizable)',
  phone: '+91 989898989',
  phoneAlt: '+91 989898989',
  phoneNote: 'Demonstration Phone Numbers',
  whatsapp: '+91 989898989',
  whatsappMessage: 'Namaste Apna Swad! I would like to inquire about a table reservation / menu at your restaurant.',
  email: 'reservations@apnaswadpureveg.com',
  hours: {
    lunch: '11:30 AM – 3:45 PM',
    dinner: '7:00 PM – 11:00 PM',
    days: 'Open All 7 Days (Including Festival Holidays)',
  },
  social: {
    instagram: '@apnaswadpureveg',
    facebook: 'ApnaSwadPureVeg',
  },
  images: {
    hero: heroDiningImg,
    staff: staffHospitalityImg,
    thali: royalThaliImg,
    dosa: crispDosaImg,
    paneer: paneerButterMasalaImg,
  },
};

export const MENU_CATEGORIES = [
  { id: 'all', label: 'All Dishes' },
  { id: 'north-indian', label: 'North Indian' },
  { id: 'indian-breads', label: 'Indian Breads' },
  { id: 'rice-biryani', label: 'Rice & Biryani' },
  { id: 'south-indian', label: 'South Indian' },
  { id: 'starters', label: 'Starters' },
  { id: 'beverages', label: 'Beverages' },
] as const;

export const MENU_ITEMS: MenuItem[] = [
  // North Indian
  {
    id: 'paneer-butter-masala',
    name: 'Paneer Butter Masala',
    hindiName: 'पनीर बटर मसाला',
    category: 'north-indian',
    price: 220,
    description: 'Fresh cottage cheese cubes simmered in a velvety, buttery tomato and cashew gravy flavored with kasuri methi.',
    image: paneerButterMasalaImg,
    isPopular: true,
    jainAvailable: true,
    spiciness: 'Mild',
  },
  {
    id: 'shahi-paneer',
    name: 'Shahi Paneer',
    hindiName: 'शाही पनीर',
    category: 'north-indian',
    price: 240,
    description: 'Royal preparation of tender paneer cubes in a rich, mildly sweet almond-cashew white gravy with cardamom aroma.',
    image: 'https://images.unsplash.com/photo-1631452180519-c014fe946bc7?auto=format&fit=crop&w=700&q=80',
    isChefSpecial: true,
    jainAvailable: true,
    spiciness: 'Mild',
  },
  {
    id: 'dal-tadka',
    name: 'Dal Tadka',
    hindiName: 'दाल तड़का',
    category: 'north-indian',
    price: 150,
    description: 'Slow-cooked yellow lentils tempered twice with desi ghee, cumin seeds, garlic, red chillies, and fresh coriander.',
    image: 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=700&q=80',
    isPopular: true,
    jainAvailable: true,
    spiciness: 'Medium',
  },
  {
    id: 'veg-kolhapuri',
    name: 'Veg Kolhapuri',
    hindiName: 'वेज कोल्हापुरी',
    category: 'north-indian',
    price: 190,
    description: 'Assorted seasonal vegetables tossed in a spicy, fiery Maharashtrian roasted coconut and red chilli masala.',
    image: 'https://images.unsplash.com/photo-1585937421612-70a008356fbe?auto=format&fit=crop&w=700&q=80',
    spiciness: 'Spicy',
  },
  {
    id: 'apna-swad-royal-thali',
    name: 'Apna Swad Special Thali',
    hindiName: 'अपना स्वाद स्पेशल थाली',
    category: 'north-indian',
    price: 260,
    description: 'Complete family feast: Paneer sabzi, seasonal veg, Dal Tadka, Jeera Rice, 2 Butter Phulkas or Naan, Papad, Raita, and Gulab Jamun.',
    image: royalThaliImg,
    isChefSpecial: true,
    isPopular: true,
    jainAvailable: true,
    spiciness: 'Medium',
  },

  // Indian Breads
  {
    id: 'butter-roti',
    name: 'Butter Roti',
    hindiName: 'बटर रोटी',
    category: 'breads',
    price: 25,
    description: 'Traditional whole wheat flatbread made in a clay tandoor and brushed with fresh desi butter.',
    image: 'https://images.unsplash.com/photo-1505253758473-96b3015f27eb?auto=format&fit=crop&w=700&q=80',
    jainAvailable: true,
  },
  {
    id: 'butter-naan',
    name: 'Butter Naan',
    hindiName: 'बटर नान',
    category: 'breads',
    price: 45,
    description: 'Fluffy, pillowy leavened bread baked fresh on order in our high-heat clay tandoor, topped with butter.',
    image: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=700&q=80',
    isPopular: true,
    jainAvailable: true,
  },
  {
    id: 'garlic-naan',
    name: 'Garlic Naan',
    hindiName: 'गार्लिक नान',
    category: 'breads',
    price: 65,
    description: 'Soft tandoori naan encrusted with minced roasted garlic cloves, fresh green coriander, and melted butter.',
    image: 'https://images.unsplash.com/photo-1626074353765-517a681e40be?auto=format&fit=crop&w=700&q=80',
    isPopular: true,
  },

  // Rice & Biryani
  {
    id: 'jeera-rice',
    name: 'Jeera Rice',
    hindiName: 'जीरा राइस',
    category: 'rice-biryani',
    price: 120,
    description: 'Aromatic long-grain basmati rice tempered with golden roasted cumin seeds, ghee, and whole spices.',
    image: 'https://images.unsplash.com/photo-1512058564366-18510be2db19?auto=format&fit=crop&w=700&q=80',
    jainAvailable: true,
  },
  {
    id: 'veg-biryani',
    name: 'Veg Dum Biryani',
    hindiName: 'वेज दम बिरयानी',
    category: 'rice-biryani',
    price: 180,
    description: 'Layered basmati rice dum-cooked in a sealed handi with farm vegetables, saffron, mint, and house spices. Served with boondi raita.',
    image: 'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&w=700&q=80',
    isPopular: true,
    isChefSpecial: true,
    spiciness: 'Medium',
  },
  {
    id: 'veg-fried-rice',
    name: 'Veg Fried Rice',
    hindiName: 'वेज फ्राइड राइस',
    category: 'rice-biryani',
    price: 150,
    description: 'Wok-tossed rice with finely diced carrots, beans, bell peppers, spring onion, and mild soya sauce in Indo-Chinese style.',
    image: 'https://images.unsplash.com/photo-1603133872878-684f208fb84b?auto=format&fit=crop&w=700&q=80',
    spiciness: 'Mild',
  },

  // South Indian
  {
    id: 'masala-dosa',
    name: 'Masala Dosa',
    hindiName: 'मसाला डोसा',
    category: 'south-indian',
    price: 100,
    description: 'Crisp golden crepe made from fermented rice-lentil batter, filled with spiced tempered potato masala. Served with hot sambar and chutneys.',
    image: crispDosaImg,
    isPopular: true,
    jainAvailable: true,
    spiciness: 'Medium',
  },
  {
    id: 'idli-sambar',
    name: 'Idli Sambar (2 Pcs)',
    hindiName: 'इडली सांभर',
    category: 'south-indian',
    price: 70,
    description: 'Pillowy soft steamed rice cakes served submerged in aromatic piping hot lentil vegetable sambar with fresh coconut chutney.',
    image: 'https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=700&q=80',
    jainAvailable: true,
    spiciness: 'Mild',
  },
  {
    id: 'medu-vada',
    name: 'Medu Vada (2 Pcs)',
    hindiName: 'मेदू वड़ा',
    category: 'south-indian',
    price: 80,
    description: 'Deep-golden crispy doughnut-shaped lentil fritters with crushed black pepper, ginger, and curry leaves. Accompanied by tomato and coconut chutneys.',
    image: 'https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?auto=format&fit=crop&w=700&q=80',
    isPopular: true,
    spiciness: 'Mild',
  },

  // Starters
  {
    id: 'paneer-tikka',
    name: 'Paneer Tikka',
    hindiName: 'पनीर टिक्का',
    category: 'starters',
    price: 200,
    description: 'Succulent cubes of fresh paneer marinated in hung curd, Kashmiri chilli, and tandoori spices, char-grilled to perfection.',
    image: 'https://images.unsplash.com/photo-1599488615731-7e5c2823ff28?auto=format&fit=crop&w=700&q=80',
    isPopular: true,
    isChefSpecial: true,
    jainAvailable: true,
    spiciness: 'Medium',
  },
  {
    id: 'veg-manchurian',
    name: 'Veg Manchurian Dry',
    hindiName: 'वेज मंचूरियन',
    category: 'starters',
    price: 160,
    description: 'Crispy minced vegetable balls tossed in a tangy garlic, ginger, and dark soy sauce with diced capsicum.',
    image: 'https://images.unsplash.com/photo-1585032226651-759b368d7246?auto=format&fit=crop&w=700&q=80',
    spiciness: 'Medium',
  },
  {
    id: 'hara-bhara-kebab',
    name: 'Hara Bhara Kebab',
    hindiName: 'हरा भरा कबाब',
    category: 'starters',
    price: 150,
    description: 'Pan-fried nutritious patties made of blanched spinach, green peas, and paneer, delicately spiced and crowned with a roasted cashew.',
    image: 'https://images.unsplash.com/photo-1606471191009-63994c53433b?auto=format&fit=crop&w=700&q=80',
    jainAvailable: true,
    spiciness: 'Mild',
  },

  // Beverages
  {
    id: 'masala-chaas',
    name: 'Masala Chaas',
    hindiName: 'मसाला छाछ',
    category: 'beverages',
    price: 40,
    description: 'Refreshing spiced Indian buttermilk blended with roasted cumin, black salt, fresh mint, and ginger. Ideal digestive accompaniment.',
    image: 'https://images.unsplash.com/photo-1556881286-fc6915169721?auto=format&fit=crop&w=700&q=80',
    isPopular: true,
  },
  {
    id: 'fresh-lime-soda',
    name: 'Fresh Lime Soda',
    hindiName: 'फ्रेश लाइम सोडा',
    category: 'beverages',
    price: 60,
    description: 'Freshly squeezed lemon juice with chilled sparkling soda, served sweet, salted, or mixed according to your preference.',
    image: 'https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=700&q=80',
  },
  {
    id: 'sweet-lassi',
    name: 'Sweet Lassi',
    hindiName: 'मीठी लस्सी',
    category: 'beverages',
    price: 70,
    description: 'Thick, traditional Punjabi sweet yogurt drink whipped to frothy richness and topped with clotted malai and crushed pistachios.',
    image: 'https://images.unsplash.com/photo-1527661591475-527312dd65f5?auto=format&fit=crop&w=700&q=80',
    isPopular: true,
    jainAvailable: true,
  },
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'gal-interior',
    title: 'Warm Family Dining Ambiance',
    category: 'Restaurant Interior',
    description: 'Spacious, clean wooden tables, comfortable booth seating, and soft warm lighting for family comfort.',
    image: heroDiningImg,
  },
  {
    id: 'gal-thali',
    title: 'Authentic Indian Pure Veg Thali',
    category: 'Royal Thali',
    description: 'Our signature steel thali featuring slow-cooked dal, paneer sabzi, steaming rice, hot puris, and sweets.',
    image: royalThaliImg,
  },
  {
    id: 'gal-paneer',
    title: 'Rich Paneer Butter Masala',
    category: 'North Indian Delights',
    description: 'Fresh cottage cheese crafted daily, simmered in a silky tomato gravy with aromatic kasuri methi.',
    image: paneerButterMasalaImg,
  },
  {
    id: 'gal-dosa',
    title: 'Crispy Butter Masala Dosa',
    category: 'South Indian Specialties',
    description: 'Freshly rolled crispy golden dosa served on a clean banana leaf with three authentic coastal chutneys and sambar.',
    image: crispDosaImg,
  },
  {
    id: 'gal-family',
    title: 'Families Dining Together',
    category: 'Happy Customers',
    description: 'Multi-generational families, students, and office groups enjoying relaxed, authentic meals.',
    image: heroDiningImg,
  },
  {
    id: 'gal-staff',
    title: 'Welcoming Staff & Hospitality',
    category: 'Our Service Team',
    description: 'Our attentive team in clean uniforms serving piping hot tandoori rotis with traditional Indian warmth.',
    image: staffHospitalityImg,
  },
];

export const SAMPLE_REVIEWS: Review[] = [
  {
    id: 'rev-1',
    name: 'Ramesh & Sunita Sharma',
    role: 'Family Dining · Regulars since 2021',
    rating: 5,
    date: 'Last Sunday',
    comment:
      'We visited with my parents and children for our Sunday dinner. The Paneer Butter Masala and Dal Tadka taste just like homestyle food without excess oil. Clean seating and quick service even during rush hours.',
    favoriteDish: 'Paneer Butter Masala & Garlic Naan',
  },
  {
    id: 'rev-2',
    name: 'Priya Kulkarni',
    role: 'College Student · FC Road Campus',
    rating: 5,
    date: '3 days ago',
    comment:
      'My friends and I drop by at least twice a week after lectures. The Masala Dosa is super crispy and priced at just ₹100! Very pocket-friendly and the place is spotless. Sweet Lassi is a must-have.',
    favoriteDish: 'Masala Dosa & Sweet Lassi',
  },
  {
    id: 'rev-3',
    name: 'Rajesh & Neha Patel',
    role: 'Jain Family Dining',
    rating: 5,
    date: '1 week ago',
    comment:
      'Finding 100% pure veg restaurants that prepare genuine Jain food with separate care is hard. Apna Swad accommodated our request effortlessly for Dal, Shahi Paneer, and Jeera Rice. Truly grateful!',
    favoriteDish: 'Jain Shahi Paneer & Jeera Rice',
  },
  {
    id: 'rev-4',
    name: 'Aman Verma',
    role: 'Local Office Group Lunch',
    rating: 5,
    date: '2 weeks ago',
    comment:
      'Our team of 6 ordered the Apna Swad Special Thali. Huge portions, piping hot butter phulkas served straight from tandoor, and the chaas is thoroughly refreshing. Great value for medium budget.',
    favoriteDish: 'Apna Swad Special Thali & Chaas',
  },
  {
    id: 'rev-5',
    name: 'Deepa Iyer',
    role: 'Solo Diner & Weekend Foodie',
    rating: 5,
    date: '3 weeks ago',
    comment:
      'The Medu Vada was crisp on the outside, soft inside with freshly grated coconut chutney. Staff greeted with a warm namaste and made me feel at home. Highly recommended for genuine vegetarian food.',
    favoriteDish: 'Idli Sambar & Medu Vada',
  },
];

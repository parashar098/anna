export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  image: string;
  author: string;
  authorImage: string;
  date: string;
  content: string;
};

export const blogPosts: BlogPost[] = [
  {
    slug: 'how-food-donation-impacts-communities',
    title: 'How Food Donation Impacts Communities',
    excerpt: 'Explore the profound impact of food donation on local communities, from reducing hunger to fostering a sense of togetherness and support.',
    image: 'blog-1',
    author: 'Alex Johnson',
    authorImage: 'team-1',
    date: '2024-05-20',
    content: `
      <p>Food donation is more than just providing a meal; it's a powerful act of community support that has far-reaching effects. When surplus food is redistributed to those in need, it tackles the immediate issue of hunger while also addressing broader social and environmental challenges.</p>
      <p>Firstly, it significantly reduces food waste. Tons of perfectly edible food are discarded daily, contributing to landfill and greenhouse gas emissions. By redirecting this food, we not only feed people but also contribute to a more sustainable planet.</p>
      <h3 class="font-headline text-2xl font-semibold my-4">The Ripple Effect of a Single Meal</h3>
      <p>Secondly, access to nutritious food is a cornerstone of health and well-being. For families struggling financially, a donated meal can free up resources for other essential needs like housing, healthcare, and education. It provides children with the energy they need to learn and adults with the strength to work, breaking the cycle of poverty.</p>
      <p>Finally, the act of donating and volunteering brings communities together. It fosters a spirit of generosity and collaboration, connecting people from all walks of life under a common cause. It's a testament to the idea that together, we can build a world where everyone has enough to eat.</p>
    `
  },
  {
    slug: 'volunteer-spotlight-marias-journey',
    title: 'Volunteer Spotlight: Maria\'s Journey with AnnaSewa',
    excerpt: 'Meet Maria, one of our most dedicated volunteers. Read about her inspiring journey and what motivates her to give back to the community.',
    image: 'blog-2',
    author: 'Priya Singh',
    authorImage: 'team-4',
    date: '2024-05-15',
    content: `
      <p>Every non-profit is powered by the passion of its volunteers, and at AnnaSewa, we are incredibly fortunate to have people like Maria Garcia. Maria joined us six months ago, and her dedication has already made a huge impact.</p>
      <p>"I saw so much food being wasted in my neighborhood, while I knew people were going hungry," Maria says. "Finding AnnaSewa felt like finding a solution. I knew I had to get involved."</p>
      <h3 class="font-headline text-2xl font-semibold my-4">More Than Just Deliveries</h3>
      <p>For Maria, volunteering is not just about picking up and dropping off food. "It's about the smiles," she explains. "When you deliver food to a local shelter and see the gratitude on people's faces, it's a feeling you can't describe. It's about connecting with my community and knowing I'm making a tangible difference."</p>
      <p>Maria's story is a reminder that every individual has the power to create change. We are immensely grateful for her hard work and positive spirit.</p>
    `
  },
  {
    slug: 'reducing-food-waste-in-urban-india',
    title: 'A Practical Guide to Reducing Waste in Urban India',
    excerpt: 'Urban centers are major contributors to food waste. This guide offers practical tips for city dwellers to reduce their food footprint and contribute to a sustainable future.',
    image: 'blog-3',
    author: 'Sam Chen',
    authorImage: 'team-3',
    date: '2024-05-10',
    content: `
      <p>In the bustling cities of India, the problem of food waste is more critical than ever. However, with a few conscious changes, urban residents can make a significant difference.</p>
      <h3 class="font-headline text-2xl font-semibold my-4">Smart Shopping and Storage</h3>
      <p>It starts at the source. Plan your meals and create a shopping list to avoid impulse buys. When you get home, store your produce correctly. Many fruits and vegetables last longer when stored properly. For example, keep potatoes in a cool, dark place, and separate ethylene-producing fruits (like bananas) from other produce.</p>
      <h3 class="font-headline text-2xl font-semibold my-4">Embrace Composting</h3>
      <p>Even with the best planning, some food scraps are inevitable. Instead of throwing them in the trash, consider composting. Many urban areas now have community composting programs, or you can start a small-scale compost bin on your balcony. This turns food waste into nutrient-rich soil for gardens.</p>
      <p>And, of course, for surplus food that's still perfectly good to eat, platforms like AnnaSewa provide a bridge to get it to those who need it most. Every small action contributes to a larger, positive impact.</p>
    `
  },
];

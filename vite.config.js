import { defineConfig } from 'vite';
import { resolve } from 'node:path';

const pages = [
  'index.html',
  'about/index.html',
  'properties/index.html',
  'properties/sunrise-domain/index.html',
  'properties/pine-havenly/index.html',
  'properties/maple-sanctuary/index.html',
  'properties/luna-heightside/index.html',
  'properties/palm-eternity/index.html',
  'properties/oak-tranquilo/index.html',
  'properties/cedar-retreats/index.html',
  'properties/river-serenity/index.html',
  'properties/hill-meadows/index.html',
  'properties/willow-residence/index.html',
  'blog/index.html',
  'blog/designing-the-communities-for-the-future-generations/index.html',
  'blog/future-of-urban-real-estate-sustainable-community-growth/index.html',
  'blog/greener-spaces-and-the-rise-of-eco-cities-worldwide/index.html',
  'blog/redefining-urban-luxury-the-modern-city-lifestyle/index.html',
  'blog/evolving-skylines-the-human-centric-design-future/index.html',
  'blog/smart-homes-and-the-evolution-of-the-modern-comfort/index.html',
  'contact/index.html',
  '404/index.html',
];

export default defineConfig({
  build: {
    rollupOptions: {
      input: Object.fromEntries(
        pages.map((page) => [page.replace(/\/index\.html$/, '') || 'home', resolve(__dirname, page)]),
      ),
    },
  },
});

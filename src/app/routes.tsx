import { createBrowserRouter } from 'react-router';
import { Layout } from './components/Layout';
import { Home } from './pages/Home';
import { Tickets } from './pages/Tickets';
import { Contact } from './pages/Contact';
import { Gallery } from './pages/Gallery';
import { PackingList } from './pages/PackingList';

export const router = createBrowserRouter(
  [
    {
      path: '/',
      Component: Layout,
      children: [
        { index: true, Component: Home },
        { path: 'tickets', Component: Tickets },
        { path: 'gallery', Component: Gallery },
        { path: 'contact', Component: Contact },
        { path: 'packing-list', Component: PackingList },
      ],
    },
  ],
  { basename: import.meta.env.BASE_URL.replace(/\/$/, '') || '/' }
);
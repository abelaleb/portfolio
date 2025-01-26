import Hero from '@/components/Hero';
import Grid from '@/components/Grid';
import { FloatingNav } from '@/components/ui/FloatingNav';
import { FaHome, FaUser } from 'react-icons/fa';
import RecentProjects from '@/components/RecentProjects';
export default function Home() {
  const navItems = [
    {
      name: 'About',
      link: '/#about',
      icon: <FaHome />,
    },
    { name: 'Projects', link: '/#project', icon: <FaUser /> },
    { name: 'Testimonials', link: '/#testimonials', icon: <FaUser /> },
    {
      name: 'Contact',
      link: '/#contact',
      icon: <FaUser />,
    },
  ];
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5 ">
      <div className="max-w-7xl w-full ">
        <FloatingNav navItems={navItems} />
        <Hero />
        <Grid />
        <RecentProjects />
      </div>
    </main>
  );
}

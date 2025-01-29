import Hero from '@/components/Hero';
import Grid from '@/components/Grid';
import { FloatingNav } from '@/components/ui/FloatingNav';
import { FaHome, FaUser } from 'react-icons/fa';
import RecentProjects from '@/components/RecentProjects';
import Experience from '@/components/Experience';
import Footer from '@/components/Footer';
export default function Home() {
  const navItems = [
    {
      name: 'About',
      link: '/#about',
      icon: <FaHome />,
    },
    { name: 'Projects', link: '/#project', icon: <FaUser /> },
    { name: 'Experience', link: '/#experience', icon: <FaUser /> },
    {
      name: 'Contact',
      link: '/#contact',
      icon: <FaUser />,
    },
  ];
  return (
    <main
      className="relative bg-white flex justify-center items-center flex-col overflow-hidden    "
    >
      {/* sm:px-10 px-5 mx-auto*/}
      
      <div className=" w-full ">
        <FloatingNav navItems={navItems} />
        <Hero />
        <Grid />
        <RecentProjects />
        <Experience />
        <Footer />
      </div>
    </main>
  );
}

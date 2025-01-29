import { gridItems } from '@/data';
import { BentoGrid, BentoGridItem } from './ui/BentoGrid';
const Grid = () => {
  return (
    <section id="about" className="bg-[#0d1c22] p-20 sm:px-10 px-5 mx-auto">
      <h1 className="heading text-white">About Me</h1>
      <BentoGrid className="w-full py-20">
        {gridItems.map((item, i) => (
          <BentoGridItem
            id={item.id}
            key={i}
            title={item.title}
            description={item.description}
            // remove icon prop
            // remove original classname condition
            className={item.className}
            img={item.img}
            imgClassName={item.imgClassName}
            titleClassName={item.titleClassName}
            spareImg={item.spareImg}
          />
        ))}
      </BentoGrid>
    </section>
  );
};

export default Grid;

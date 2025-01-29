import { gridItems } from '@/data';
import { BentoGrid, BentoGridItem } from './ui/BentoGrid';
const Grid = () => {
  return (
    <section id="about" className="bg-white p-20 md:px-20 px-5 mx-auto md:pt-20">
      <h1 className="heading text-[#0d1c22] pt-20 ">About Me</h1>
      <BentoGrid className="w-full pt-20 ">
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

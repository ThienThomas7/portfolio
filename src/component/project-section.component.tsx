import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { responsive } from '../constant/responsive';
const className = {
  wrapperStyle: `h-auto ${responsive.paddingY} ${responsive.paddingX}`,
  gridStyle:
    'md:mt-6 grid grid-rows-4 grid-cols-1 md:grid-rows-2 md:grid-cols-2  w-full h-[120vh] items-center',
  buttonWrapperStyle: 'h-auto mt-4 md:mt-2 md:flex md:float-none',
  buttonStyle:
    'transition duration-500 ease-in-out shadow-md hover:shadow-xl shadow-blue-500/50 hover:shadow-blue-500/50 bg-gradient-to-b from-[#4169E1] to-[#7441E1] mx-auto text-slate-100 p-2 rounded-xl cursor-pointer',
  img: ' object-scale-down w-[55%] h-[90%] md:w-[90%] md:h-[60%] lg:w-[80%] lg:h-[66%] rounded-md'
};

const imageList = [
  {
    src: require('../assets/image/ambros.png'),
    link: 'https://ambros.app',
    title: 'Ambros App',
    description: 'All-in-one Mobile app inspire Web3'
  },
  {
    src: require('../assets/image/exping.png'),
    link: '#',
    title: 'Exping',
    description: 'A chat app including some basics'
  },
  {
    src: require('../assets/image/coffee.png'),
    link: 'https://the-coffee-house-v1.netlify.app/',
    title: 'Coffee Web',
    description: 'Order your favorite drink online'
  },
  {
    src: require('../assets/image/technology.png'),
    link: 'https://github.com/Toan-Dang/framework_IS220.M11_14',
    title: 'E-commerce Web',
    description: 'Find your on-hand with best price'
  }
];
export const ProjectSection = () => {
  return (
    <div id="project" className={className.wrapperStyle}>
      <h1 className=" text-slate-100 text-3xl font-bold ml-6">Projects</h1>
      <div className={className.gridStyle}>
        {imageList.map((item: any, index: number) => (
          <ImgWithTitle
            url={item.src}
            title={item.title}
            key={index}
            description={item.description}
            index={index}
            link={item.link}
          />
        ))}
      </div>
    </div>
  );
};

const ImgWithTitle = (props: {
  url: string;
  title: string;
  link?: string;
  description: string;
  index: number;
}) => {
  const { title, url, link, description, index } = props;
  console.log(title, url, link, description, index);
  const reverseDir = index % 2 !== 0;
  const flexDir = reverseDir ? 'flex-row-reverse' : 'flex-row';
  const textAlign = reverseDir ? 'text-right' : '';
  return (
    <div className={`h-full flex ${flexDir} md:flex-col items-center md:justify-center`}>
      <img src={url} className={className.img} draggable={false} />
      <div className="md:mt-6 md:px-4 mx-4 md:mx-0">
        <h1
          className={`${textAlign} md:text-center text-2xl md:text-3xl lg:text-4xl text-white-100 font-bold `}>
          {title}
        </h1>
        <p
          className={`${textAlign} md:text-center text-white-100 mb-4 text-md md:text-lg lg:text-xl`}>
          {description}
        </p>
        <div
          className={`${reverseDir ? 'float-right' : 'flex-col'} ${className.buttonWrapperStyle} `}>
          <a className={className.buttonStyle} href={link} target="_blank" rel="noreferrer">
            Explore
          </a>
        </div>
      </div>
    </div>
  );
};

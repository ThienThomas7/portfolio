import { RiIcon } from '../assets/icons/icons';
import { responsive } from '../constant/responsive';

const className = {
  wrapperStyle: `h-auto ${responsive.paddingY} ${responsive.paddingX}`,
  gridStyle:
    'mt-4 md:mt-6 lg:mt-4 grid grid-rows-2 grid-cols-1 md:grid-rows-1 md:grid-cols-2 w-full h-[40vh] items-center space-y-6 md:space-x-2 md:space-y-0',
  buttonWrapperStyle: 'h-auto md:mt-2 md:flex md:float-none w-auto',
  buttonStyle:
    'transition duration-500 ease-in-out shadow-md hover:shadow-xl shadow-blue-500/50 hover:shadow-blue-500/50 bg-gradient-to-b from-[#4169E1] to-[#7441E1] mx-auto text-slate-100 p-2 rounded-xl cursor-pointer min-w-[65px] text-center',
  img: 'object-scale-down w-[35%] h-[80%] md:w-[70%] md:h-[50%] lg:w-[80%] lg:h-[50%] rounded-md'
};
const imageList = [
  {
    url: require('../assets/image/logo-uit-web-transparent.png'),
    title: 'UIT - VNU',
    description: '2019 - 2023',
    buttonTitle: 'Visit',
    link: 'https://uit.edu.vn'
  },
  {
    url: require('../assets/image/medal.png'),
    title: '8.49/10.0',
    description: 'GPA',
    buttonTitle: 'Detail',
    link: require('../assets/files/gpa.pdf')
  }
];

const EducationSection = () => {
  return (
    <div id="aducation" className={className.wrapperStyle}>
      <h1 className="text-slate-100 text-3xl font-bold ml-6">Education</h1>
      <div className={className.gridStyle}>
        <ImgWithTitle
          title={imageList[0].title}
          url={imageList[0].url}
          description={imageList[0].description}
          buttonTitle={imageList[0].buttonTitle}
          link={imageList[0].link}
        />
        <ImgWithTitle
          title={imageList[1].title}
          description={imageList[1].description}
          buttonTitle={imageList[1].buttonTitle}
          link={imageList[1].link}
          icon={<RiIcon.RiMedalFill size={125} color="#3b72f4" />}
        />
      </div>
    </div>
  );
};

export const ImgWithTitle = (props: {
  url?: string;
  title: string;
  description: string;
  buttonTitle: string;
  link: string;
  icon?: any;
}) => {
  const { url, title, buttonTitle, link, description, icon } = props;
  return (
    <div
      className={
        'h-full flex md:flex-col items-center justify-between md:justify-center px-4 md:px-0 hover:bg-black-900 duration-700 rounded-lg hover:shadow-xl hover:shadow-blue-500/50'
      }>
      {Boolean(url) && <img src={url} className={className.img} draggable={false} />}
      {Boolean(icon) && icon}
      <div className="flex-col md:flex-row justify-center items-center">
        <h1
          className={
            'md:mt-4 text-center text-2xl md:text-3xl lg:text-4xl text-white-100 font-bold'
          }>
          {title}
        </h1>
        <p className="text-center text-white-100 mb-4 text-md md:text-lg lg:text-xl">
          {description}
        </p>
      </div>
      <div className={`flex-col ${className.buttonWrapperStyle} `}>
        <a className={className.buttonStyle} href={link} target="_blank" rel="noreferrer">
          {buttonTitle}
        </a>
      </div>
    </div>
  );
};

export default EducationSection;

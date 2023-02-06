import AmbrosIcon from '../assets/icons/icon-ambros-svg.svg';
import { responsive } from '../constant/responsive';
import { Card } from './card.component';

const style = {
  wrapperStyle: `h-auto ${responsive.paddingX} ${responsive.paddingY} mt-10 md:mt-0 w-full md:w-3/4 lg:w-3/5 mx-auto`,
  cardStyle:
    'text-md md:text-xl xl:text-2xl h-auto min-h-[200px] md:min-h-[150px] text-slate-300 items-center rounded-xl justify-center flex text-center'
};
export const AboutSection = () => {
  return (
    <div id="about" className={style.wrapperStyle}>
      <h1 className="text-2xl md:text-4xl font-bold text-slate-100 text-center">About me</h1>
      <div className="h-3/4 mt-7 grid grid-rows-1 md:grid-cols-3 space-x-0 space-y-5 md:space-y-0 md:space-x-5">
        <Card divStyle={style.cardStyle}>
          <span>
            Last-year student at <br />
            <a className="font-bold" href="https://uit.edu.vn/">
              UIT - VNU
            </a>
          </span>
        </Card>
        <Card divStyle={style.cardStyle}>
          <span>
            GPA: <span className="font-bold">8.4</span>
          </span>
        </Card>
        <Card divStyle={style.cardStyle}>
          <span>
            <img src={AmbrosIcon} className={'w-20 h-20'} />
            Mobile Internship at <br />
            <a className="font-bold" href="https://ambrostech.com/">
              Ambros Technology
            </a>
          </span>
        </Card>
      </div>
    </div>
  );
};

import { useScrollPosition } from '@n8tb1t/use-scroll-position';
import React, { useState } from 'react';
import { Link } from 'react-scroll';
import { VSCIcon } from '../../assets/icons/icons';
import { responsive } from '../../constant/responsive';
import { globalStyle } from '../../constant/style';

const style = {
  viewStyle: `${responsive.paddingX} h-auto flex justify-between py-3`,
  listStyle: `${responsive.hidden} flex-row my-auto`,
  listItemStyle: `${responsive.textHeading} text-slate-300 flex mx-5 hover:text-slate-100 hover:cursor-pointer hover:scale-110 duration-500 duration-500`,
  responsiveListItemStyle: `${responsive.responsiveNavItem} text-slate-300 flex my-6 cursor-pointer`,
  iconStyle: 'text-slate-100 text-3xl font-italic',
  contactStyle: 'mt-auto',
  hambugerMenu: 'md:hidden'
};
const ListNavbar = (props: { responsive: boolean; callBack?: any }) => {
  const { responsive } = props;
  const listItemStyle = !responsive ? style.listItemStyle : style.responsiveListItemStyle;
  return (
    <React.Fragment>
      <ul
        className={
          !responsive
            ? style.listStyle
            : 'flex flex-col justify-center items-center w-full h-screen'
        }>
        <li className={listItemStyle}>
          <Link to="home" spy={true} smooth={true} onClick={props.callBack}>
            Home
          </Link>
        </li>
        <li className={listItemStyle}>
          <Link to="skill" spy={true} smooth={true} onClick={props.callBack} offset={-50}>
            Skill
          </Link>
        </li>
        <li className={listItemStyle}>
          <Link to="project" spy={true} smooth={true} onClick={props.callBack} offset={-50}>
            Projects
          </Link>
        </li>
        <li className={listItemStyle}>
          <Link to="aducation" spy={true} smooth={true} onClick={props.callBack} offset={-50}>
            Education
          </Link>
        </li>
        <li className={listItemStyle}>
          <Link to="contact" spy={true} smooth={true} onClick={props.callBack} offset={-50}>
            Hire Me
          </Link>
        </li>
      </ul>
    </React.Fragment>
  );
};

export const Navbar = () => {
  const [closeButtonVisible, setCloseButtonVisible] = useState(false);
  const [bgNavStyleOnScroll, setBgNavStyleOnScroll] = useState('bg-transparent');
  useScrollPosition(
    ({ prevPos, currPos }) => {
      if (currPos.y < -25 && bgNavStyleOnScroll === 'bg-transparent') {
        setBgNavStyleOnScroll('bg-black-500');
      } else if (currPos.y === 0) {
        setBgNavStyleOnScroll('bg-transparent');
      }
      console.log(prevPos.y, currPos.y);
    },
    [bgNavStyleOnScroll]
  );

  const renderMenuButton = () => {
    return (
      <button
        type="button"
        className={`${responsive.hiddenMd} z-50`}
        onClick={() => {
          setCloseButtonVisible((prevState) => !prevState);
        }}>
        {!closeButtonVisible && <VSCIcon.VscMenu size={30} className={'text-slate-100'} />}
        {closeButtonVisible && <VSCIcon.VscChromeClose size={30} className={'text-slate-100'} />}
      </button>
    );
  };

  return (
    <div
      className={`${responsive.sticky} ${bgNavStyleOnScroll} transition-colors duration-500 ease-in-out`}>
      <nav className={style.viewStyle}>
        <p className={style.iconStyle}>{!closeButtonVisible ? 'Thomas' : ''}</p>
        <ListNavbar responsive={false} />
        {renderMenuButton()}
      </nav>
      <div
        className={`${responsive.hiddenMd} ${responsive.paddingX} ${
          !closeButtonVisible ? 'hidden' : ''
        }
          absolute top-0 left-0 h-auto min-h-full w-full ${globalStyle.bgColor}`}>
        <ListNavbar responsive={true} callBack={() => setCloseButtonVisible(false)} />
      </div>
    </div>
  );
};

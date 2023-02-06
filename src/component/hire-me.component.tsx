import React, { useEffect, useRef, useState } from 'react';
import { BootstrapIcons, FaIcon, RiIcon, SimpleIcon, TiIcon } from '../assets/icons/icons';
import { responsive } from '../constant/responsive';
import emailjs from '@emailjs/browser';
const className = {
  wrapperStyle: `space-x-0 space-y-4 md:space-x-4 md:space-y-0 h-auto  grid grid-rows-2 grid-cols-1 md:grid-rows-1 md:grid-cols-2`,
  formWrapper:
    'border-x-[0.5px] border-b-[0.5px] border-b-zinc-500 border-x-zinc-500 bg-black-900 str:h-[57vh]  lg:h-[40vh] w-full lg:w-3/4 items-center justify-center xl:mx-auto pb-4 pt-2 px-2',
  indicatorBar:
    'mt-8 md:mt-6 h-8 rounded-tl-md rounded-tr-md w-full bg-zinc-700 border-[0.5px] border-b-black-900 border-x-zinc-500 border-t-zinc-500 flex flex-row items-center space-x-1.5 pl-3 w-full lg:w-3/4 xl:mx-auto',
  label: 'text-white-100 block mb-1 font-bold truncate',
  input: 'outline-none focus:outline-none w-full rounded-lg h-8 p-3 bg-stone-900 text-white-100',
  textArea: 'outline-none focus:outline-none w-full rounded-lg p-2 bg-stone-900 text-white-100',
  inputWrapper: 'mt-2 lg:mt-0',
  textAreaWrapper: 'mt-2',
  submitButton:
    'mx-auto transition duration-500 ease-in-out shadow-md hover:shadow-xl shadow-blue-500/50 hover:shadow-blue-500/50 bg-gradient-to-b from-[#4169E1] to-[#7441E1] text-slate-100 p-2 rounded-xl cursor-pointer min-w-[65px] text-center',
  iconWrapper: 'items-center flex  truncate mx-auto md:mx-0 md:w-auto',
  contactTitle: 'text-slate-100 text-xl lg:text-2xl font-bold truncate',
  contactDescription: 'lg:hidden xl:block text-slate-100 text-ssm truncate',
  iconHover: 'bg-transparent hover:bg-black-900 rounded-lg duration-700 ease-in-out md:w-auto',
  iconStyle: 'rounded-md p-1 border-2 rounded-lg'
};
const contactList = [
  {
    name: 'Telegram',
    link: 'https://t.me/thienthomas',
    simpleLink: 't.me/thienthomas',
    icon: FaIcon.FaTelegramPlane
  },
  {
    name: 'LinkedIn',
    link: 'https://www.linkedin.com/in/nngocthien0203/',
    simpleLink: 'linkedin.com/in/nngocthien0203',
    icon: RiIcon.RiLinkedinFill
  },
  {
    name: 'Email',
    link: 'mailto:thienthomas.work@gmail.com',
    simpleLink: 'thienthomas.work@gmail.com',
    icon: SimpleIcon.SiGmail
  },
  {
    name: 'Phone',
    link: 'tel:+84366485663',
    simpleLink: '+84366485663',
    icon: BootstrapIcons.BsTelephoneFill
  }
];
const HireMeSection = () => {
  return (
    <div id="contact" className={`${responsive.paddingX} ${responsive.paddingY} `}>
      <h1 className="text-slate-100 text-3xl font-bold ml-6">Contact</h1>
      <div className={className.wrapperStyle}>
        <div>
          <div className={className.indicatorBar}>
            <Button color="bg-red-700" />
            <Button color="bg-yellow-500" />
            <Button color="bg-lime-500" />
          </div>
          <div className={className.formWrapper}>
            <ContactForm />
          </div>
        </div>
        <div>
          <div className="flex flex-rows md:flex-cols items-center grid grid-cols-4 grid-rows-1 md:grid-cols-1 md:grid-rows-4 lg:grid-cols-2 lg:grid-rows-2 h-1/3 md:h-full ">
            {contactList.map((item: any, index: number) => {
              return (
                <ContactItem
                  key={index}
                  icon={<item.icon size={50} color={'fff'} className={className.iconStyle} />}
                  simpleLink={item.simpleLink}
                  link={item.link}
                  name={item.name}
                />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

const Button = (props: { color: string }) => {
  return <div className={`${props.color} w-4 h-4 rounded-full`}></div>;
};

const ContactForm = () => {
  const form = useRef<HTMLFormElement>(null);
  const [sentStatus, setSentStatus] = useState({ message: '', color: '' });
  const [email, setEmail] = useState('');
  const [emailWarning, setEmailWarning] = useState(false);
  const [company, setCompany] = useState('');
  const [companyWarning, setCompanyWarning] = useState(false);
  const [message, setMessage] = useState('');
  const [messageWarning, setMessageyWarning] = useState(false);

  const onChangeEmail = (event: any) => {
    setEmail(event.target.value);
    setSentStatus({ message: '', color: '' });

    Boolean(emailWarning) && setEmailWarning(false);
  };

  const onChangeCompany = (event: any) => {
    setCompany(event.target.value);
    setSentStatus({ message: '', color: '' });

    Boolean(companyWarning) && setCompanyWarning(false);
  };

  const onChangeMessage = (event: any) => {
    setMessage(event.target.value);
    setSentStatus({ message: '', color: '' });
    Boolean(messageWarning) && setMessageyWarning(false);
  };

  const sendEmail = (e: any) => {
    e.preventDefault();
    const currentForm = form.current;
    setSentStatus({ message: '', color: '' });
    if (currentForm === null) return;
    if (email === '' || company === '' || message === '') {
      setEmailWarning(email === '');
      setCompanyWarning(company === '');
      setMessageyWarning(message === '');
    } else {
      setEmailWarning(false);
      setCompanyWarning(false);
      setMessageyWarning(false);
      emailjs
        .sendForm('service_e8bfcvi', 'template_ywh1h6o', currentForm, 'rXrw4BpBErAE2Jw7d')
        .then(
          (result) => {
            if (result.text === 'OK')
              setSentStatus({
                message: "Thank you ! your email has been delivered, I'll contact you soon",
                color: 'text-[#4169E1]'
              });
          },
          (error) => {
            setSentStatus({
              message: 'Something went wrong, please try again later or you can manually e-mail me',
              color: 'text-red-700'
            });
          }
        );
    }
  };

  return (
    <form ref={form} onSubmit={sendEmail} className="w-full h-full px-4">
      <div className="grid grid-cols-1 grid-rows-2 lg:grid-cols-2 lg:grid-rows-1 lg:space-x-4">
        <div className={className.inputWrapper}>
          <label className={`${className.label} ${companyWarning}`} htmlFor="user_name">
            Your&nbsp;name&nbsp;/&nbsp;Company
            {Boolean(companyWarning) && (
              <RiIcon.RiErrorWarningFill className="ml-1 inline" color="b91c1c" />
            )}
          </label>
          <input
            type="text"
            className={className.input}
            name="user_name"
            onChange={onChangeCompany}
            value={company}
          />
        </div>
        <div className={className.inputWrapper}>
          <label className={`${className.label} ${emailWarning}`} htmlFor="email">
            Email
            {Boolean(emailWarning) && (
              <RiIcon.RiErrorWarningFill className="ml-1 inline" color="b91c1c" />
            )}
          </label>
          <input
            type="email"
            className={className.input}
            name="email"
            value={email}
            onChange={onChangeEmail}
          />
        </div>
      </div>
      <div className={className.textAreaWrapper}>
        <label className={`${className.label} ${messageWarning}`} htmlFor="message">
          Message
          {Boolean(messageWarning) && (
            <RiIcon.RiErrorWarningFill className="ml-1 inline" color="b91c1c" />
          )}
        </label>
        <textarea
          className={className.textArea}
          rows={7}
          name="message"
          value={message}
          onChange={onChangeMessage}
        />
      </div>
      <div className="mt-2 text-center">
        <button type="submit" className={className.submitButton}>
          Send
        </button>
      </div>
      {Boolean(sentStatus) && (
        <p className={`${sentStatus.color} text-center font-bold mt-2`}>{sentStatus.message}</p>
      )}
    </form>
  );
};
const ContactItem = (props: { icon: any; link: string; name: string; simpleLink: string }) => {
  const { icon, link, name, simpleLink } = props;
  return (
    <a className={className.iconWrapper} href={link} target="_blank" rel="noreferrer">
      <div className={`flex flex-rows space-x-4 p-3 items-center ${className.iconHover}`}>
        {icon}
        <div className="str:hidden md:block truncate">
          <h1 className={className.contactTitle}>{name}</h1>
          <p className={className.contactDescription}>{simpleLink}</p>
        </div>
      </div>
    </a>
  );
};
export default HireMeSection;

import { responsive } from '../constant/responsive';

export const Quote = () => {
  const textStyle = `font-mono text-white text-center  mt-2 ${responsive.textHeading}`;
  return (
    <div>
      <p className={textStyle}>
        &lt;<span className="font-bold">Thomas</span>/&gt;
      </p>
    </div>
  );
};

import { SimpleIcon } from '../assets/icons/icons';
import { responsive } from '../constant/responsive';

const className = {
  wrapperStyle: `h-auto ${responsive.paddingX} ${responsive.paddingY}`,
  gridWrapper:
    'border-x-[0.5px] border-b-[0.5px] border-b-zinc-500 border-x-zinc-500 bg-black-900 h-[55vh] w-full grid grid-rows-6 grid-cols-1 md:grid-rows-2 md:grid-cols-3  items-center justify-center xl:mx-auto pb-4 pt-2',
  indicatorBar:
    'mt-8 md:mt-6 h-8 rounded-tl-md rounded-tr-md w-full bg-zinc-700 border-[0.5px] border-b-black-900 border-x-zinc-500 border-t-zinc-500 flex flex-row items-center space-x-1.5 pl-3 w-full  xl:mx-auto'
};
const skillSets = [
  {
    name: 'HTML',
    progress: 50,
    icon: SimpleIcon.SiHtml5,
    color: '#ef4444'
  },
  {
    name: 'CSS',
    progress: 45,
    icon: SimpleIcon.SiCss3,
    color: '#0284c7'
  },
  {
    name: 'TS/JS',
    progress: 45,
    icon: SimpleIcon.SiJavascript,
    color: '#ca8a04'
  },
  {
    name: 'SQL',
    progress: 60,
    icon: SimpleIcon.SiMicrosoftsqlserver,
    color: '#f87171'
  },
  {
    name: 'React',
    icon: SimpleIcon.SiReact,
    progress: 60,
    color: '#0ea5e9'
  },
  {
    name: 'React Native',
    icon: SimpleIcon.SiReact,
    progress: 60,
    color: '#0d9488'
  }
];
export const SkillSection = () => {
  return (
    <div id="skill" className={className.wrapperStyle}>
      <h1 className="text-slate-100 text-3xl font-bold ml-6">Skill</h1>
      <div className={className.indicatorBar}>
        <Button color="bg-red-700" />
        <Button color="bg-yellow-500" />
        <Button color="bg-lime-500" />
      </div>
      <div className={className.gridWrapper}>
        {skillSets.map((item: any) => {
          return (
            <SkillItem
              skillName={item.name}
              progress={item.progress}
              icon={<item.icon size={24} color={item.color} />}
              key={item.name}
            />
          );
        })}
      </div>
    </div>
  );
};

const SkillItem = (props: { skillName: string; progress: number; icon: any }) => {
  const { skillName, progress, icon } = props;
  console.log(skillName, progress, icon);
  return (
    <div>
      <div className="flex flex-rows items-center space-x-2">
        <p
          className={`text-md md:text-2xl ssm:ml-4 msm:ml-6 sm:ml-6 md:ml-8 lg:ml-8 xl:ml-8 text-white-100 font-bold truncate inline`}>
          {skillName}
        </p>
        {icon}
      </div>
      <div className="mt-2 mx-4 ssm:mx-4 msm:mx-6 sm:mx-6 md:mx-8 lg:mx-8 xl:mx-8 bg-stone-900 rounded-full">
        <div
          className={`rounded-full bg-gradient-to-r from-[#7441E1] to-[#4169E1] h-5`}
          style={{ width: `${progress}%` }}></div>
      </div>
    </div>
  );
};

const Button = (props: { color: string }) => {
  return <div className={`${props.color} w-4 h-4 rounded-full`}></div>;
};

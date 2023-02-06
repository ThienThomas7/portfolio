export const Card = (props: any) => {
  const divStyle = 'bg-white shadow-lg shadow-blue-600/50 rounded-md p-5';
  return <div className={divStyle}>{props.children}</div>;
};

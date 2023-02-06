export const Card = (props: { divStyle: string; children: any }) => {
  return <div className={props.divStyle}>{props.children}</div>;
};

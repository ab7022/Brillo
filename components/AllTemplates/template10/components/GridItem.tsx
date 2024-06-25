const GridItem = (props: {
  rows: number;
  cols: number;
  children: React.ReactNode;
  className?: string
}) => {
  return (
    <div
      className={`group relative col-span-${props.cols} row-span-${props.rows} flex flex-col space-y-8 justify-between bg-neutral-100 rounded-2xl z-10 ${props.className}`}
    >
      {props.children}
    </div>
  );
};

export default GridItem;

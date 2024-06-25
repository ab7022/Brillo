const MainContent = (props: { children: React.ReactNode }) => {
  return (
    <main className="lg:w-10/12 flex flex-col space-y-4 w-full h-full">{props.children}</main>
  );
};

export default MainContent;
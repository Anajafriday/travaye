function AppLayout({ children }) {
  return (
    <div className=" col-start-2 -ml-16 col-end-5   h-screen  overflow-y-scroll">
      {children}
    </div>
  );
}

export default AppLayout;

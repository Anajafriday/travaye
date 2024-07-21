function Main({ children, column = "grid-cols-4" }) {
  return (
    <main role="main" className={`grid ${column} grid-flow-row`}>
      {children}
    </main>
  );
}

export default Main;

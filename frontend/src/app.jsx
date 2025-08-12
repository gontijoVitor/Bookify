// App.jsx
export default function App({ children }) {
  const layoutStyle = {
    display: "flex",
    alignItems: "center",      // Centraliza verticalmente
    justifyContent: "center",  // Centraliza horizontalmente
    minHeight: "100vh",        // Ocupa toda a altura
    width: "100vw",            // Garante largura total
    margin: 0,
    padding: 0,
    boxSizing: "border-box",
  };

  return <div style={layoutStyle}>{children}</div>;
}

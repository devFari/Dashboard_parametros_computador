import { useState } from "react";

function App() {
  const [cpu, setCpu] = useState("25%");
  const [memoria, setMemoria] = useState("60%");
  const [disco, setDisco] = useState("45%");

  return (
    <div style={styles.container}>
      <header style={styles.header}>
        <h1>📊 Dashboard do Computador</h1>
      </header>

      <main style={styles.grid}>
        <div style={styles.card}>
          <h2>💻 CPU</h2>
          <p>Uso atual: {cpu}</p>
        </div>

        <div style={styles.card}>
          <h2>🧠 Memória</h2>
          <p>Uso atual: {memoria}</p>
        </div>

        <div style={styles.card}>
          <h2>💾 Disco</h2>
          <p>Uso atual: {disco}</p>
        </div>
      </main>
    </div>
  );
}

const styles = {
  container: {
    fontFamily: "Arial, sans-serif",
    backgroundColor: "#f4f6f9",
    minHeight: "100vh",
  },
  header: {
    backgroundColor: "#0078d7",
    color: "white",
    padding: "20px",
    textAlign: "center",
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
    gap: "20px",
    padding: "20px",
  },
  card: {
    backgroundColor: "white",
    padding: "20px",
    borderRadius: "10px",
    boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
    textAlign: "center",
  },
};

export default App;

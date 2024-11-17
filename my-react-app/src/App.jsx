import { useState } from "react";
import "../public/styles/styles.css";
import Navbar from "./components/Navbar";
import Container from "./components/Container";
import Background from "./components/Background";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="container">
      <Navbar />
      <Container
        content={{
          id: "h-desc",
          className: "homepageDescription",
        }}
      />
      <Background />
    </div>
  );
}

export default App;

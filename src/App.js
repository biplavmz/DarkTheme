import "./styles.css";
import react, { useEffect, useState } from "react";
// document.body.className = isDarkMode ? 'dark' : 'light';

export default function App() {
  const [isDarkMode, setIsDarkMode] = useState("");

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  useEffect(() => {
    document.body.className = isDarkMode ? "dark" : "light";
  }, [isDarkMode]);
  return (
    <div className={isDarkMode ? "dark" : "light"}>
      <h1>Hello CodeSandbox</h1>
      <button onClick={toggleTheme}>click</button>
      <h2>Start editing to see some magic happen!</h2>
    </div>
  );
}

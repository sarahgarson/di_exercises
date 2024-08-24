import React from "react";
import { ThemeProvider, useTheme } from "./component/ThemeContext";
import ThemeContext from "./component/ThemeContext";

function ThemeSwitcher() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button onClick={toggleTheme} style={styles.button}>
      Switch to {theme === "light" ? "Dark" : "Light"} Theme
    </button>
  );
}

function ExampleComponent() {
  const { theme } = useTheme();

  return (
    <div style={theme === "light" ? styles.lightTheme : styles.darkTheme}>
      <h2>Example Component</h2>
      <p>This component's style changes based on the current theme.</p>
    </div>
  );
}

function App() {
  return (
    <ThemeProvider>
      <div style={styles.app}>
        <h1>Theme Switcher Example</h1>
        <ThemeSwitcher />
        <ExampleComponent />
      </div>
    </ThemeProvider>
  );
}

const styles = {
  button: {
    padding: "10px 20px",
    fontSize: "16px",
    cursor: "pointer",
    margin: "20px 0",
  },
  lightTheme: {
    backgroundColor: "#f0f0f0",
    color: "#333",
    padding: "20px",
    borderRadius: "5px",
  },
  darkTheme: {
    backgroundColor: "#333",
    color: "#f0f0f0",
    padding: "20px",
    borderRadius: "5px",
  },
};

export default App;

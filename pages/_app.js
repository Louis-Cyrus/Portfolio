import "../src/styles/globals.css";
import "../src/styles/theme.css";
import { ThemeProvider, useTheme } from "../src/context/ThemeProvider";

const MyApp = ({ Component, pageProps }) => {
  return(
  <ThemeProvider>
    <AppContent Component={Component} pageProps={pageProps} />
  </ThemeProvider>
  );
};

const AppContent = ({ Component, pageProps }) => {
  const { theme } = useTheme();

  return (
    <div id="app" className={theme}>
      <div className="h-full px-4 m-auto max-w-7xl">
        <Component {...pageProps} />
      </div>
    </div>
  );
};

export default MyApp;

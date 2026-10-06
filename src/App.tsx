import Header from './components/header/Header';
import { useTheme } from './context/ThemeContext';
import Main from './pages/main/Main';

export default function App() {
  const { isDark } = useTheme();
  return (
    <div className={`app ${isDark ? 'dark' : 'light'}`}>
      <Header></Header>
      <div className="container">
        <Main></Main>
      </div>
    </div>
  );
}

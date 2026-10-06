import { useTheme } from '../../context/ThemeContext';
import { formatDate } from '../../helpers/formatDate';
import classes from './styles.module.css';

export default function Header() {
  const { isDark, toggleTheme } = useTheme();

  return (
    <header className={`${classes.header} ${isDark ? classes.dark : classes.light}`}>
      <div className={classes.info}>
        <h1 className={classes.title}>NEWS REACTIFY</h1>
        <p className={classes.date}>{formatDate(new Date())}</p>
      </div>

      <button
        onClick={toggleTheme}
        className={`${classes.switchButton} ${isDark ? classes.dark : classes.light}`}>
        Switch theme
      </button>
    </header>
  );
}

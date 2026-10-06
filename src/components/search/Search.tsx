import { useTheme } from '../../context/ThemeContext';
import classes from './styles.module.css';

interface Props {
  keywords: string;
  setKeywords: (keywords: string) => void;
}

export default function Search({ keywords, setKeywords }: Props) {
  const { isDark } = useTheme();
  return (
    <div className={`${classes.search}  ${isDark ? classes.dark : classes.light}`}>
      <input
        className={classes.input}
        type="text"
        value={keywords}
        onChange={(e) => setKeywords(e.target.value)}
        placeholder="JavaScript"
      />
    </div>
  );
}

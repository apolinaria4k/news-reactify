import classes from './styles.module.css';

export default function Search({ keywords, setKeywords }) {
  return (
    <div className={classes.search}>
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

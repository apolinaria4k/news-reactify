import classes from './styles.module.css';

export default function Categories({ categories, setSelectedCategory, selectedCategory }) {
  return (
    <div className={classes.categories}>
      <button
        onClick={() => setSelectedCategory(null)}
        className={!selectedCategory ? classes.active : classes.item}>
        All
      </button>
      {categories.map((category) => {
        return (
          <button
            onClick={() => setSelectedCategory(category)}
            className={selectedCategory === category ? classes.active : classes.item}
            key={category}>
            {category}
          </button>
        );
      })}
    </div>
  );
}

import classes from './styles.module.css';

export default function Categories({ categories, setSelectedCategory, selectedCategory }) {
  return (
    <div className={classes.categories}>
      {categories.map((category) => (
        <button
          onClick={() => setSelectedCategory(category)}
          className={selectedCategory === category ? classes.active : classes.item}
          key={category}>
          {category}
        </button>
      ))}
    </div>
  );
}

import { forwardRef } from 'react';
import classes from './styles.module.css';

const Categories = forwardRef(({ categories, setSelectedCategory, selectedCategory }, ref) => {
  return (
    <div ref={ref} className={classes.categories}>
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
});

export default Categories;

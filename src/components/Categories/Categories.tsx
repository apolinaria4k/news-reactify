import { forwardRef, type ForwardedRef } from 'react';
import classes from './styles.module.css';
import type { CategoriesType } from '../../interfaces';

interface Props {
  categories: CategoriesType[];
  setSelectedCategory: (category: CategoriesType | null) => void;
  selectedCategory: CategoriesType | null;
}

const Categories = forwardRef(
  (
    { categories, setSelectedCategory, selectedCategory }: Props,
    ref: ForwardedRef<HTMLDivElement>,
  ) => {
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
  },
);

export default Categories;

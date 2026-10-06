import classes from './styles.module.css';

interface Props {
  image: string;
}

export default function Image({ image }: Props) {
  return (
    <div className={classes.wrapper}>
      {image ? <img className={classes.image} src={image} alt="news" /> : null}
    </div>
  );
}

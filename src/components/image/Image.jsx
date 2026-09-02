import classes from "./styles.module.css";

export default function Image({ image }) {
  return (
    <div className={classes.wrapper}>
      {image ? <img className={classes.image} src={image} alt="news" /> : null}
      
      </div>
  );
}

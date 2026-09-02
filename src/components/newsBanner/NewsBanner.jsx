import { formatTimeAgo } from "../../helpers/formatTimeAgo";
import classes from "./styles.module.css";
import Image from "../image/Image";

export default function NewsBanner({ item }) {
  return (
    <div className={classes.banner}>
      <Image image={item?.image}></Image>
      <h3 className={classes.title}>{item.title}</h3>
      <p className={classes.extra}>{formatTimeAgo(item.published)} by {item.author}</p>
    </div>
  );
}

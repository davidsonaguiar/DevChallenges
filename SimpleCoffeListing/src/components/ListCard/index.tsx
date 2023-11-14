import { ComponentProps } from "react";
import styles from "./styles.module.css";

function ListCard(props: ComponentProps<"ul">) {
  return(
    <ul { ...props } className={styles.root}>
      { props.children }
    </ul>
  );
}

export default ListCard;
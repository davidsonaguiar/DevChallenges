import { ReactNode } from "react";
import styles from "./styles.module.css"

interface TitleProps {
  children: ReactNode;
}

function Title(props: TitleProps) {
  return(
    <h2 className={ styles.title }>
      { props.children }
    </h2>
  );
}

export default Title;
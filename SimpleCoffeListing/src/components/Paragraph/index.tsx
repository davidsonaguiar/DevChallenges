import { ReactNode } from "react";
import styles from "./styles.module.css";

interface ParagraphProps {
  children: ReactNode;
}

function Paragraph(props: ParagraphProps) {
  return(
    <p className={ styles.paragraph }>
      { props.children }
    </p>
  );
}

export default Paragraph;
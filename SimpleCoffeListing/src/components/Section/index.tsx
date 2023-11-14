import { ReactNode } from "react";
import styles from "./styles.module.css"

interface SectionProps {
  children: ReactNode;
}

function Section(props: SectionProps) {
  return (
    <div className={ styles.section }>
      {props.children}
    </div>
  );
}

export default Section;
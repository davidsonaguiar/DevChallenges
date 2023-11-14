import styles from "./styles.module.css";

interface TabProps {
  id: string;
  name: string;
  title: string;
  checked?: boolean;
  onChange: () => void;
}

function Tab(props: TabProps) {
  return(
    <label htmlFor={ props.id } className={ styles.root }>
      { props.title }
      <input 
        className={ styles.input }
        id={ props.id }
        name={ props.name }
        type="radio" 
        checked={ props.checked }
        onChange={ props.onChange }
      />
    </label>
  )
}

export default Tab;
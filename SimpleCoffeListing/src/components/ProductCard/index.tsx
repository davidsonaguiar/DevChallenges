import styles from "./styles.module.css";
import star_fill from "../../../public/svg/Star_fill.svg"
import star from "../../../public/svg/Star.svg"


interface ProductCardProps {
  title: string;
  src: string;
  popular?: boolean; 
  price: string;
  rating: number;
  votes: number;
  available: boolean;
}

function ProductCard(props: ProductCardProps) {  
  return(
    <div className={ styles.root }>
      <div className={ styles.container }>
        <img 
          src={ props.src } 
          className={ styles.img }
        />
        {
          props.popular && 
          <span className={ styles.popular }>
            Popular
          </span>
        }
      </div>
      <div  className={ styles.container }>
        <div className={ styles.flex }>
          <span className={ styles.title }>
            { props.title }
          </span>
          <span className={ styles.price }>{ props.price }</span>
        </div>
        <div className={ styles.flex }>
          <div className={ styles.ratingContainer }>
            <img src={ props.rating ? star_fill : star }/>
            <span className={ styles.rating }>{ props.rating}</span> 
            <span className={ styles.votes }>
              { props.rating ? `(${ props.votes } votes)` : "No Ratings" }
            </span>
          </div>
          { 
            !props.available && 
            <span className={ styles.available }>
              Sold out
            </span>
          }
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
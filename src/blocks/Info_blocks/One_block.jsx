import styles from "./One_block.module.scss";

const One_block = ({ img, placeName, country }) => {
  return (
    <div className={styles.container}>
      <img className={styles.img} src={img} alt="#" />
      <div className={styles.text_container}>
        <h6>{placeName}</h6>
        <p>{country}</p>
      </div>
    </div>
  );
};

export default One_block;

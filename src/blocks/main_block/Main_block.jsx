import styles from "./Main_block.module.scss";

const Main_block = () => {
  return (
    <div className={styles.container}>
      <div className={styles.text_container}>
        <h3>Guides by Thousand Sunny</h3>
        <p>
          Packed with tips and advice from our on-the-ground experts, our city
          guides app (iOS and Android) is the ultimate resource before and
          during a trip.
        </p>
        <button>Download</button>
      </div>
      <div className={styles.img_container}></div>
    </div>
  );
};

export default Main_block;

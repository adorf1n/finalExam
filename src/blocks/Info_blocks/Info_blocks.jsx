import One_block from "./One_block";
import { Info_Blocks_data } from "../../data/info_blocks_data";
import styles from "./Info_blocks.module.scss";

const Info_blocks = () => {
  return (
    <div className={styles.container}>
      <div className={styles.block_name}>
        <h1>Featured destinations</h1>
        <button className={styles.btn}>
          View all
          <svg
            width="6"
            height="11"
            viewBox="0 0 6 11"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1 1L5 5.5L1 10"
              stroke="#FB8F1D"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>
      <div className={styles.blocks_container}>
        {Info_Blocks_data.map((data) => {
          return (
            <One_block
              key={data.id}
              placeName={data.placeName}
              country={data.country}
              img={data.img}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Info_blocks;

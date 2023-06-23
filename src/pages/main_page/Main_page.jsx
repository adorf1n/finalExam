import styles from "./main_page.module.scss";
import Main_block from "./../../blocks/main_block/Main_block";
import Info_blocks from "../../blocks/Info_blocks/Info_blocks";

const Main_page = () => {
  return (
    <div className={styles.container}>
      <Main_block />
      <Info_blocks />
    </div>
  );
};

export default Main_page;

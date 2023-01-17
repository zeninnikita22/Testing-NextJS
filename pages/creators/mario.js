import Button from "@/components/Button";
import styles from "../../styles/Mario.module.css";

function Mario() {
  return (
    <div>
      <div className={styles.text}>Mario is creator 1!</div>
      <Button className={styles.button} />
    </div>
  );
}
export default Mario;

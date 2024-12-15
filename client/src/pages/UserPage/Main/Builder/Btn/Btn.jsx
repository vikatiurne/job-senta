import { ReactComponent as Arrow } from '../../../../../assets/user_page/builder/arrow.svg';
import Button from '../../../../../components/UI/Button/Button';

import { useMedia } from '../../../../../hoc/useMedia/useMedia.js';

import styles from './Btn.module.css';

const MenuBtn = ({onClick, dropDownActive }) => {
  const isMediaQuery = useMedia('(min-width:1024px)');

  return (
    <Button
      className={`${styles.btn} ${styles.newResumeBtn} ${
        dropDownActive ? styles.withDropDown : null
      }`}
      onClick={onClick}
    >
      {isMediaQuery ? (
        <p>
          New Resume <Arrow />
        </p>
      ) : (
        <p>
          Resume <Arrow />
        </p>
      )}
    </Button>
  );
};

export default MenuBtn;

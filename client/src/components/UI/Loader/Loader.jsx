import { BallTriangle } from "react-loader-spinner";

import styles from './Loader.module.css'

const Loader = ({loading}) => {
    return (  
        <div className={styles.loaderContainer}> 
          <BallTriangle
              height={100}
              width={100}
              radius={5}
              color="#f7f7f7"
              ariaLabel="ball-triangle-loading"
              visible={loading}
            />
        </div>  
      );  
}

export default Loader
import { useAuth0 } from "@auth0/auth0-react";
import Button from "../UI/Button/Button";

import styles from './LogoutButton.module.css'

const LogoutButton = () => {
  const { logout } = useAuth0();

  return (
    <Button className={styles.registrBtn} onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>
      Log Out
    </Button>
  );
};

export default LogoutButton;
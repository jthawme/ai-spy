import * as React from "react";

import { useSelector } from "react-redux";
import classNames from "classnames";

import Button from "../Common/Button/Button";
import FlexRow from "../Common/FlexRow/FlexRow";
import FlexRowItem from "../Common/FlexRow/FlexRowItem";

import Logo from "../Logo/Logo";

import Information from "../Information/Information";

import Landing from "../Pages/Landing/Landing";
import Photos from "../Pages/Photos/Photos";
import Processing from "../Pages/Processing/Processing";

import { RootState } from "../../store/store";

import * as styles from "./App.module.scss";

const App: React.FC = () => {
  const [open, setOpen] = React.useState(false);

  const currentRoute = useSelector((state: RootState) => state.router.pathname);

  const cls = classNames(styles.app, {
    [styles.open]: open,
  });

  return (
    <main className={cls}>
      <header className={styles.header}>
        <Logo className={styles.logo} />
      </header>
      <div className={styles.content}>
        {currentRoute === "home" && <Landing />}
        {currentRoute === "photos" && <Photos />}
        {currentRoute === "processing" && <Processing />}
      </div>
      <FlexRow className={styles.footer}>
        <FlexRowItem>
          <Button inline size="small" bare onClick={() => setOpen(true)}>
            Information
          </Button>
        </FlexRowItem>
        <FlexRowItem align="right">
          <Button
            className={styles.share}
            icon="share"
            inline
            size="small"
            bare
          >
            Share
          </Button>
        </FlexRowItem>
      </FlexRow>

      <Information
        className={styles.information}
        onClose={() => setOpen(false)}
      />
    </main>
  );
};

export default App;

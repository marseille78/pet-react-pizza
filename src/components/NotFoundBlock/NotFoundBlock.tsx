import { FC } from "react";
import css from "./NotFoundBlock.module.scss";

console.log(css);

const NotFoundBlock: FC = () => {
  return (
    <div className={css.root}>
      <h1>Not found :(</h1>

      <p className={css.description}>
        Unfortunately this page is not available in our online store.
      </p>
    </div>
  );
};

export default NotFoundBlock;

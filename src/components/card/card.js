import Image from "next/image";
import styles from "./card.module.sass";
import Button from "../button/button";
import ConditionalRender from "../conditional-render";
import getCategoryColor from "@/app/helpers/get-category-color";

const Card = (props) => (
  <div className={`${styles.card_wrap} ${props.className || ""}`}>
    <div className={styles.card}>
      <div className={styles.card_imageWrap}>
        <div className={styles.card_image}>
          <Image
            src={props.imgSrc}
            priority
            alt={props.imgAlt}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
      </div>
      <div className={styles.card_content}>
        <ConditionalRender condition={props.label}>
          <div
            className={`${styles.card_label} h6 mb-10 c-${getCategoryColor(
              props.label
            )} `}
          >
            {props.label}
          </div>
        </ConditionalRender>
        <ConditionalRender condition={props.title}>
          <div className={`${styles.card_title} h3 mb-20`}>{props.title}</div>
        </ConditionalRender>

        <ConditionalRender condition={props.summary}>
          <p className={`${styles.card_summary} fw-600`}>{props.summary}</p>
        </ConditionalRender>
        <ConditionalRender condition={props.href}>
          <Button href={props.href} icon={props.btnIcon}>
            {props.btnLabel || "Read more"}
          </Button>
        </ConditionalRender>
      </div>
    </div>
  </div>
);

export default Card;

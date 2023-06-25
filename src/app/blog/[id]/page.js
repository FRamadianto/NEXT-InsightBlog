import Image from "next/image";
import React from "react";
import styles from "./blogid.module.css";

const BlogPost = () => {
  return (
    <div>
      <div className={styles.container}>
        <div className={styles.top}>
          <div className={styles.info}>
            <h1 className={styles.title}>TEST TITLE BLOG DETAIL</h1>
            <p className={styles.desc}>
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsum is that it has a more-or-less normal
              distribution of letters, as opposed to using Content here,
              content here
            </p>
            <div className={styles.author}>
              <Image
                src=""
                alt=""
                width={40}
                height={40}
                className={styles.avatar}
              />
              <span className={styles.username}>username</span>
            </div>
          </div>
          <div className={styles.imageContainer}>
            <Image src="" alt="" fill={true} className={styles.image} />
          </div>
        </div>
        <div className={styles.content}>
          <p className={styles.text}>Content</p>
        </div>
      </div>
    </div>
  );
};

export default BlogPost;

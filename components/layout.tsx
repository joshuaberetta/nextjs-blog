import Head from "next/head";
import Link from "next/link";
import { Avatar, makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  container: {
    maxWidth: "36rem",
    padding: "0 1rem",
    margin: "3rem auto 6rem",
  },
  header: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  headerHomeImage: {
    width: "8rem",
    height: "8rem",
  },
  headerImage: {
    width: "6rem",
    height: "6rem",
  },
  borderCircle: {
    borderRadius: "9999px",
  },
  headingLg: {
    fontSize: "1.5rem",
    lineHeight: "1.4",
    margin: "1rem 0",
  },
  colorInherit: {
    color: "inherit",
  },
  heading2Xl: {
    fontSize: "2.5rem",
    lineHeight: 1.2,
    fontWeight: 800,
    letterSpacing: "-0.05rem",
    margin: "1rem 0",
  },
  backToHome: {
    margin: "3rem 0 0",
  },
});

const name = "Ryan Hudson";
export const siteTitle = "Hey there :)";

export default function Layout({
  children,
  home,
}: {
  children: React.ReactNode;
  home?: boolean;
}) {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Learn how to build a personal website using Next.js"
        />
        <meta
          property="og:image"
          content={`https://og-image.now.sh/${encodeURI(
            siteTitle,
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.zeit.co%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <header className={classes.header}>
        {home ? (
          <>
            <Avatar
              src="https://d281hw6jrax8rk.cloudfront.net/ryan.jpg"
              className={`${classes.headerHomeImage} ${classes.borderCircle}`}
              alt={name}
            />
            <h1 className={classes.heading2Xl}>{name}</h1>
          </>
        ) : (
          <>
            <Link href="/">
              <a>
                <Avatar
                  src="https://d281hw6jrax8rk.cloudfront.net/ryan.jpg"
                  className={`${classes.headerImage} ${classes.borderCircle}`}
                  alt={name}
                />
              </a>
            </Link>
            <h2 className={classes.headingLg}>
              <Link href="/">
                <a className={classes.colorInherit}>{name}</a>
              </Link>
            </h2>
          </>
        )}
      </header>
      <main>{children}</main>
      {!home && (
        <div className={classes.backToHome}>
          <Link href="/">
            <a>← Back to home</a>
          </Link>
        </div>
      )}
    </div>
  );
}

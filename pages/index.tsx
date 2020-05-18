import Head from "next/head";
import Link from "next/link";
import { makeStyles } from "@material-ui/core";
import { GetStaticProps } from "next";

import Layout, { siteTitle } from "../components/layout";
import { getSortedPostsData } from "../lib/posts";
import Date from "../components/date";

const useStyles = makeStyles({
  headingMd: {
    fontSize: "1.2rem",
    lineHeight: "1.5",
  },
  headingLg: {
    fontSize: "1.5rem",
    lineHeight: "1.4",
    margin: "1rem 0",
  },
  list: {
    listStyle: "none",
    padding: 0,
    margin: 0,
  },
  listItem: {
    margin: "0 0 1.25rem",
  },
  lightText: {
    color: "#666",
  },
});

export default function Home({
  allPostsData,
}: {
  allPostsData: {
    date: string;
    title: string;
    id: string;
  }[];
}) {
  const classes = useStyles();

  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={classes.headingMd}>
        <p>[Your Self Introduction]</p>
        <p>
          (This is a sample website - you’ll be building a site like this in{" "}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
      </section>
      <section className={classes.headingMd}>
        <h2 className={classes.headingLg}>Blog</h2>
        <ul className={classes.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={classes.listItem} key={id}>
              <Link href="/posts/[id]" as={`/posts/${id}`}>
                <a>{title}</a>
              </Link>
              <br />
              <small className={classes.lightText}>
                <Date dateString={date} />
              </small>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
};

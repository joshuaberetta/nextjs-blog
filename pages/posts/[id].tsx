import Head from "next/head";
import { GetStaticProps, GetStaticPaths } from "next";
import { makeStyles } from "@material-ui/core";

import Layout from "../../components/layout";
import { getAllPostIds, getPostData } from "../../lib/posts";
import Date from "../../components/date";

const useStyles = makeStyles({
  headingXl: {
    fontSize: "2rem",
    lineHeight: 1.3,
    fontWeight: 800,
    letterSpacing: "-0.05rem",
    margin: "1rem 0",
  },
  lightText: {
    color: "#999",
  },
});

export default function Post({
  postData,
}: {
  postData: {
    title: string;
    date: string;
    contentHtml: string;
  };
}) {
  const classes = useStyles();

  return (
    <Layout>
      <Head>
        <title>{postData.title}</title>
      </Head>
      <article>
        <h1 className={classes.headingXl}>{postData.title}</h1>
        {/* <div className={classes.lightText}>
          <Date dateString={postData.date} />
        </div> */}
        <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
      </article>
    </Layout>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const postData = await getPostData(params!.id as string);
  return {
    props: {
      postData,
    },
  };
};

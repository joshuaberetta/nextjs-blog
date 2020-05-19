import Head from "next/head";
import { GetStaticProps, GetStaticPaths } from "next";
import { Avatar, makeStyles } from "@material-ui/core";
import Markdown from "markdown-to-jsx";
import styled from "styled-components";

const MainTitle = styled.h1`
  color: #2980b9;
  border-bottom: 3px solid #333;
`;

const SectionTitle = styled.h2`
  color: #895fad;
  border-bottom: 2px dashed #333;
  text-align: right;
  margin: 0 20px;
`;

const SubSectionTitle = styled.h3`
  color: #2980b9;
  text-transform: uppercase;
`;

const ParaText = styled.p`
  color: green;
  text-align: left;
  margin: 0 20px;
  line-height: 1.375rem;
`;

const StrongText = styled.strong`
  color: black;
  padding: 2px;
  text-decoration: underline;
`;

const ExtLink = styled.a.attrs({
  target: "_blank",
})`
  color: #2980b9;
  &:hover {
    color: #ffd700;
  }
`;

const Code = styled.code`
  color: red;
  font-size: 1.125rem;
`;

const DividerLine = styled.hr`
  border: 1px solid #2980b9;
`;

const Image = styled.img`
  border: 5px solid #895fad;
  border-left: none;
  border-right: none;
`;

const options = {
  overrides: {
    h1: {
      component: MainTitle,
    },
    h2: {
      component: SectionTitle,
    },
    h3: {
      component: SubSectionTitle,
    },
    p: {
      component: ParaText,
    },
    strong: {
      component: StrongText,
    },
    a: {
      component: ExtLink,
    },
    code: {
      component: Code,
    },
    img: {
      component: Image,
    },
    hr: {
      component: DividerLine,
    },
  },
};

const md = `
# Hello world

## Just testing this things out
`;

const Test = () => {
  return (
    <div>
      <Markdown options={options}>{md}</Markdown>
    </div>
  );
};

export default Test;

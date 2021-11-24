import type {NextPage} from 'next';
import Head from 'next/head';
import {Section, Heading} from '@shuoink/ui-base';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Shuoink UI</title>
      </Head>
      <Section>
        <Heading>Shuoink UI</Heading>
      </Section>
    </>
  );
};

export default Home;

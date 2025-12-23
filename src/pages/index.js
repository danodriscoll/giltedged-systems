import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

import Heading from '@theme/Heading';
import styles from './index.module.css';

function HomepageText() {
  return (
    <div className="container margin-top--md">
      <h2>
        Gilt-Edged Mini (GEM) Models
      </h2>

      <p>
        Read an overview of project <Link to="/gilt-edged-mini/gem-overview">GEM</Link>. The{' '}
        <Link to="/category/abmlp-x-structure">latest model</Link> is written in the{' '}
        <Link to="https://www.python.org/">Python</Link> programming language using the project{' '}
        <Link to="https://mesa.readthedocs.io/stable/">Mesa</Link> framework. Model structures may
        change at any time.
      </p>
    </div>
  );
}

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero shadow--lw', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
      </div>
    </header>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout>
      <HomepageHeader />
      <HomepageText />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}

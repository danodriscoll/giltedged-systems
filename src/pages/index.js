import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

import Heading from '@theme/Heading';
import styles from './index.module.css';

function HomepageText() {
  return (
    <div className={styles.highlightedText}>
      <p>
        Gilt Edged Systems is an evolving research framework for understanding government monetary systems through synthetic operational analysis and agent-based modelling. The focus is not primarily on markets in the classical sense, but on institutional balance-sheet interactions, settlement-constrained flows, and delayed adjustment processes across time.
      </p>
      <p>
        There's a <Link to="/story">backstory</Link> to project development. View <Link to="/gilt-edged-models/gem-overview">GEM</Link> and <Link to="/gilt-edged-analysis/gea-overview">GEA</Link> overviews.
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

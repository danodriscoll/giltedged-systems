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
      <p>
        Descriptions of <Link to="/category/abmlp-x">ABMLP-X</Link> agent attributes and behaviours may change at any time. Models employ the <Link to="https://mesa.readthedocs.io/stable/">Mesa</Link> agent-based modelling (ABM) framework written in <Link to="https://www.python.org/">Python</Link>. View a summary technical <Link to="https://www.data-reports.net/giltedged-info/studio-sketch/architecture.html">architecture</Link>. Peruse the <Link to="/category/early-models">early models</Link>. <span className="text--italic">Part of <Link to="https://www.giltedged.info">GiltEdged.info</Link>.</span>
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
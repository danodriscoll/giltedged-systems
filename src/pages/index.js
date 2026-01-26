import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

import Heading from '@theme/Heading';
import styles from './index.module.css';

function HomepageText() {
  return (
    <div className={clsx('container margin-top--md', styles.intro)}>
      <h2>
        Gilt-Edged Mini (GEM)
      </h2>
      <p>
        Gilt Edged Mini (GEM) is a learning-by-building project exploring the history and dynamics of government monetary systems
        through agent-based models.
      </p>

      <p>
        Read the <Link to="/story">backstory</Link> or explore the <Link to="/gilt-edged-mini/gem-overview">GEM overview</Link>.
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

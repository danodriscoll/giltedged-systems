import clsx from 'clsx';
import Link from '@docusaurus/Link';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Liquidity Preference-X',
    Svg: require('@site/static/img/english_currency_icon.svg').default,
    description: (
      <>
        Latest Government Money Model: <Link to="/category/abmlp-x">ABMLP-X</Link>
      </>
    ),
  },
  {
    title: 'Simple & Portfolio Choice',
    Svg: require('@site/static/img/early_model_developments_icon.svg').default,
    description: (
      <>
        Earlier <Link to="/category/early-models">Money Models</Link>
      </>
    ),
  },
  {
    title: 'GEM Resource',
    Svg: require('@site/static/img/ai_humanoid_icon.svg').default,
    description: (
      <>
        Gilt Portfolio Analysis: <Link to="/category/abmgem-hedge">ABMGEM-HEDGE</Link>
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}

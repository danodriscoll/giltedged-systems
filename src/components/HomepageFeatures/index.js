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
        The latest government money model: <Link to="/category/abmlp-x-structure">ABMLP-X</Link>
      </>
    ),
  },
  {
    title: 'Simple & Portfolio Choice',
    Svg: require('@site/static/img/early_model_developments_icon.svg').default,
    description: (
      <>
        Early <Link to="/category/early-models">money models</Link>
      </>
    ),
  },
  {
    title: 'GEM Notes & Data Apps',
    Svg: require('@site/static/img/ai_humanoid_icon.svg').default,
    description: (
      <>
        Project public  <Link to="https://danodriscoll.github.io/">outputs<svg width="13.5" height="13.5" aria-label="(opens in new tab)" class="iconExternalLink_nPIU"><use href="#theme-svg-external-link"></use></svg></Link>
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

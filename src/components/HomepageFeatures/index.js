import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Deployed on Tezos',
    Svg: require('@site/static/img/tezos-xtz-logo.svg').default,
    description: (
      <>
        Elevate Labs is deployed on the Tezos blockchain. This means that you can use any Tezos wallet to interact with the app.
      </>
    ),
  },
  {
    title: 'From the ground up',
    Svg: require('@site/static/img/20240122-elevate-logo.svg').default,
    description: (
      <>
        Elevate is a project buildt from the ground up. It doesn't rely on other protocol, check out the <code>docs</code> directory.
      </>
    ),
  },
  {
    title: 'Powered by React',
    Svg: require('@site/static/img/react-2.svg').default,
    description: (
      <>
        The front end is buildt on react.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
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

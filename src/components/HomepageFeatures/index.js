import clsx from 'clsx';
import Heading from '@theme/Heading';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Fácil de usar',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        Arquos OPR es una plataforma de gestión de operaciones de lectura y validación de medidores. Con ayuda de una interfaz intuitiva y herramientas potentes, 
        permite a los usuarios gestionar rutas, capturar lecturas y validar datos de manera eficiente.
      </>
    ),
  },
  {
    title: 'Focalizado en la gestión de lecturas y validación',
    image: '/img/imagen_arquos_medio.webp',
    description: (
      <>
        Arquos OPR se centra en la gestión de lecturas y validación de medidores. Los usuarios pueden
        descargar rutas, capturar lecturas y validar datos de manera eficiente.      
      </>
    ),
  },
  {
    title: 'Potenciado por Flutter',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        Arquos OPR está desarrollado con Flutter, lo que garantiza un rendimiento óptimo y una 
        experiencia fluida para el usuario.
      </>
    ),
  },
];

function Feature({Svg, image, title, description}) {
  const imageUrl = useBaseUrl(image ?? '');
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        {image ? (
          <img className={styles.featureSvg} src={imageUrl} alt={title} />
        ) : (
          <Svg className={styles.featureSvg} role="img" />
        )}
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

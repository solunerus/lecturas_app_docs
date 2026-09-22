import clsx from 'clsx';
import Heading from '@theme/Heading';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Fácil de usar',
       image: '/img/arquos_facil_usar.webp',
    description: (
      <>
        Gestiona rutas, captura lecturas y valida datos desde una interfaz intuitiva, pensada
        para agilizar el trabajo en campo.
      </>
    ),
  },
  {
    title: 'Focalizado en la gestión de lecturas y validación',
    image: '/img/imagen_arquos_medio.webp',
    description: (
      <>
        Descarga rutas, captura lecturas y valida la información de tus medidores de forma
        rápida y organizada.
      </>
    ),
  },
  {
    title: 'Potenciado por Flutter',
    image: '/img/arquos_flutter_fast.webp',
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

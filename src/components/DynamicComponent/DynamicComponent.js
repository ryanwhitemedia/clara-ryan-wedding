const Placeholder = ({ componentName }) => (
  <div>
    <p style={{ fontColor: 'red' }}>
      The component <strong>{componentName}</strong> has not been created yet.
    </p>
  </div>
);

const Components = {};

const DynamicComponent = ({ blok, className }) => {
  if (typeof Components[blok.component] !== 'undefined') {
    const Component = Components[blok.component];
    return <Component blok={blok} className={className} />;
  }
  return <Placeholder componentName={blok.component} />;
};

export default DynamicComponent;

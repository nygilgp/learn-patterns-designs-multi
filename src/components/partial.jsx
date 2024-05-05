export const partial = (Component, partialProps) => {
  return (props) => {
    console.log(`props:`, props);
    console.log(`partialProps:`, partialProps);
    return <Component {...partialProps} {...props} />;
  };
};

export const Button = ({ size, color, text, ...props }) => {
  return (
    <button
      style={{
        fontSize: size === 'large' ? '25px' : '16px',
        backgroundColor: color,
      }}
    >
      {text}
    </button>
  );
};

export const SmallButton = partial(Button, { color: 'crimson' });

export const LargeRedButton = partial(SmallButton, {
  size: 'large',
});

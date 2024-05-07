[back](../README.md)

#### Clean code tips: Using element as Prop

[Branch](https://github.com/nygilgp/learn-patterns-designs-multi/tree/elementAsProp)

We are going to make an anchor tag look like a button, but should work as an anchor tag itself. We introduce 'As' prop, and pass it the tag you want to replace it with.

    const Button = ({
      As = "button",
      size = "m",
      className = "",
      ...otherProps
    }) => {
      return (
        <As
          {...otherProps}
          className={`${styles.button} ${styles[size]} ${className}`}
        />
      );
    };

    const style = {
      display: "flex",
      flexDirection: "column",
      gap: "1rem",
      alignItems: "center",
    };

    function App() {
      return (
        <div style={style}>
          <Button size="s">Small</Button>
          <Button size="m">Medium</Button>
          <Button size="l">Large</Button>
          <Button size="xl">xLarge</Button>
          <Button As="a" size="l" href="/">
            Link
          </Button>
        </div>
      );
    }

[back](../README.md)

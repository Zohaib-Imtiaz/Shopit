const ColorLayout = (props: any) => {
  return (
    <div
      style={{
        width: "50px",
      }}
    >
      {props.renderDefault(props)}
    </div>
  );
};

export default ColorLayout;

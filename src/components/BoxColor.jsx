function BoxColor({ color, value }) {
  const isMatch = value === color;

  return (
    <div
      className={`box ${color}`}
      style={{ backgroundColor: isMatch ? color : '' }}
    >
      {isMatch ? value : 'no soy el color'}
    </div>
  );
}

export default BoxColor;

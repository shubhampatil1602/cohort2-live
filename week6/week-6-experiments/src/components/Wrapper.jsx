function Wrapper() {
  return (
    <div>
      <CardWrapper innerComponent={<TextComponent />} />
    </div>
  );
}
function TextComponent() {
  return <div>Jay Shree Ram</div>;
}
function CardWrapper({ innerComponent }) {
  return <div style={{ border: '2px solid black' }}>{innerComponent}</div>;
}

export default Wrapper;

export default function AnimalCategory({ title, children }) {
  return (
    <>
      <h2>{title}</h2>
      <section>{children}</section>
    </>
  );
}

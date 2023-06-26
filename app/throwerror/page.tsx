export default function ThrowErrorPage() {
  const c = [1, 2, 3];
  const d = c[2];
  if (d === 3) {
    throw new Error();
  }
  return <>{d}</>;
}

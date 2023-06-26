export default async function BooksPage() {
  const res = await fetch(
    "https://openlibrary.org/api/books?bibkeys=ISBN%3A0201558025%2CLCCN%3A93005405&format=json"
  );
  const resJSON = await res.json();
  console.log(resJSON);
  return (
    <>
      <div>{resJSON["ISBN:0201558025"].preview}</div>
      <div>{resJSON["LCCN:93005405"].preview}</div>
    </>
  );
}

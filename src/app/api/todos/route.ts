export async function GET(request: Request) {
  const data = await fetch("https://dummyjson.com/todos");
  const res = await data.json();
  return Response.json(res);
}

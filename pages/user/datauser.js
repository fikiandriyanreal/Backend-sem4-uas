import DataUser from "../../components/user/DataUser";
import LayoutUser from "../../components/user/LayoutUser";
export default function Datauser({ data }) {
  {
    Array.isArray(data) ? (data = data) : (data = [data]);
  }
  return (
    <div>
      <LayoutUser>
        <DataUser data={data} />
      </LayoutUser>
    </div>
  );
}

export async function getServerSideProps({ query }) {
  const id = query.id;
  console.log(id);
  let url = "http://localhost:5000/todos";
  if (typeof id === "string") {
    url = `http://localhost:5000/todos/${id}`;
  }
  // fetch data
  const res = await fetch(url);
  const data = await res.json();

  return { props: { data } };
}

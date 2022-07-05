import DataTodo from "../components/DataTodo";
import Layout from "../components/Layout";
import TodoById from "../components/TodoById";

const dataTodo = ({ data }) => {
  {
    Array.isArray(data) ? (data = data) : (data = [data]);
  }
  return (
    <Layout>
      <TodoById />
      <DataTodo data={data} />
    </Layout>
  );
};

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

export default dataTodo;

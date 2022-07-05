import Layout from "../components/Layout";
import CreateTodo from "../components/CreateTodo";
import CreateDetail from "../components/UpdateDetail";

const createtodo = () => {
  return (
    <div>
      <Layout>
        <CreateTodo />
      </Layout>
    </div>
  );
};

export default createtodo;

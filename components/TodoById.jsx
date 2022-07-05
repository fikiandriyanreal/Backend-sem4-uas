import { useRouter } from "next/router";
import { useState } from "react";

const TodoById = () => {
  const [id, setId] = useState("");
  const router = useRouter();
  const getTdsById = (e) => {
    e.preventDefault();
    router.push({
      pathname: "datatodo",
      query: { id: id },
    });
  };
  return (
    <div className="container">
      <form onSubmit={getTdsById}>
        <div className="row">
          <div className="col-8"></div>
          <div className="col d-flex flex-reverse">
            <input
              type="text"
              className="form-control"
              placeholder="Cari Id"
              value={id}
              onChange={(e) => setId(e.target.value)}
            />

            <button
              type="submit"
              className="btn btn-success ms-2 btn-sm"
              value={id}
            >
              <i class="bi bi-search"></i>
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default TodoById;

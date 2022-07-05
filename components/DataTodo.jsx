import axios from "axios";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/router";

const DataTodo = ({ data }) => {
  const [message, setMessage] = useState(false);
  const router = useRouter();

  async function hapusTodo(id) {
    // setDeleting(true)
    try {
      const response = await axios.delete(`http://localhost:5000/todos/${id}`);

      if (response.data.message) {
        setMessage(response.data.message);
      }
      alert(`Kegiatan dengan ${id} telah terhapus`);
    } catch (error) {
      console.log({ message: error.message });
    }

    router.push("/datatodo");
  }
  return (
    <div className="container">
      <h3 className="text-center mb-3 mt-5 font-monospace">To Do List</h3>
      <table className="table table-striped table-hover">
        <thead>
          <tr>
            <th>ID</th>
            <th>Nama</th>
            <th>Kegiatan</th>
            <th>Hari</th>
            <th>Jam</th>
          </tr>
        </thead>
        <tbody>
          {data.map((tds, idx) => (
            <tr key={idx}>
              <td>{tds.id}</td>
              <td>{tds.nama}</td>
              <td>{tds.kegiatan}</td>
              <td>{tds.hari}</td>
              <td>{tds.jam}</td>

              <td>
                <div className="d-flex justify-content gap-2 ">
                  <button className="btn btn-success btn-sm">
                    <Link
                      href={`/updatetodo?id=${tds.id}
                                        &nama=${tds.nama}&kegiatan=${tds.kegiatan}&hari=${tds.hari}
                                        &jam=${tds.jam}
                                        `}
                    >
                      <i class="bi bi-gear-fill"></i>
                    </Link>
                  </button>

                  <button
                    className="btn btn-danger btn-sm"
                    value={tds.id}
                    onClick={(e) => hapusTodo(e.target.value)}
                  >
                    <i class="bi bi-trash3-fill"></i>
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DataTodo;

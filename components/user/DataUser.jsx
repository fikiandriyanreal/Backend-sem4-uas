import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/router";

const DataUser = ({ data }) => {
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

    router.push("/user/datauser");
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
            <th>Konfigurasi</th>
          </tr>
        </thead>
        <tbody>
          {data.map((tdsEmbedded, idx) => (
            <tr key={idx}>
              <td>{tdsEmbedded.id}</td>
              <td>{tdsEmbedded.nama}</td>
              <td>{tdsEmbedded.kegiatan}</td>
              <td>{tdsEmbedded.hari}</td>
              <td>{tdsEmbedded.jam}</td>

              <td>
                <div className="d-flex justify-content gap-2 ">
                  <button className="btn btn-success btn-sm">
                    <Link
                      href={`/user/updateuser?id=${tdsEmbedded.id}
                                        &nama=${tdsEmbedded.nama}&kegiatan=${tdsEmbedded.kegiatan}&hari=${tdsEmbedded.hari}
                                        &jam=${tdsEmbedded.jam}
                                        `}
                    >
                      <i class="bi bi-gear-fill"></i>
                    </Link>
                  </button>

                  <button
                    className="btn btn-danger btn-sm"
                    value={tdsEmbedded.id}
                    onClick={(e) => hapusTodo(e.target.value)}
                  >
                    <i class="bi bi-trash3-fill"></i>
                  </button>

                  <button className="btn btn-success btn-sm text-white">
                    <Link href={`/user/createuser`}>
                      <i className="text-white">Tambah</i>
                    </Link>
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

export default DataUser;

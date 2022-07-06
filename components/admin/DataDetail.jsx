import Link from "next/link";
import axios from "axios";
const DataDetail = ({ data }) => {
  return (
    <div className="container">
      <table className="table table-striped table-hover ">
        <thead>
          <tr>
            <th>ID</th>
            <th>Kegiatan</th>
            <th>Deskripsi</th>
          </tr>
        </thead>
        <tbody>
          {data.map((tdsEmbedded, idx) => (
            <tr key={idx}>
              <td>{tdsEmbedded.id}</td>
              <td>{tdsEmbedded.kegiatan}</td>
              {tdsEmbedded.detail.map((tdsEmbedded, idx) => (
                <td key={idx}>{tdsEmbedded.deskripsi}</td>
              ))}
              <td>
                <button className="btn btn-success btn-sm">
                  <Link
                    href={`/admin/updatedetail?id=${tdsEmbedded.id}
                                       &deskripsi=${tdsEmbedded.deskripsi}
                                        `}
                  >
                    <i className="text-white">Tambah Deskripsi</i>
                  </Link>
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DataDetail;

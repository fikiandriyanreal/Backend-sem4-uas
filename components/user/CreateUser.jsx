import { useState } from "react";
import axios from "axios";
import { useRouter } from "next/router";

const CreateUser = () => {
  const [id, setId] = useState("");
  const [nama, setNama] = useState("");
  const [kegiatan, setKegiatan] = useState("");
  const [hari, setHari] = useState("");
  const [jam, setJam] = useState("");
  const router = useRouter();

  async function submitHandler(e) {
    e.preventDefault();
    try {
      axios
        .post("http://localhost:5000/todos", {
          id,
          nama,
          kegiatan,
          hari,
          jam,
        })

        .then((response) => {
          console.log(response);
        });
      alert("Penambahan Data sukses");
      clearInput();
    } catch (e) {
      throw Error(e.message);
    }
    router.push("/user/datauser");
  }

  const clearInput = () => {
    setId("");
    setNama("");
    setKegiatan("");
    setHari("");
    setJam("");
  };

  return (
    <div>
      <div className="container mt-4">
        <form className="w-50 mx-auto" onSubmit={submitHandler}>
          <h1 className="w-75 fs-3 text-center mb-3 font-monospace">
            Tambah List
          </h1>
          <div className="w-75">
            <div className="form-floating">
              <input
                className="form-control mb-3"
                id="id"
                type="text"
                placeholder="ID"
                value={id}
                onChange={(e) => setId(e.target.value)}
              />
              <label htmlFor="id">ID</label>
            </div>

            <div className="form-floating">
              <input
                className="form-control mb-3"
                id="nama"
                type="text"
                placeholder="nama"
                value={nama}
                onChange={(e) => setNama(e.target.value)}
              />
              <label htmlFor="nama">Nama</label>
            </div>

            <div className="form-floating">
              <input
                className="form-control mb-3"
                id="kegiatan"
                type="text"
                placeholder="kegiatan"
                value={kegiatan}
                onChange={(e) => setKegiatan(e.target.value)}
              />
              <label htmlFor="kegiatan">Kegiatan</label>
            </div>

            <div className="form-floating">
              <input
                className="form-control mb-3"
                id="hari"
                type="text"
                placeholder="hari"
                value={hari}
                onChange={(e) => setHari(e.target.value)}
              />
              <label htmlFor="hari">Hari</label>
            </div>

            <div className="form-floating">
              <input
                className="form-control mb-3"
                id="jam"
                type="text"
                placeholder="jam"
                value={jam}
                onChange={(e) => setJam(e.target.value)}
              />
              <label htmlFor="tempat">Jam</label>
            </div>
          </div>

          <div className="w-75 d-flex ">
            <button className="btn btn-primary" type="submit">
              Simpan
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateUser;

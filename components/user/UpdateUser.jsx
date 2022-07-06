import { useEffect, useState } from "react";
import Router, { useRouter } from "next/router";
import axios from "axios";

const UpdateUser = () => {
  //deklarasi state
  const [_id, setId] = useState("");
  const [_nama, setNama] = useState("");
  const [_kegiatan, setKegiatan] = useState("");
  const [_hari, setHari] = useState("");
  const [_jam, setJam] = useState("");

  //mengambil data yang dikirim melalui router
  const router = useRouter();
  const { id, nama, kegiatan, hari, jam } = router.query;

  useEffect(() => {
    if (typeof id == "string") {
      setId(id);
    }
    if (typeof nama == "string") {
      setNama(nama);
    }
    if (typeof kegiatan == "string") {
      setKegiatan(kegiatan);
    }
    if (typeof hari == "string") {
      setHari(hari);
    }
    if (typeof jam == "string") {
      setJam(jam);
    }
  }, [id, nama, kegiatan, hari, jam]);

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      axios
        .put(`http://localhost:5000/todos/${_id}`, {
          id: _id,
          nama: _nama,
          kegiatan: _kegiatan,
          hari: _hari,
          jam: _jam,
        })
        .then((response) => {
          console.log(response);
        });

      alert("Update Data Sukses");
      Router.push("/user/datauser");
    } catch (e) {
      console.log({ message: e.message });
    }
  };

  return (
    <div>
      <div className="container mt-4">
        <form className="w-50 mx-auto" onSubmit={submitHandler}>
          <h1 className="w-75 font-blod text-center mb-3 font-monospace">
            Edit ToDo List
          </h1>
          <div className="w-75 ">
            <div className="form-floating shadow sm mb-2 bg-body-rounded">
              <input
                className="form-control mb-2"
                id="id"
                type="text"
                placeholder="ID"
                value={_id}
                onChange={(e) => setId(e.target.value)}
              />
            </div>
          </div>

          <div className="w-75">
            <div className="form-floating shadow dm mb-2 bg-body-rounded">
              <input
                className="form-control mb-2"
                id="nama"
                type="text"
                placeholder="nama"
                value={_nama}
                onChange={(e) => setNama(e.target.value)}
              />
            </div>
          </div>

          <div className="w-75">
            <div className="form-floating shadow sm mb-2 bg-body-rounded">
              <input
                className="form-control mb-2"
                id="kegiatan"
                type="text"
                placeholder="kegiatan"
                value={_kegiatan}
                onChange={(e) => setKegiatan(e.target.value)}
              />
            </div>
          </div>

          <div className="w-75">
            <div className="form-floating shadow sm mb-2 bg-body-rounded">
              <input
                className="form-control mb-2"
                id="hari"
                type="text"
                placeholder="hari"
                value={_hari}
                onChange={(e) => setHari(e.target.value)}
              />
            </div>
          </div>

          <div className="w-75">
            <div className="form-floating shadow sm mb-2 bg-body-rounded">
              <input
                className="form-control mb-2"
                id="jam"
                type="text"
                placeholder="jam"
                value={_jam}
                onChange={(e) => setJam(e.target.value)}
              />
            </div>
          </div>

          <div className="d-flex flex-row-reverse w-75">
            <button
              className="btn btn-lg text-white mt-3"
              type="submit"
              style={{ backgroundColor: "#3330E4" }}
            >
              Update
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateUser;

import { useEffect, useState } from "react";
import Router, { useRouter } from "next/router";
import axios from "axios";

const UpdateDetail = () => {
  //deklarasi state
  const [_id, setId] = useState("");

  const [_deskripsi, setDeskripsi] = useState("");

  //mengambil data yang dikirim melalui router

  const router = useRouter();
  const { id, detail, deskripsi, kdDetail } = router.query;

  useEffect(() => {
    if (typeof id == "string") {
      setId(id);
    }

    if (typeof deskripsi == "string") {
      setDeskripsi(deskripsi);
    }
  }, [detail, deskripsi, kdDetail]);

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      axios
        .put(`http://localhost:5000/todos/detail/${_id}`, {
          id: _id,

          deskripsi: _deskripsi,
        })
        .then((response) => {
          console.log(response);
        });

      alert("Update Detail Sukses");
      Router.push("/datadetail");
    } catch (e) {
      console.log({ message: e.message });
    }
  };

  return (
    <div>
      <div className="container mt-4">
        <form className="w-50 mx-auto" onSubmit={submitHandler}>
          <h1 className="w-75 font-blod text-center mb-3 font-monospace">
            Tambah Deskripsi
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
                id="deskripsi"
                type="text"
                placeholder="deskripsi"
                value={""}
                onChange={(e) => setDeskripsi(e.target.value)}
              />
            </div>
          </div>

          <div className="d-flex flex-row-reverse w-75">
            <button
              className="btn btn-lg text-white mt-3"
              type="submit"
              style={{ backgroundColor: "#3330E4" }}
            >
              Tambah
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateDetail;

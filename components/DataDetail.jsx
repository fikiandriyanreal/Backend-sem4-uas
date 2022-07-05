const DataDetail = ({ data }) => {
  return (
    <div className="container">
      <table className="table table-striped table-hover">
        <thead>
          <tr>
            <th>ID</th>
            <th>Deskripsi</th>
            <th>Detail</th>
          </tr>
        </thead>
        <tbody>
          {data.map((tdsEmbedded, idx) => (
            <tr key={idx}>
              <td>{tdsEmbedded.id}</td>
              {tdsEmbedded.detail.map((tdsEmbedded, idx) => (
                <td key={idx}>{tdsEmbedded.deskripsi}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DataDetail;

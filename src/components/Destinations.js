function Destinations(props) {
  const data = props.data;
  const allOptions = props.allOptions;

  if (allOptions === data.loc || allOptions == "All") {
    return (
      <>
        <table className="table table-hover">
          <tbody>
            <tr className="bg-light">
              <td className="w-25">{data.date}</td>
              <td className="w-25">{data.loc}</td>
              <td className="w-25">{data.airline}</td>
              <td className="w-25">{data.price}</td>
            </tr>
          </tbody>
        </table>
      </>
    );
  } else {
    return <div />;
  }
}

export default Destinations;

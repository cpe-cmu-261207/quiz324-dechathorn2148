//a component for rendering person table

export default function ItemTable(props) {
  const pet = props;
  return (
    <div>
      <table className="table is-bordered mb-3">
        <tbody>
          <tr>
            <th>Name</th>
            <th>Gender</th>
            <th>Age</th>
          </tr>
          <tr>
            <td>{pet.name}</td>
            <td>{pet.gender}</td>
            <td>{pet.age}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

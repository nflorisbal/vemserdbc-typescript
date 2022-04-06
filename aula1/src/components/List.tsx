import { PeopleDTO } from "../models/PeopleDTO";

const List = ({ people }: PeopleDTO) => {
  return (
    <div>
      {people.map((person) => (
        <div>
          <h1>{person.name}</h1>
          <p>{person.age}</p>
        </div>
      ))}
    </div>
  );
};

export default List;

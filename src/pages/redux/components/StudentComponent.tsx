interface StudentComponentProps {
  name: string;
}

const StudentComponent = ({ name }: StudentComponentProps) => {
  return <div>{name}</div>;
};

export default StudentComponent;

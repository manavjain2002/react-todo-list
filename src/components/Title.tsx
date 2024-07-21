import "../styles/App.css";

interface Props {
  message: string;
}

const Title = ({ message }: Props) => {
  return <h1 className="pageTitle">{message}</h1>;
};

export default Title;

import { Form } from "./styled";
import { Title } from "ui/texts";
import { useRouter } from "next/router";
import { TextFieldHome } from "ui/text-field";
import { ButtonBlue } from "ui/buttons";
import { useUser } from "lib/user-context";

export function HomePage() {
  const router = useRouter();
  const { setQuery } = useUser();

  const handleSubmit = (e) => {
    e.preventDefault();
    const queryForm = e.target[0].value;
    setQuery(queryForm);
    router.push("/products");
  };
  return (
    <div style={{ height: "35vh" }}>
      <div style={{ marginTop: "40px" }}>
        <Title>El mejor</Title>
        <Title>e-commerce</Title>
      </div>
      <Form onSubmit={handleSubmit}>
        <TextFieldHome placeholder="¿Qué producto estas buscando?" />
        <ButtonBlue>Buscar</ButtonBlue>
      </Form>
    </div>
  );
}

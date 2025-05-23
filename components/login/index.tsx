import { Div, Title, Form, Label, Text } from "./styled";
import { TextFieldLogin } from "ui/text-field";
import { useRouter } from "next/router";
import { sendCode, getToken } from "lib/api";
import { ButtonLogin } from "ui/buttons";
import { useUser } from "lib/user-context";

export function Login() {
  const router = useRouter();
  const { setEmail, user, setUser } = useUser();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const emailForm: string = formData.get("email") as string;
    setEmail(emailForm);
    const data = await sendCode(emailForm);

    setUser({ ...user, userId: data.data.userId });
    localStorage.setItem("UserData", JSON.stringify({ email: emailForm }));
    router.push("/login/code");
  };
  return (
    <Div>
      <Title>Ingresar</Title>
      <Form onSubmit={handleSubmit}>
        <Label>Email</Label>
        <TextFieldLogin name="email" />
        <ButtonLogin>Continuar</ButtonLogin>
      </Form>
    </Div>
  );
}

export function LoginCode() {
  const router = useRouter();
  const { email } = useUser();
  const { user } = useUser();
  const onSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const codeForm: string = formData.get("code") as string;
    const code = Number(codeForm);
    await getToken(email, code);
    router.push("/");
  };
  return (
    <Div>
      <Title>Código</Title>
      <Form onSubmit={onSubmit}>
        <TextFieldLogin name="code" />
        <Text>Te envíamos un código a tu mail</Text>
        <ButtonLogin>Ingresar</ButtonLogin>
      </Form>
    </Div>
  );
}

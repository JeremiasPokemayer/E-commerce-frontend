import { Title } from "ui/texts";
import { TextFieldLogin } from "ui/text-field";
import { Div, Label, DivTextField } from "./styled";
import { ButtonLogin } from "ui/buttons";
import { useUser } from "lib/user-context";
import { useMe } from "lib/hooks";
import { setUserData } from "lib/api";

export function Perfil() {
  const { user } = useUser();
  const data = useMe(user?.userId);
  let userData = {};
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    userData = {
      userId: user?.userId,
      username: formData.get("name"),
      lastname: formData.get("lastname"),
      address: formData.get("address"),
      phone: formData.get("phone"),
    };
    setUserData(userData);
  };
  return (
    <Div onSubmit={handleSubmit}>
      <Title>Perfil</Title>
      <DivTextField>
        <Label>Nombre</Label>
        <TextFieldLogin name="name" placeholder={data?.username} />
      </DivTextField>
      <DivTextField>
        <Label>Apellido</Label>
        <TextFieldLogin name="lastname" placeholder={data?.lastname} />
      </DivTextField>
      <DivTextField>
        <Label>Dirección</Label>
        <TextFieldLogin name="address" placeholder={data?.address} />
      </DivTextField>
      <DivTextField>
        <Label>Teléfono</Label>
        <TextFieldLogin name="phone" placeholder={data?.phone} />
      </DivTextField>
      <ButtonLogin type="submit">Guardar</ButtonLogin>
    </Div>
  );
}

import { HeaderContainer, HeaderContent, NewTransactionButton } from "./styles";
import logoImg from "../../assets/ignite-dt-money-logo.svg";

export function Header() {
  return (
    <HeaderContainer>
      <HeaderContent>
        <img src={logoImg} />
        <NewTransactionButton>Nova Transacao</NewTransactionButton>
      </HeaderContent>
    </HeaderContainer>
  );
}

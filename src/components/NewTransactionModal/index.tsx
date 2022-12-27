import * as Dialog from "@radix-ui/react-dialog";
import { X } from "phosphor-react";
import { Overlay, Content, CloseButton } from "./styles";

export function NewTransactionModal() {
  return (
    <Dialog.Portal>
      <Overlay />

      <Content>
        <Dialog.Title>Nova transacao</Dialog.Title>

        <CloseButton>
          <X size={22} />
        </CloseButton>

        <form action="">
          <input type="text" placeholder="Descricao" required />
          <input type="number" placeholder="Preco" required />
          <input type="text" placeholder="Categoria" required />

          <button type="submit"> Cadastrar</button>
        </form>
      </Content>
    </Dialog.Portal>
  );
}

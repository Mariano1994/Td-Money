import * as Dialog from "@radix-ui/react-dialog";
import { ArrowCircleDown, ArrowCircleUp, X } from "phosphor-react";
import {
  Overlay,
  Content,
  CloseButton,
  TransactionType,
  TransactionTypeButton,
} from "./styles";

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

          <TransactionType>
            <TransactionTypeButton variant="income" value="income">
              <ArrowCircleUp size={24} />
              Entrada
            </TransactionTypeButton>

            <TransactionTypeButton variant="outcome" value="outcome">
              <ArrowCircleDown size={24} />
              Saidas
            </TransactionTypeButton>
          </TransactionType>

          <button type="submit"> Cadastrar</button>
        </form>
      </Content>
    </Dialog.Portal>
  );
}

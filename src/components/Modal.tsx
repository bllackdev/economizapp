import { Button, Modal as NBModal } from "native-base";

type Props = {
  children: React.ReactNode;
  showModal: boolean;
  setShowModal: (show: boolean) => void;
};

export function Modal({ children, showModal, setShowModal }: Props) {
  return (
    <NBModal isOpen={showModal}>
      <NBModal.Content maxWidth='400px' bgColor='gray.900'>
        <NBModal.Body bgColor='gray.900'>{children}</NBModal.Body>
        <Button
          bgColor='violet.500'
          mx={16}
          mt={-10}
          mb={4}
          onPress={() => {
            setShowModal(false);
          }}
        >
          Selecionar
        </Button>
      </NBModal.Content>
    </NBModal>
  );
}

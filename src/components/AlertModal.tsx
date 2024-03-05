import { AlertDialog, Button, useColorModeValue } from "native-base";

type Props = {
  isOpen: boolean;
  onPressPrimary: () => void;
  onPressSecondary: () => void;
  cancelRef: any;
  isLogging?: boolean;
  text: string;
};

export function AlertModal({
  isOpen,
  onPressPrimary,
  onPressSecondary,
  cancelRef,
  isLogging,
  text,
}: Props) {
  return (
    <AlertDialog
      isOpen={isOpen}
      onClose={onPressSecondary}
      leastDestructiveRef={cancelRef}
    >
      <AlertDialog.Content borderRadius='lg' bgColor='gray.500' p={2}>
        <AlertDialog.Body
          bgColor='gray.500'
          _text={{ color: "white", fontSize: "xs", fontFamily: "body" }}
        >
          {text}
          <Button.Group space={6} w='full' justifyContent='center' mt={4}>
            <Button
              variant='ghost'
              colorScheme='coolGray'
              onPress={onPressSecondary}
              ref={cancelRef}
              w={20}
              _text={{ color: "white", fontSize: "xs", fontFamily: "body" }}
              borderRadius='lg'
            >
              Cancelar
            </Button>
            <Button
              bgColor='purple.500'
              onPress={onPressPrimary}
              w={20}
              _text={{ color: "white", fontSize: "xs", fontFamily: "body" }}
              borderRadius='lg'
              isLoading={isLogging}
            >
              Sair
            </Button>
          </Button.Group>
        </AlertDialog.Body>
      </AlertDialog.Content>
    </AlertDialog>
  );
}

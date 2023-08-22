import { Button, Divider, Input, Modal, Text } from "@nextui-org/react";
import React from "react";
import { Flex } from "../styles/flex";

export const AddUser = () => {
  const [visible, setVisible] = React.useState(false);
  const handler = () => setVisible(true);

  const closeHandler = () => {
    setVisible(false);
    console.log("closed");
  };

  return (
    <div>
      <Button auto onClick={handler}>
        Dodaj użytkownika
      </Button>
      <Modal
        closeButton
        aria-labelledby="modal-title"
        width="600px"
        open={visible}
        onClose={closeHandler}
      >
        <Modal.Header css={{ justifyContent: "start" }}>
          <Text id="modal-title" h4>
            Dodaj nowego użytkownika
          </Text>
        </Modal.Header>
        <Divider css={{ my: "$5" }} />
        <Modal.Body css={{ py: "$10" }}>
          <Flex
            direction={"column"}
            css={{
              flexWrap: "wrap",
              gap: "$8",
              "@lg": { flexWrap: "nowrap", gap: "$12" },
            }}
          >
            <Flex
              css={{
                gap: "$10",
                flexWrap: "wrap",
                "@lg": { flexWrap: "nowrap" },
              }}
            >
              <Input
                label="Imię"
                bordered
                clearable
                fullWidth
                size="lg"
                placeholder="Imię"
              />
              <Input
                label="Nazwisko"
                clearable
                bordered
                fullWidth
                size="lg"
                placeholder="Nazwisko"
              />
            </Flex>

            <Flex
              css={{
                gap: "$10",
                flexWrap: "wrap",
                "@lg": { flexWrap: "nowrap" },
              }}
            >
              <Input
                label="Email"
                clearable
                bordered
                fullWidth
                size="lg"
                placeholder="Email"
              />
              <Input
                label="Numer telefonu"
                clearable
                bordered
                fullWidth
                size="lg"
                placeholder="Numer telefonu"
              />
            </Flex>
            <Flex
              css={{
                gap: "$10",
                flexWrap: "wrap",
                "@lg": { flexWrap: "nowrap" },
              }}
            >
              <Input
                label="Dział"
                clearable
                bordered
                fullWidth
                size="lg"
                placeholder="Dział"
              />
              <Input
                label="Firma"
                clearable
                bordered
                fullWidth
                size="lg"
                placeholder="Firma"
              />
            </Flex>
          </Flex>
        </Modal.Body>
        <Divider css={{ my: "$5" }} />
        <Modal.Footer>
          <Button auto onClick={closeHandler}>
            Dodaj użytkownika
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

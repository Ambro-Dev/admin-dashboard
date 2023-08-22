import { Avatar, Card, Text } from "@nextui-org/react";
import React from "react";
import { Box } from "../styles/box";
import { Flex } from "../styles/flex";

export const CardTransactions = () => {
  return (
    <Card
      css={{
        mw: "375px",
        height: "auto",
        bg: "$accents0",
        borderRadius: "$xl",
        // alignContent: 'start',
        justifyContent: "start",
        px: "$6",
      }}
    >
      <Card.Body css={{ py: "$10" }}>
        <Flex css={{ gap: "$5" }} justify={"center"}>
          <Text h3 css={{ textAlign: "center" }}>
            Ostatnie transakcje
          </Text>
        </Flex>
        <Flex
          css={{ gap: "$6", py: "$4" }}
          // align={'center'}

          direction={"column"}
        >
          <Flex css={{ gap: "$6" }} align={"center"} justify="between">
            <Avatar
              size="lg"
              pointer
              src="https://i.pravatar.cc/150?u=a042581f4e29026024d"
              bordered
              color="gradient"
              stacked
            />
            <Text span size={"$base"} weight={"semibold"}>
              Adam Strzała
            </Text>
            <Text span css={{ color: "$green600" }} size={"$xs"}>
              4500 PLN
            </Text>
            <Text span css={{ color: "$accents8" }} size={"$xs"}>
              9.09.2023
            </Text>
          </Flex>

          <Flex css={{ gap: "$6" }} align={"center"} justify="between">
            <Avatar
              size="lg"
              pointer
              src="https://i.pravatar.cc/150?u=a048581f4e29026701d"
              bordered
              color="gradient"
              stacked
            />
            <Text span size={"$base"} weight={"semibold"}>
              Adrzej Kowalski
            </Text>
            <Text span css={{ color: "$green600" }} size={"$xs"}>
              3500 PLN
            </Text>
            <Text span css={{ color: "$accents8" }} size={"$xs"}>
              31.12.2022
            </Text>
          </Flex>
          <Flex css={{ gap: "$6" }} align={"center"} justify="between">
            <Avatar
              size="lg"
              pointer
              src="https://i.pravatar.cc/150?u=a092581d4ef9026700d"
              bordered
              color="gradient"
              stacked
            />
            <Text span size={"$base"} weight={"semibold"}>
              Róża Nowak
            </Text>
            <Text span css={{ color: "$green600" }} size={"$xs"}>
              1500 PLN
            </Text>
            <Text span css={{ color: "$accents8" }} size={"$xs"}>
              2.08.2023
            </Text>
          </Flex>
          <Flex css={{ gap: "$6" }} align={"center"} justify="between">
            <Avatar
              size="lg"
              pointer
              src="https://i.pravatar.cc/150?u=a04258114e29026702d"
              bordered
              color="gradient"
              stacked
            />
            <Text span size={"$base"} weight={"semibold"}>
              Paweł Tarnowski
            </Text>
            <Text span css={{ color: "$green600" }} size={"$xs"}>
              200 PLN
            </Text>
            <Text span css={{ color: "$accents8" }} size={"$xs"}>
              12.08.2023
            </Text>
          </Flex>
          <Flex css={{ gap: "$6" }} align={"center"} justify="between">
            <Avatar
              size="lg"
              pointer
              src="https://i.pravatar.cc/150?u=a048581f4e29026701d"
              bordered
              color="gradient"
              stacked
            />
            <Text span size={"$base"} weight={"semibold"}>
              Mateusz Górski
            </Text>
            <Text span css={{ color: "$green600" }} size={"$xs"}>
              2444 PLN
            </Text>
            <Text span css={{ color: "$accents8" }} size={"$xs"}>
              5.08.2023
            </Text>
          </Flex>
          <Flex css={{ gap: "$6" }} align={"center"} justify="between">
            <Avatar
              size="lg"
              pointer
              src="https://i.pravatar.cc/150?u=a04258114e29026702d"
              bordered
              color="gradient"
              stacked
            />
            <Text span size={"$base"} weight={"semibold"}>
              Karolina Adamczyk
            </Text>
            <Text span css={{ color: "$green600" }} size={"$xs"}>
              3000 PLN
            </Text>
            <Text span css={{ color: "$accents8" }} size={"$xs"}>
              12.08.2023
            </Text>
          </Flex>
        </Flex>
      </Card.Body>
    </Card>
  );
};

import React from "react";

import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";

import * as messageActions from "../../store/message/action";

import { CloseButton } from "@chakra-ui/react";

import { store } from "../../store/store";

import {
  Stat,
  StatLabel,
  StatNumber,
  StatHelpText,
  StatArrow,
  StatGroup,
} from "@chakra-ui/react";

export const StatComponent = (props) => {
  // const dispatch = useDispatch();

  return (
    <>
      <Stat>
        <StatLabel>{props.title}</StatLabel>
        <StatNumber>1</StatNumber>
        <StatHelpText>Today Date</StatHelpText>
      </Stat>
    </>
  );
};

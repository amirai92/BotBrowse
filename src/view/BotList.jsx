import React from "react";
import Card from "./Card";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { selectRobot } from "../state/actions/robot.actions";

const List = ({ list_data, update_profile }) => {
  const dispatch = useDispatch();
  const { filtered_list } = useSelector((state) => state.robot);

  return (
    <Box>
      <ul>
        {filtered_list.map((bot) => (
          <CardItem key={bot.id} onClick={() => dispatch(selectRobot(bot))}>
            <Card {...bot} />
          </CardItem>
        ))}
      </ul>
    </Box>
  );
};
export default List;

const Box = styled.div`
  background: oldlace;
  height: 77vh;
  min-width: 62rem;
  /*border: #0000b9 solid 3px;*/
  border-radius: 0.4rem;
  overflow-x: hidden;
  overflow-y: scroll;
  box-shadow: 0 0.2rem 0.8rem DimGrey;
`;

const CardItem = styled.li`
  &:nth-child(even) {
    background: honeydew;
  }
  &:nth-child(odd) {
    background: white;
  }
`;

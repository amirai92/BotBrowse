import React, { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import List from "./BotList";
import Filter from "./BotFilter";
import Profile from "./BotProfile";
import styled from "styled-components";
import { loadRobots } from "../state/actions/robot.actions";
import LinearProgress from "@material-ui/core/LinearProgress";

const Browse = () => {
  const inited = useRef(false);
  const dispatch = useDispatch();
  const { is_loading, error_msg, selected_item } = useSelector(
    (state) => state.robot
  );

  useEffect(() => {
    if (inited.current === false) {
      inited.current = true;
      dispatch(loadRobots());
    }
  }, [dispatch]);

  if (is_loading)
    return (
      <>
        <LoadTxt>Loading data...</LoadTxt>
        <LinearProgress />
      </>
    );
  if (error_msg) return <h2>{error_msg}</h2>;

  return (
    <Box>
      <Filter />
      <Profile {...selected_item} />
      <List />
    </Box>
  );
};
export default Browse;

const Box = styled.div`
  background: Cornsilk;
  padding: 8.5rem 1.5rem 1.5rem;
  border-radius: 0.4rem;
  display: flex;
  max-width: 1100px;
  /* flex-direction: column; */
  box-shadow: 0 0.4rem 1.5rem DimGrey;
  position: relative;
  top: 50px;
  margin-top: 7rem;
`;

const LoadTxt = styled.h2`
  font-size: 2.2rem;
  margin-top: 17rem;
`;

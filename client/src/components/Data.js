import React from 'react';
import '../App.css';
import { Provider } from "react-redux";
import PostMessages from "./PostMessages";
import { store } from "../actions/store";
import { Container, AppBar, Typography } from "@material-ui/core";
import ButterToast,{ POS_RIGHT,POS_TOP } from "butter-toast";

function Data() {
  return (
    <Provider store={store}>
      <Container maxWidth="lg">
        <AppBar position="static" color="inherit">
          <Typography
            variant="h2"
            align="center">
               Message Box
          </Typography>
        </AppBar>
        <PostMessages />
        <ButterToast position={{vertical:POS_TOP,horizontal:POS_RIGHT}}/>
      </Container>
    </Provider>
  );
}

export default Data;

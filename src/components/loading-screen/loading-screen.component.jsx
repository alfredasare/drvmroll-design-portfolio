import React from "react";
import './loading-screen.styles';
import {Loader, LoadingScreenContainer} from "./loading-screen.styles";

const LoadingScreen = () => {

    return (
        <LoadingScreenContainer>
            <Loader>
                LOADING...
            </Loader>
        </LoadingScreenContainer>
    );
};

export default LoadingScreen
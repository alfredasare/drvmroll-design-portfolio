import React from "react";
import './loading-screen.styles';
import {Loader, LoadingScreenContainer} from "./loading-screen.styles";

const LoadingScreen = () => {

    return (
        <LoadingScreenContainer>
            <Loader>
                L O A D I N G...
            </Loader>
        </LoadingScreenContainer>
    );
};

export default LoadingScreen

import React from "react";
import './quote.styles';
import {ByLine, QuoteContainer, QuoteText} from "./quote.styles";

const Quote = () => {

    return (
        <QuoteContainer>
            <QuoteText>
                If you think good design is expensive, you should look at the cost of bad design
            </QuoteText>
            <ByLine>
                RALF SPETH
            </ByLine>
        </QuoteContainer>
    );
};

export default Quote;
import React from "react";
import './landing-lower-section.styles';
import {
    BlockOne, BlockTwo,
    BrowseWorks,
    LandingFooter,
    LargeCircle,
    MediumCircle,
    SmallCircle
} from "./landing-lower-section.styles";

const LandingLowerSection = () => {

    return (
        <LandingFooter>

            <LargeCircle />
            <MediumCircle />
            <SmallCircle />
            <BrowseWorks to="/works">
                Browse works
            </BrowseWorks>
            <BlockOne />
            <BlockTwo />
        </LandingFooter>
    );
};

export default LandingLowerSection;
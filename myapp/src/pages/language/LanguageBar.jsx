import React from 'react'
import {TopBar, TopBarContainer, TopBarText, TopBarOption} from './StyleLanguage';
import { BiGlobe } from "react-icons/bi";

function LanguageBar() {
  return (
    <TopBar>
        <TopBarContainer>
          {/* <BiGlobe/> */}
            <TopBarText>Language</TopBarText>
            <TopBarOption>
                <option>Hindi</option>
                <option>English</option>
            </TopBarOption>
        </TopBarContainer>
    </TopBar>
  )
}

export default LanguageBar
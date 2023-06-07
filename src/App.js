import React, { useState } from 'react';
import Start from './component/Start';
import PreLoader from './component/PreLoader';
import AboutMe from './component/AboutMe';
import Experience from './component/Experience';
import Information from './component/Information';
import WebsiteGap from './component/WebsiteGap';



function App() {

  return (
    <>
    <PreLoader />
    <div className="App">
      <div className="Landing">
      <Start />
      </div>
      <div id="InfoBody">
        <WebsiteGap />
        <AboutMe />
        <WebsiteGap />
        <Experience />
        <WebsiteGap />
        <Information />
      </div>
    </div>
    </>
  );
}

export default App;

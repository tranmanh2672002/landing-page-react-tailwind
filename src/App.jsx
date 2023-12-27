import Slide from "./components/SlideShow";
import Sidebar from "./components/Sidebar";
import Intro from "./components/Intro";
import Design from "./components/Design";
import Content from "./components/Content";
import Video from "./components/Video";
import Contact from "./components/Contact";

function App() {
  return (
    <>
      <Sidebar />
      <Slide />
      <Intro />
      <Design />
      <Content />
      <Video />
      <Contact />
      <div className="h-[1000px]"></div>
    </>
  );
}

export default App;

import { useState } from "react";
import Navbar from "@/scenes/navbar";

/* Typing with Enum */
// ! enums exist after BUILD
enum SelectefPage {
  Home = "home",
  Benefits = "benefits",
  OurClasses = "ourClasses",
  ContactUs = "contactus",
}

/* Typical Typing */
/* type selectefPage2 = {
  Home = "home",
  Benefits = "benefits",
  OurClasses = "ourClasses",
  ContactUs = "contactus",
} */

function App() {
  const [selectedPage, setSelectedPage] = useState<SelectefPage>(
    SelectefPage.Home
  );

  return (
    <div className="app bg-gray-20">
      <Navbar selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
    </div>
  );
}

export default App;

// Skills icons - https://react-icons.github.io/react-icons/
import {
  FaHtml5,
  FaBootstrap,
  FaLink,
} from "react-icons/fa";
import { SiJavascript, SiStyledcomponents, SiRedux } from "react-icons/si";

// Projects Images (add your images to the images directory and import below)
import Logo from "./images/logo.svg";

// Hero Images (add your images to the /images directory with the same names)
import HeroLight from "./images/daylight.jpg";
import HeroDark from "./images/mountain.jpg";
// If you change the import names above then you need to change the export names below
export { HeroLight as Light };
export { HeroDark as Dark };

/* START HERE
 **************************************************************
  Add your GitHub username (string - "YourUsername") below.
*/
export const githubUsername = "DanelynCorton";

// Blog link icon (imported above)
export const Blog = <FaLink />;

/* About Me
 **************************************************************
  Add a second paragraph for the about me section.
*/
export const moreInfo =
  "Hi! I am Danelyn A. Corton from Anibongan, Lianga Surigao Del Sur. I'm a BSCS student of North Eastern Mindanao State University Lianga Campus 4rth year and age of 22. ";

/* Skills
 ************************************************************** 
  Add or remove skills in the SAME format below, there must be one icon imported above per skill below.
*/
export const skillData = [
  {
    id: 1,
    skill: <FaHtml5 className="display-4" />,
    name: "HTML5",
  },
 
  {
    id: 4,
    skill: <FaBootstrap className="display-4" />,
    name: "BootStrap",
  },
  
];

export const filteredProjects = ["example-1", "example-2", "example-3"];

// Replace the defualt GitHub image for matching repos below (images imported above - lines 13-14)
export const projectCardImages = [
  {
    name: "example-1",
    image: Logo,
  },
];
export const formspreeUrl = "https://formspree.io/f/YourEndpoint";

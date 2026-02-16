export type Production = {
  title: string;
  company: string;
  description: string;
  image: string;
  link: string;
};

const Productions: Production[] = [
  {
    title: "Hamlet",
    company: "The Building Stage",
    description: "Directed",
    image: "/productions/hamlet/F93W0176.avif",
    link: "/hamlet",
  },
  {
    title: "Dustbowl Gothic",
    company: "The Building Stage",
    description: "Conceived and Directed",
    image: "/productions/dustbowl/IMG_3125.avif",
    link: "/dustbowl",
  },
  {
    title: "Moby-Dick (2006)",
    company: "The Building Stage",
    description: "Adapted and Directed",
    image: "/productions/moby/2006/FLYNN_BSTmoby0312-cc.avif",
    link: "/moby-2006",
  },
  {
    title: "Noir",
    company: "The Building Stage",
    description: "Conceived and Directed",
    image: "/productions/noir/_DSF4162.avif",
    link: "/noir",
  },
  {
    title: "Franklin Expedition",
    company: "The Building Stage",
    description: "Conceived and Directed",
    image: "/productions/franklin/MSB_8245.avif",
    link: "/franklin",
  },
  {
    title: "Hansel und Gretel",
    company: "The Building Stage",
    description: "Conceived and Directed",
    image: "/productions/hansel/_DSC9173.avif",
    link: "/hansel",
  },
  {
    title: "Moby-Dick (2011)",
    company: "The Building Stage",
    description: "Adapted and Directed",
    image: "/productions/moby/2011/_MSB3953.avif",
    link: "/moby-2011",
  },
  {
    title: "Dawn, Quixote",
    company: "The Building Stage",
    description: "Conceived and Directed",
    image:
      "/productions/quixote/joe-mazza-brave-lux-chicago-da-2434516091-O.avif",
    link: "/quixote",
  },
  {
    title: "Charles Dickens Begrudgingly Performs 'A Christmas Carol' Again",
    company: "Clownshow",
    description: "Created and Performed",
    image:
      "/productions/dickens/2025/joe-mazza-chicago-brave-lux-inc-5106164.avif",
    link: "/dickens",
  },
];

export default Productions;

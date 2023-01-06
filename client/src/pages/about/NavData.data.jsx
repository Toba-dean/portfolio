import { AiFillFolder } from "react-icons/ai";
import { FiChevronRight, FiChevronDown } from "react-icons/fi";
import { BsFilePersonFill } from "react-icons/bs";
import { HiCode } from "react-icons/hi";
import { GiNotebook } from "react-icons/gi";
import { FaGamepad } from "react-icons/fa"

export const NavData = [
  {
    id: 1,
    title: 'bio',
    icon: <AiFillFolder />,
    iconClosed: <FiChevronRight />,
    iconOpen: <FiChevronDown />,
    color: "#E99287",
    subNav: [
      {
        check: false,
        title: 'personal',
        path: '/about/personal',
        icon: <BsFilePersonFill />
      },
      {
        check: false,
        title: 'skills',
        path: '/about/skills',
        icon: <HiCode />
      },
    ]
  },
  {
    id: 2,
    title: 'education',
    icon: <AiFillFolder />,
    iconClosed: <FiChevronRight />,
    iconOpen: <FiChevronDown />,
    color: "#43D9AD",
    subNav: [
      {
        check: false,
        title: 'formal',
        path: '/about/formal',
        icon: <GiNotebook />
      },
      {
        check: false,
        title: 'non-formal',
        path: '/about/non-formal',
        icon: <GiNotebook />,
        slug: "// non-formal"
      },
    ]
  },
  {
    id: 3,
    title: 'interest',
    icon: <AiFillFolder />,
    iconClosed: <FiChevronRight />,
    iconOpen: <FiChevronDown />,
    color: "#3A49A4",
    subNav: [
      {
        check: false,
        title: 'hobbies',
        path: '/about/hobbies',
        icon: <FaGamepad />
      }
    ]
  }
]
import { Icons } from "@/components/common/icons";

interface SocialInterface {
  name: string;
  username: string;
  icon: any;
  link: string;
}

export const SocialLinks: SocialInterface[] = [
  {
    name: "Github",
    username: "@milesnee",
    icon: Icons.gitHub,
    link: "https://github.com/milesnee",
  },
  {
    name: "Email",
    username: "milesnee.e@gmail.com",
    icon: Icons.gmail,
    link: "mailto:milesnee.e@gmail.com",
  },
  {
    name: "WeChat",
    username: "老麦茶馆 (SmilingK)",
    icon: Icons.linkedin,
    link: "#",
  },
];

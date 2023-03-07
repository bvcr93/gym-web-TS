import {
  HomeModernIcon,
  UserGroupIcon,
  AcademicCapIcon,
} from "@heroicons/react/24/solid"


export interface BenefitType {
  icon: JSX.Element;
  title: string;
  desc: string;
}
 export const benefits: Array<BenefitType> = [
        {
          icon: <HomeModernIcon className="h-6 w-6" />,
          title: "State of the Art Facilities",
          desc:
            "Neque adipiscing amet amet enim. Feugiat dolor enim fermentum in a in lectus pellentesque. Ullamcorper et.",
        },
        {
          icon: <UserGroupIcon className="h-6 w-6" />,
          title: "100's of Diverse Classes",
          desc:
            "Eu ipsum id egestas risus tempus enim semper felis quis. Nec consectetur ac venenatis facilisi est. Eget ac turpis id.",
        },
        {
          icon: <AcademicCapIcon className="h-6 w-6" />,
          title: "Expert and Pro Trainers",
          desc:
            "Fusce vestibulum aliquam ut cras. Nisl lectus egestas sapien nisl. Lacus at mi sit pellentesque. Congue parturient.",
        },
      ];
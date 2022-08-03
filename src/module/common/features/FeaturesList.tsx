import {
  IconBarChart,
  IconCommand,
  IconMail,
  IconMessageCircle,
  IconSmile,
  IconZap,
} from "components/icon";

const FeaturesList = [
  {
    id: 1,
    icon: <IconMail></IconMail>,
    heading: "Share team inboxes",
    desc: "Whether you have a team of 2 or 200, our shared team inboxes keep everyone on the same page and in the loop.",
  },
  {
    id: 2,
    icon: <IconZap></IconZap>,
    heading: "Deliver instant answers",
    desc: "An all-in-one customer service platform that helps you balance everything your customers need to be happy.",
  },
  {
    id: 3,
    icon: <IconBarChart></IconBarChart>,
    heading: "Manage your team with reports",
    desc: "Measure what matters with Untitled's easy-to-use reports. You can filter, export, and drilldown on the data in a couple clicks.",
  },
  {
    id: 4,
    icon: <IconSmile></IconSmile>,
    heading: "Connect with customers",
    desc: "Solve a problem or close a sale in real-time with chat. If no one is available, customers are seamlessly routed to email without confusion.",
  },
  {
    id: 5,
    icon: <IconCommand></IconCommand>,
    heading: "Connect the tools you already use",
    desc: "Explore 100+ integrations that make your day-to-day workflow more efficient and familiar. Plus, our extensive developer tools.",
  },
  {
    id: 6,
    icon: <IconMessageCircle></IconMessageCircle>,
    heading: "Our people make the difference",
    desc: "We're an extension of your customer service team, and all of our resources are free. Chat to our friendly team 24/7 when you need help.",
  },
];

export { FeaturesList };

import { Button } from "components/button";
import { HomeFAQModel } from "services/models/indes";
import { HomeFAQItem, HomeGroupAvartar } from "./parts/faq";
import { SubHeadLine } from "../common/subheadline";

const homeFAQs = [
  {
    title: "Is there a free trial available?",
    desc: "Yes, you can try us for free for 30 days. If you want, we'll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.",
  },
  {
    title: "Can I change my plan later?",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi neque placeat iusto adipisci illum nulla minima similique quo maiores necessitatibus quos perspiciatis, sit obcaecati est quae ratione! Facilis, nam quibusdam.",
  },
  {
    title: "What is your cancellation policy?",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi neque placeat iusto adipisci illum nulla minima similique quo maiores necessitatibus quos perspiciatis, sit obcaecati est quae ratione! Facilis, nam quibusdam.",
  },
  {
    title: "Can other info be added to an invoice?",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi neque placeat iusto adipisci illum nulla minima similique quo maiores necessitatibus quos perspiciatis, sit obcaecati est quae ratione! Facilis, nam quibusdam.",
  },
  {
    title: "How does billing work?",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi neque placeat iusto adipisci illum nulla minima similique quo maiores necessitatibus quos perspiciatis, sit obcaecati est quae ratione! Facilis, nam quibusdam.",
  },
  {
    title: "How do I change my account email?",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi neque placeat iusto adipisci illum nulla minima similique quo maiores necessitatibus quos perspiciatis, sit obcaecati est quae ratione! Facilis, nam quibusdam.",
  },
];

const HomeFAQ = () => {
  return (
    <section className="faq">
      <div className="md:mx-20 my-12 md:my-24">
        <ul className="grid gap-y-8 mx-4 md:mx-16 lg:mx-28 xl:mx-64 ">
          {homeFAQs?.map((item: HomeFAQModel) => (
            <HomeFAQItem
              key={item.title}
              item={item}
              className="last:before:bg-white"
            ></HomeFAQItem>
          ))}
        </ul>
        <div className="bg-gray-50 md-5 md:mx-8 flex flex-col items-center">
          <HomeGroupAvartar></HomeGroupAvartar>
          <div className="flex flex-col items-center text-center mx-5">
            <h3 className="font-medium text-xl text-gray-900  mb-2 lg:whitespace-nowrap">
              Still have questions?
            </h3>
            <p className="text-lg md:text-xl text-gray-500 mb-6 md:mb-8">
              Can&apos;t find the answer you&apos;re looking for? Please chat to
              our friendly team.
            </p>
          </div>
          <Button className="bg-primary-600 !font-medium text-white py-2 px-5 mb-8">
            Get in touch
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HomeFAQ;

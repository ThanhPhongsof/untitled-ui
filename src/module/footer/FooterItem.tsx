import { Badge } from "components/badge";
import { FooterLinkModel, FooterModel } from "services/models/indes";

type FooterItemProps = {
  item: FooterModel;
};

const FooterItem = ({ item }: FooterItemProps) => {
  return (
    <div>
      <div className="text-sm text-gray-400 font-semibold mb-4">
        <span>{item.heading}</span>
      </div>
      <div className="flex flex-col gap-y-3 items-start">
        {item.linkFooters?.map((lk: FooterLinkModel) => (
          <div key={lk.link} className="flex items-center gap-x-2">
            <a
              href={lk.link.toLowerCase().replace(" ", "-")}
              className="text-medium text-gray-500 hover:text-primary-600"
            >
              {lk.link}
            </a>
            {lk.status && (
              <Badge text="New" kind="success" className="!text-xs"></Badge>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FooterItem;

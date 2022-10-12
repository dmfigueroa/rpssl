import type { IconProp } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface OptionProps {
  icon: IconProp;
  onClick: () => void;
  className?: string;
  title: string;
}

const Option = ({ icon, onClick, className = "", title }: OptionProps) => (
  <div
    className={`${className} flex flex-col items-center
    hover:text-sky-500 [&>*]:hover:border-sky-500`}
    onClick={onClick}
  >
    <FontAwesomeIcon
      className="w-12 h-12 border-4 border-solid rounded-full p-4 m-2"
      icon={icon}
    />
    <span>{title}</span>
  </div>
);

export default Option;

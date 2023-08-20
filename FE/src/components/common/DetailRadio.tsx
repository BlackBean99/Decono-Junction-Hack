import "./detail-radio.css";

interface DetailRadioProps {
  index: number;
  menu: {
    TITLE: string;
    SUBTITLE: string;
    SELECT: string[];
    DEFAULT?: undefined | string;
    ALERT_SELECT?: undefined | string[];
  };
  item: string;
  setIsOpen: (value: boolean) => void;
  setSelectSource: (value: string) => void;
}

const DetailRadio = ({
  index,
  menu,
  item,
  setIsOpen,
  setSelectSource,
}: DetailRadioProps) => {
  return (
    <div
      className="flex-1 gap-2 min-w-fit flex font-normal text-lg"
      key={index}
    >
      <label className="detail-radio-container">
        <input
          type="radio"
          name={menu.TITLE}
          id={item}
          defaultChecked={menu.DEFAULT === item}
          onChange={(e) => {
            if (
              menu.ALERT_SELECT?.find((value) => value === e.target.id) !==
              undefined
            ) {
              setIsOpen(true);
              setSelectSource(e.target.id);
            }
          }}
        />
        {item}
        <span className="detail-radio-checkmark"></span>
      </label>
    </div>
  );
};

export default DetailRadio;

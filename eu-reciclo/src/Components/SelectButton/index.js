import "./style.css"

const SelectButton = ({IconPicture, text, customColor, ...rest}) => {
  return (
      <div className={`card_style ${customColor}`} {...rest}>
        <img src={IconPicture} alt='' />
        <p>{text}</p>
      </div>
  );
};

export default SelectButton;

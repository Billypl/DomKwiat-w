import "../styles/IconCard.css";

interface IconCardProps {
  children: string;
  title: string;
  icon: string;
}

const IconCard = ({ children, title, icon }: IconCardProps) => {
  return (
    <figure className="icon-card">
      <i className={icon}></i>
      <h4>{title}</h4>
      <div>{children}</div>
    </figure>
  );
};

export default IconCard;

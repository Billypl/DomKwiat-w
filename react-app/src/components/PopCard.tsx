import "../styles/PopCard.css";

interface PopCardProps {
  imgSrc: string;
  title: string;
  subtitle: string;
  description: string;
}

const PopCard = ({ imgSrc, title, subtitle, description }: PopCardProps) => {
  return (
    <>
      <div className="pop-card">
        <div className="pop-card-imgWrapper">
          <img src={new URL(imgSrc, import.meta.url).href}></img>
          <div className="pop-card-overlay">
            <h5>{title}</h5>
            <h6>{subtitle}</h6>
            <p>{description}</p>
          </div>
        </div>
        <div className="pop-card-description">
          <h5>{title}</h5>
          <h6>{subtitle}</h6>
        </div>
      </div>
    </>
  );
};

export default PopCard;

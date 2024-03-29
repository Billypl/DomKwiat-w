import "../styles/TitleUnderlined.css";

interface TitleUnderlinedProps {
  children: string;
  priority: "1" | "2" | "3" | "4" | "6";
}

const TitleUnderlined = ({ children, priority }: TitleUnderlinedProps) => {
  const Tag = `h${priority}` as keyof JSX.IntrinsicElements;
  return (
    <header className="underlineHeader">
      <Tag>{children}</Tag>
    </header>
  );
};

export default TitleUnderlined;

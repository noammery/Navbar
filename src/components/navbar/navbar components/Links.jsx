import "./links.css";
function Links(props) {
  return (
    <div className={`links ${props.navbarPosition}`}>
      {props.links.map((link, index) => (
        <div key={index}>
          <a
            href={link.linkUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={`navbarlinks hover-underline-animation ${props.color}`}
          >
            {link.linkTitle}
          </a>
        </div>
      ))}
    </div>
  );
}
export default Links;

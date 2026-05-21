import { socialImgs } from "../constants";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="flex flex-col justify-center">
          <p>Terms & Conditions</p>
        </div>
        <div className="socials">
          {socialImgs.map((socialImg, index) => (
            <a
              key={index}
              className="icon"
              href={socialImg.url}
              target="_blank"
              rel="noreferrer"
              aria-label={`Open ${socialImg.name}`}
            >
              {socialImg.name.toLowerCase() === "github" ? (
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                >
                  <path d="M12 0.2975C5.3725 0.2975 0 5.67 0 12.2975C0 17.6825 3.435 22.185 8.205 23.8125C8.805 23.925 9.0225 23.55 9.0225 23.22C9.0225 22.9275 9.01 22.1475 9.0025 21.0675C5.6725 21.7475 4.9675 19.5275 4.9675 19.5275C4.4225 18.0825 3.6325 17.64 3.6325 17.64C2.545 16.92 3.7175 16.935 3.7175 16.935C4.9225 17.0175 5.5525 18.17 5.5525 18.17C6.6225 20.0075 8.4275 19.5075 9.0925 19.2075C9.2025 18.4375 9.5125 17.92 9.8575 17.62C7.19 17.3225 4.425 16.2825 4.425 11.6175C4.425 10.2825 4.8825 9.1925 5.6525 8.3325C5.5325 8.0325 5.145 6.7725 5.7575 5.1225C5.7575 5.1225 6.7825 4.7975 8.9975 6.38C9.9575 6.1225 10.9875 5.9925 12.0175 5.9875C13.0475 5.9925 14.0775 6.1225 15.0375 6.38C17.25 4.7975 18.2775 5.1225 18.2775 5.1225C18.8925 6.7725 18.505 8.0325 18.385 8.3325C19.158 9.1925 19.6125 10.2825 19.6125 11.6175C19.6125 16.2925 16.84 17.3175 14.165 17.615C14.6025 17.9875 15.0025 18.75 15.0025 19.8975C15.0025 21.5475 14.9925 22.8375 14.9925 23.2175C14.9925 23.55 15.2075 23.93 15.8175 23.8125C20.5875 22.185 24.0225 17.6825 24.0225 12.2975C24.0225 5.67 18.65 0.2975 12.0225 0.2975H12Z" />
                </svg>
              ) : (
                <img src={socialImg.imgPath} alt={`${socialImg.name} icon`} />
              )}
            </a>
          ))}
        </div>
        <div className="flex flex-col justify-center">
          <p className="text-center md:text-end">
            © {new Date().getFullYear()} N. Sai Vikas. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

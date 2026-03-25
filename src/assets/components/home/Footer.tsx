import "./Footer.css";
import laugierLogo from "../../images/Normal/Laugier NB.png";

const links =
{
    "About": "#about",
    "Gallery": "#gallery",
    "Contact": "#contact",
    "Tracking": "#",
    "TruckersMP": "https://truckersmp.com/vtc/78030",
    "Discord": "https://discord.gg/7fRHDDtPEK"
}

function Footer() {
    return (
        <footer className=".">
            <div className="footer-inner">
                <div className="footer-brand">
                    <img src={laugierLogo} width={256} />
                </div>

                <nav className="footer-links">
                    {Object.entries(links).map(([label, href]) => (
                        <a
                            key={label}
                            href={href}
                            className="footer-link"
                            target={href.startsWith("http") ? "_blank" : undefined}
                            rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                        >
                            {label}
                        </a>
                    ))}
                </nav>

                <span className="footer-copy">© {new Date().getFullYear()} Laugier Trans</span>
            </div>
        </footer>
    );
};

export default Footer;
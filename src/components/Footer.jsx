import { FaInstagram, FaWhatsapp } from "react-icons/fa"
const Footer = () => {
  return (
    <div className="footer d-flex align-items-center justify-content-around">
      <div className="footer-img">
        <img src="/img/brgIconPurple.png" alt="" />
      </div>
      <div className="footer-container d-flex flex-column align-items-start gap-2">
        <p className="m-0">Contact</p>
        <ul className="p-0 m-0 d-flex flex-column align-items-start gap-2">
          <a href="#" className="d-flex align-items-center gap-3">
            <FaInstagram className="footer-container__icon" />
            <li>Instagram</li>
          </a>
          <a href="#" className="d-flex align-items-center gap-3">
            <FaWhatsapp className="footer-container__icon" />
            <li>WhatsApp</li>
          </a>
        </ul>
      </div>
    </div>
  )
}
export default Footer

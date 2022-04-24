import Grid from "@mui/material/Grid";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
const Footer = () => {
  return (
    <>
      <div className="footer-container">
        <h1 className="brand-name"> Brand Name</h1>
        <Grid className="footer-grid-container" container spacing={2}>
          <Grid item xs={12} sm={6} md={4}>
            <ul className="footer-column-1">
              <li className="footer-column-header">Information</li>
              <li>
                <button href="#">About Us</button>
              </li>
              <li>
                <button href="#">FAQ</button>
              </li>
              <li>
                <button href="#">Refund Policy</button>
              </li>
              <li>
                <button href="#">Terms & Conditions</button>
              </li>
            </ul>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <ul className="footer-column-2">
              <li className="footer-column-header">Support</li>
              <li>
                <button href="#">hello@sample.com</button>
              </li>
            </ul>
          </Grid>
          <Grid item xs={12} sm={12} md={4}>
            <ul className="footer-column-3">
              <li className="footer-column-header">Newsletter</li>
              <li>Subscribe to recieve updates, access deals and more</li>
              <li>
                <input type="text" placeholder="Enter email address" />
              </li>
              <li>
                <button className="footer-subscribe-button">Subscribe</button>
              </li>
            </ul>
          </Grid>
        </Grid>
        <ul className="social-icons">
          <li>
            <FacebookIcon />
          </li>
          <li>
            <TwitterIcon />
          </li>
          <li>
            <InstagramIcon />
          </li>
        </ul>
        <div className="copyright-section">
          <p>Copyright 2021</p>
          <p>Privacy Policy</p>
        </div>
      </div>
    </>
  );
};
export default Footer;

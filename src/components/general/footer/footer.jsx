import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import Lang_butt from "../lang_butt/lang_butt";
import "./footer.css"

function Footer() {
    const { t } = useTranslation();

    return(
        <footer>
            <div className="container-fluid footer_top">
                <div className="row">
                    <div className="col-lg-6 col-md-12 footer_text">
                       <h3>{t("Stay Connected with")} Charge</h3>
                       <h5>
                            {t("For updates, offers, and more, follow us on our social media channels and subscribe to our newsletter.")}
                            {t("Ride smart, ride green, ride")}
                            &nbsp; CHARGE.
                        </h5>
                    </div>
                    <div className="col-lg-6 col-md-12 footer_links">
                        <div className="container-fluid">
                            <div className="row">
                                <div className="col-md-4 col-sm-6">
                                    <h3>{t("Services")}</h3>
                                    <ul>
                                        <li>
                                            <Link className="footer_item" to="/"><span>{t("Services")}</span></Link>
                                        </li>
                                        <li>
                                            <Link className="footer_item" to="/taxi"><span>{t("Taxi")}</span></Link>
                                        </li>
                                        <li>
                                            <Link className="footer_item" to="/driver">{t("Become a driver")}</Link>
                                        </li>
                                    </ul>
                                </div>
                                <div className="col-md-4 col-sm-6">
                                    <h3>Charged</h3>
                                    <ul>
                                        <li>
                                            <Link className="footer_item" to="/support"><span>{t("Contact Support")}</span></Link>
                                        </li>
                                        <li>
                                            <Link className="footer_item" to="/franchise"><span>{t("Start a franchise")}</span></Link>
                                        </li>
                                        <li>
                                            <Link className="footer_item" to="/locations"><span>{t("Locations")}</span></Link>
                                        </li>
                                        <li>
                                            <Link className="footer_item" to="/safety"><span>{t("Safety")}</span></Link>
                                        </li>
                                        <li>
                                            <Link className="footer_item" to="/about"><span>{t("About")}</span></Link>
                                        </li>
                                    </ul>
                                </div>
                                <div className="col-md-4 col-sm-12">
                                    <h3>{t("Follow us")}</h3>
                                    <ul>
                                        <li>
                                            <a className="footer_item" href="#">LinkedIn</a>
                                        </li>
                                        <li>
                                            <a className="footer_item" href="#">Facebook</a>
                                        </li>
                                        <li>
                                            <a className="footer_item" href="#">Instagram</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container-fluid footer_bottom">
                <div className="row">
                    <div className="col-lg-6 col-md-12 footer_app">
                        <div className="footer_app_android">
                            <a href="">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 214.36 242.49" width="15"><g fill="currentColor"><path d="M30.81,9.16a19.28,19.28,0,0,1,12.7,2.78l128.94,73.3-32.63,33Zm-9.92,9.92A23,23,0,0,0,20,25.73V230.65a22.88,22.88,0,0,0,.89,6.64L130,128.19Zm119,119L30.81,247.21a18.68,18.68,0,0,0,12.7-2.77l128.94-73.3Zm84.51-23.21L185.35,92.68l-35.71,35.51,35.61,35.61,39.08-22.22c12.89-7.34,12.89-19.44,0-26.78Z" transform="translate(-20 -7)"></path></g></svg>
                                Android
                            </a>
                        </div>
                        <div className="footer_app_apple">
                            <a href="">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 214.36 242.49" width="15"><g fill="currentColor"><path d="M173.58 128.59c.35 36.63 32.14 48.82 32.49 49A132.57 132.57 0 01189.32 212c-10.09 14.74-20.56 29.43-37 29.74-16.21.3-21.42-9.61-40-9.61S88 241.43 72.66 242c-15.92.6-28-15.95-38.22-30.64C13.66 181.35-2.23 126.48 19.1 89.45c10.6-18.4 29.53-30 50.09-30.34 15.63-.3 30.39 10.52 39.95 10.52s27.48-13 46.33-11.1c7.89.33 30.05 3.19 44.27 24-1.14.71-26.43 15.43-26.16 46.05m-30.46-89.93c8.46-10.23 14.15-24.48 12.59-38.65-12.18.49-26.91 8.12-35.65 18.35-7.83 9-14.69 23.54-12.84 37.44 13.58 1.05 27.45-6.9 35.9-17.14"></path></g></svg>
                                iOS
                            </a>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-12 footer_policy">
                        <div className="container-fluid">
                            <div className="row">
                                <Lang_butt />
                                <Link className="col-md-4 col-sm-12" to='/privacy'><span>{t("Privacy Policy")}</span></Link>
                                <Link className="col-md-4 col-sm-12" to="/terms"><span>{t("Terms of Service")}</span></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
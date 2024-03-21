import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import Lang_butt from "../lang_butt/lang_butt";
import Down_butt from "../down_butt/down_butt";
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
                            {t("For updates, offers, and more, follow us on our social media channels and subscribe to our newsletter.")} &nbsp;
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
                    <Down_butt />
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
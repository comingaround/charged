import { useTranslation } from "react-i18next";
import "./franchise_hero.css";

export default function Franchise_hero() {
    const { t } = useTranslation();

    return(
        <>
            <div className="container-fluid franchise_hero">
                <div className="row">
                    <div className="col-lg-6 col-md-12 fh_left">
                        <div>
                            <h1>{t("Launch a franchise")} </h1>
                            <h6>{t("We're expanding our service globally, enabling individuals to launch a Hopp franchise in their area. Invest in a rapidly growing market and launch your own fleet on an advanced software platform with expert guidance every step of the way.")} </h6>
                            <button>Contact us 
                                <span>
                                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M20 12H4m16 0l-6 6m6-6l-6-6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                    </svg>
                                </span>
                            </button>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-12 fh_right">
                        <div>
                            <img src="/slider/slider2.jpg" alt="ss" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
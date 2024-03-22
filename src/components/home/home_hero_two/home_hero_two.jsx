import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import "./home_hero_two.css";

function Home_hero_two(){
    const { t } = useTranslation();

    return(
        <>
            <div className="container-fluid home_hero_two">
                <div className="row">
                    <div className="col-md-6 col-sm-12 hh_two_left">
                        <div>
                            <h1>{t("Want to open your own CHARGE franchise?")}</h1>
                            <h3>
                                {t("Your safety is our top priority. CHARGE's e-scooters are equipped with the latest safety features and are regularly maintained for a safe ride. ")}
                                {t("We encourage all riders to wear helmets, follow traffic laws, and ride with caution.")}
                            </h3>
                            <section>
                                <Link to="/franchise">Read more <span>&rarr;</span></Link>
                                <Link to="/support">Contact us <span>&rarr;</span></Link>
                            </section>
                        </div>
                    </div>
                    <div className="col-md-6 col-sm-12 hh_two_right">
                        <div>
                            <img src="/for_franchise.jpg" alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Home_hero_two;
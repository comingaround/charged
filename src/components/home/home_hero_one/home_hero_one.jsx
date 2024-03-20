import "./home_hero_one.css";
import { useTranslation } from "react-i18next";

function Home_hero_one() {
    const { t } = useTranslation();

    return (
        <div className="home_hero_one">
            <div className="moving_text_wrapper">
                <div className="moving_text">
                    <span>Green and convenient.</span>
                    <span>Green and convenient.</span>
                </div>
            </div>
            <div className="container-fluid hh0_one">
                <div className="row">
                    <div className="col-lg-6 hh0_item1">
                        <div className="phone_frame">
                            <img src="/phone_frame.webp" alt="" />
                        </div>
                    </div>
                    <div className="col-lg-6 hh0_item2">
                        <h1>word</h1>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home_hero_one;

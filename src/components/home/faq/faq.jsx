import React, { useState } from 'react';
import { useTranslation } from "react-i18next";
import "./faq.css";

function Faq() {
    const { t } = useTranslation();
    const [visibleSections, setVisibleSections] = useState({});
    const toggleSectionVisibility = (id) => {
        setVisibleSections(prev => ({
            ...prev,
            [id]: !prev[id]
        }));
    };

    return (
        <>
            <div className="container-fluid" id="faq">
                <div className="row">
                    <div className="col-lg-6 faq_left">
                        <h1>{t("Frequently asked questions")}</h1>
                    </div>
                    <div className="col-lg-6 faq_right">
                        <div>
                            <section>
                                <h4 className='faq_item' onClick={() => toggleSectionVisibility('faq1')}>
                                    {t("Can I rent multiple scooters?")}
                                </h4>
                                <p style={{ display: visibleSections['faq1'] ? 'block' : 'none' }}>
                                    {t("Yes, you can press the")} <span>"{t("Add another")}"</span> {t("button after starting a ride to add more.")}
                                </p>
                            </section>
                            <section>
                                <h4 className='faq_item' onClick={() => toggleSectionVisibility('faq2')}>
                                    {t("Can I pause my ride?")}
                                </h4>
                                <p style={{ display: visibleSections['faq2'] ? 'block' : 'none' }}>
                                    {t("Yes, you can press the")} <span>"{t("stop ride")}"</span> {t("at the bottom of your screen.")}
                                </p>
                            </section>
                            <section>
                                <h4 className='faq_item' onClick={() => toggleSectionVisibility('faq3')}>
                                    {t("How much does it cost to ride?")}
                                </h4>
                                <p style={{ display: visibleSections['faq3'] ? 'block' : 'none' }}>
                                    {t("There is a starting fee to unlock the vehicle as well as a fee per minute used. Press on a scooter in the app to see the pricing. It may vary between locations.")}
                                </p>
                            </section>
                            <section>
                                <h4 className='faq_item' onClick={() => toggleSectionVisibility('faq4')}>
                                    {t("How do I start riding?")}
                                </h4>
                                <p style={{ display: visibleSections['faq4'] ? 'block' : 'none' }}>
                                    {t("Find a Hopp vehicle on the map, unlock it by tapping the")} <span>"{t("Ride")}"</span> {t("button, then either scan the QR code or enter the number below the QR code.")}
                                </p>
                            </section>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Faq;

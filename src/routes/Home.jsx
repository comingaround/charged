import Home_hero from "../components/home/home_hero/home_hero";
import Features from "../components/home/features/features";
import Features_two from "../components/home/features_two/features_two";
import Home_hero_two from "../components/home/home_hero_two/home_hero_two";
import MySlider from "../components/general/slider/slider";

function Home() {
    return(
        <>
            <Home_hero />
            <Features />
            <Features_two />
            <Home_hero_two />
            <MySlider />
        </>
    );
}

export default Home;
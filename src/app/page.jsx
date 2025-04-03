import Header from "./components/header";
import styles from "./page.module.css";
import Footer from "./components/footer";
import HeroSection from "./components/heroSection";
import CategoriesSection from "./components/categoriesSection";
import Feed from "./components/feed";
import FeaturedMemes from "./components/featuredMemes";
import CreatorsSection from "./components/creatorsSection";
import InterectionBar from "./components/interectionbar";
import Newsletter from "./components/newsLetter";
import Sidebar from "./components/sidebar";


export default function Home() {


  

 

  return (
    <div className={styles.container}>
      {/* COMPONENTE: Header */}
      <Header
      logoText={"MemeVerse"}
      logoImagem={"🌟"}
      navItem1={"Home"}
      navItem2={"Trending"}
      navItem3={"Create"}
      navItem4={"Categories"}
      navItem5={"Profile"}
       />
      {/* FIM COMPONENTE: Header */}

      <div className={styles.mainContent}>
        <div className={styles.contentArea}>
          {/* COMPONENTE: HeroSection */}
          <HeroSection />
          {/* FIM COMPONENTE: HeroSection */}

          {/* COMPONENTE: CategoriesSection */}
          <CategoriesSection />
          {/* FIM COMPONENTE: CategoriesSection */}

          {/* COMPONENTE: Feed */}
         <Feed />
          {/* FIM COMPONENTE: Feed */}

          

          {/* COMPONENTE: FeaturedMemesSection */}
          <FeaturedMemes />
          {/* FIM COMPONENTE: FeaturedMemesSection */}
          
          {/* COMPONENTE: CreatorsSection */}
          <CreatorsSection />
          {/* FIM COMPONENTE: CreatorsSection */}

          {/* COMPONENTE: NewsletterSection */}
          <Newsletter />
          {/* FIM COMPONENTE: NewsletterSection */}
        </div>

        {/* COMPONENTE: Sidebar */}
        <Sidebar />
        {/* FIM COMPONENTE: Sidebar */}
      </div>

      {/* COMPONENTE: Footer */}
      <Footer
      footerData={"© 2025 MemeVerse - Todos os direitos reservados"}
      socialLinks1={"📱"}
      socialLinks2={"📘"}
      socialLinks3={"📸"}
      socialLinks4={"🐦"}
      />
      {/* FIM COMPONENTE: Footer */}
    </div>
  );
}

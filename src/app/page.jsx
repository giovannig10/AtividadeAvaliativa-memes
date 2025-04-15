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

  const categories = [
    { id: 1, name: "Programação", icon: "💻", count: 478 },
    { id: 2, name: "Escola", icon: "📚", count: 325 },
    { id: 3, name: "Trabalho", icon: "💼", count: 642 },
    { id: 4, name: "Games", icon: "🎮", count: 513 },
    { id: 5, name: "Relacionamentos", icon: "❤️", count: 287 },
    { id: 6, name: "Esportes", icon: "⚽", count: 195 },
  ];

  const topCreators = [
    {
      id: 1,
      name: "MemeQueen",
      avatar: "https://i.pravatar.cc/150?img=23",
      followers: "245K",
      bio: "Criando memes que fazem seu dia melhor!",
    },
    {
      id: 2,
      name: "FunnyGuy42",
      avatar: "https://i.pravatar.cc/150?img=24",
      followers: "189K",
      bio: "Especialista em memes de programação e gatos",
    },
    {
      id: 3,
      name: "LaughFactory",
      avatar: "https://i.pravatar.cc/150?img=25",
      followers: "327K",
      bio: "Se não te fizer rir, devolvo seu tempo!",
    },
  ];


  

 

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
          <CategoriesSection categories={categories} />
          {/* FIM COMPONENTE: CategoriesSection */}

          {/* COMPONENTE: Feed */}
         <Feed />
          {/* FIM COMPONENTE: Feed */}

          

          {/* COMPONENTE: FeaturedMemesSection */}
          <FeaturedMemes />
          {/* FIM COMPONENTE: FeaturedMemesSection */}
          
          {/* COMPONENTE: CreatorsSection */}
          <CreatorsSection topCreators={topCreators}/>
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

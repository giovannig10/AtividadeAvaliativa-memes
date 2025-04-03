import Header from "./components/header";
import styles from "./page.module.css";
import Footer from "./components/footer";
import HeroSection from "./components/heroSection";
import CategoriesSection from "./components/categoriesSection";
import Feed from "./components/feed";
import FeaturedMemes from "./components/featuredMemes";


export default function Home() {


  // Array de criadores em destaque
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

  // Eventos próximos
  const upcomingEvents = [
    {
      id: 1,
      title: "Competição de Memes 2025",
      date: "15 de Maio, 2025",
      participants: 356,
    },
    {
      id: 2,
      title: "Workshop: Como Criar Memes Virais",
      date: "22 de Maio, 2025",
      participants: 127,
    },
  ];

  return (
    <div className={styles.container}>
      {/* COMPONENTE: Header */}
      <Header />
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
          <section className={styles.creatorsSection}>
            <h2 className={styles.sectionTitle}>Criadores em Destaque</h2>
            <div className={styles.creatorsGrid}>
              {topCreators.map((creator) => (
                // COMPONENTE: CreatorCard
                <div key={creator.id} className={styles.creatorCard}>
                  <img
                    src={creator.avatar}
                    alt={creator.name}
                    className={styles.creatorAvatar}
                  />
                  <h3 className={styles.creatorName}>{creator.name}</h3>
                  <p className={styles.creatorBio}>{creator.bio}</p>
                  <div className={styles.creatorStats}>
                    <span className={styles.creatorFollowers}>
                      {creator.followers} seguidores
                    </span>
                  </div>
                  <button className={styles.followButton}>Seguir</button>
                </div>
                // FIM COMPONENTE: CreatorCard
              ))}
            </div>
          </section>
          {/* FIM COMPONENTE: CreatorsSection */}

          {/* COMPONENTE: NewsletterSection */}
          <section className={styles.newsletterSection}>
            <div className={styles.newsletterContent}>
              <h2 className={styles.newsletterTitle}>Fique por dentro!</h2>
              <p className={styles.newsletterDescription}>
                Assine nossa newsletter e receba os melhores memes toda semana!
              </p>
              <div className={styles.newsletterForm}>
                <input
                  type="email"
                  placeholder="Seu melhor e-mail"
                  className={styles.newsletterInput}
                />
                <button className={styles.newsletterButton}>Assinar</button>
              </div>
              <p className={styles.newsletterDisclaimer}>
                Nós respeitamos sua privacidade. Cancele quando quiser.
              </p>
            </div>
            <div className={styles.newsletterImageContainer}>
              <img
                src="https://i.imgur.com/OELrGl5.jpg"
                alt="Newsletter"
                className={styles.newsletterImage}
              />
            </div>
          </section>
          {/* FIM COMPONENTE: NewsletterSection */}
        </div>

        {/* COMPONENTE: Sidebar */}
        <aside className={styles.sidebar}>
          <div className={styles.sidebarSection}>
            <h3 className={styles.sidebarTitle}>Eventos Próximos</h3>
            {upcomingEvents.map((event) => (
              // COMPONENTE: EventCard
              <div key={event.id} className={styles.eventCard}>
                <h4 className={styles.eventTitle}>{event.title}</h4>
                <p className={styles.eventDate}>{event.date}</p>
                <p className={styles.eventParticipants}>
                  {event.participants} participantes
                </p>
                <button className={styles.eventButton}>Participar</button>
              </div>
              // FIM COMPONENTE: EventCard
            ))}
          </div>

          <div className={styles.sidebarSection}>
            <h3 className={styles.sidebarTitle}>MemeVerse Premium</h3>
            <div className={styles.premiumCard}>
              <h4 className={styles.premiumTitle}>
                Desbloqueie recursos exclusivos!
              </h4>
              <ul className={styles.premiumFeatures}>
                <li>Sem anúncios</li>
                <li>Uploads ilimitados</li>
                <li>Ferramentas de edição avançadas</li>
                <li>Estatísticas detalhadas</li>
              </ul>
              <button className={styles.premiumButton}>
                Experimentar Grátis
              </button>
            </div>
          </div>

          <div className={styles.sidebarSection}>
            <h3 className={styles.sidebarTitle}>Tags Populares</h3>
            <div className={styles.tagCloud}>
              <span className={`${styles.tag} ${styles.tagLarge}`}>
                #memeday
              </span>
              <span className={styles.tag}>#programação</span>
              <span className={`${styles.tag} ${styles.tagMedium}`}>
                #humor
              </span>
              <span className={styles.tag}>#escola</span>
              <span className={`${styles.tag} ${styles.tagLarge}`}>
                #trabalhoremoto
              </span>
              <span className={styles.tag}>#segundafeira</span>
              <span className={`${styles.tag} ${styles.tagMedium}`}>
                #games
              </span>
              <span className={styles.tag}>#nofilter</span>
            </div>
          </div>
        </aside>
        {/* FIM COMPONENTE: Sidebar */}
      </div>

      {/* COMPONENTE: Footer */}
      <Footer />
      {/* FIM COMPONENTE: Footer */}
    </div>
  );
}

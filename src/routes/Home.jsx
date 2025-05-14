import Footer from "../components/Footer.jsx"
import Navigation from "../components/Navigation.jsx"
import ImageSlider from "../components/ImageSlider.jsx"
import LinkButton from "../components/LinkButton.jsx"

export default function Home() {
  return (
    <>
      <Navigation />
      <main>
        <ImageSlider />
        <section>
          <img />
          <div>
            <h1>Willkommen bei Museqi</h1>
            <p>
              Seit 2009 ist es unsere Leidenschaft, dich mit einer sorgfältig
              ausgewählten Palette an Musikinstrumenten und Zubehör zu
              begeistern. Wir bieten eine breite Auswahl für Musiker jeden
              Levels – von Schlagzeugen und Saxofonen bis hin zu Gitarren und
              Keyboards. Dabei legen wir Wert auf Qualität, kompetente Beratung
              und faire Preise, um deine musikalische Reise optimal zu
              unterstützen.
            </p>
            <p>
              Unser Angebot umfasst nicht nur eine Vielfalt an Instrumenten
              renommierter Marken, sondern auch ein umfangreiches Sortiment an
              hochwertigem Zubehör. Finde alles, was du zur Perfektionierung
              deines Sounds und Equipments benötigst: von Saiten und Plektren
              bis hin zu Verstärkern und Cases. Unser Ziel ist es, dir alles aus
              einer Hand zu bieten, damit du dich voll und ganz auf deine Musik
              konzentrieren kannst. Entdecke jetzt unsere musikalische Welt!
            </p>
            <LinkButton text='Jetzt Equipment entdecken' link='shop' />
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}

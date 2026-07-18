import { createFileRoute } from "@tanstack/react-router";
import archAsset from "@/assets/arch.asset.json";
import heroPortaAsset from "@/assets/hero-porta.asset.json";
import balconyAsset from "@/assets/balcony.asset.json";
import bathroomAsset from "@/assets/bathroom.asset.json";
import terraceAsset from "@/assets/terrace.asset.json";

const GALLERY_IMAGES = [
  {
    src: "/images/camera-matrimoniale-blu.webp",
    alt: "Camera matrimoniale del B&B Josepha con biancheria a righe blu",
    label: "Camera matrimoniale",
  },
  {
    src: "/images/terrazza-pranzo.webp",
    alt: "Terrazza esterna del B&B Josepha con tavolo apparecchiato tra il verde",
    label: "Terrazza",
  },
  {
    src: "/images/sala-colazione.webp",
    alt: "Sala colazione del B&B Josepha con tavoli apparecchiati",
    label: "Sala colazione",
  },
  {
    src: "/images/sala-pranzo.webp",
    alt: "Sala da pranzo interna del B&B Josepha",
    label: "Sala da pranzo",
  },
  {
    src: "/images/vicolo-taormina.webp",
    alt: "Vicolo in pietra davanti all'ingresso del B&B Josepha a Taormina",
    label: "La strada davanti casa",
  },
  {
    src: "/images/cortile-esterno.webp",
    alt: "Cortile esterno del B&B Josepha con piante e sedute colorate",
    label: "Cortile",
  },
  {
    src: "/images/camera-con-armadio.webp",
    alt: "Camera del B&B Josepha con armadio e letto matrimoniale",
    label: "Camera con armadio",
  },
  {
    src: "/images/camera-singola.webp",
    alt: "Camera singola del B&B Josepha",
    label: "Camera singola",
  },
  {
    src: "/images/dettaglio-bagno.webp",
    alt: "Dettaglio del bagno del B&B Josepha con maioliche blu e set di cortesia",
    label: "Dettaglio bagno",
  },
];

const BREAKFAST_IMAGES = [
  {
    src: "/images/colazione-buffet.webp",
    alt: "Tavolo della colazione del B&B Josepha con brioche, agrumi e succo d'arancia",
    label: "Colazione a buffet",
  },
  {
    src: "/images/colazione-pancake.webp",
    alt: "Pancake con fragole servito a colazione al B&B Josepha",
    label: "Pancake e fragole",
  },
  {
    src: "/images/colazione-salata.webp",
    alt: "Colazione salata del B&B Josepha con focaccia, uovo e avocado",
    label: "Colazione salata",
  },
];

export const Route = createFileRoute("/")({
  component: Index,
});

const BOOKING_URL =
  "https://www.booking.com/hotel/it/josepha-house.it.html";
const TRIPADVISOR_URL =
  "https://www.tripadvisor.it/Hotel_Review-g187892-d3475386-Reviews-B_B_Josepha-Taormina_Province_of_Messina_Sicily.html";
const GOOGLE_MAPS_URL =
  "https://www.google.com/maps/place/Bed+And+Breakfast+Josepha/@37.8549293,15.2924389,18.5z/data=!3m1!5s0x131411a1da53a8c5:0xcfcef149f9eddc0c!4m10!3m9!1s0x131411a1db949131:0x634358c1bf202b09!5m3!1s2026-07-21!4m1!1i2!8m2!3d37.8543014!4d15.2893842!16s%2Fg%2F1tdlr5zb";
const GOOGLE_REVIEWS_URL =
  "https://www.google.com/maps/place/Bed+And+Breakfast+Josepha/@37.8543056,15.2868093,17z/data=!4m8!3m7!1s0x131411a1db949131:0x634358c1bf202b09!8m2!3d37.8543014!4d15.2893842!9m1!1b1";

function Index() {
  return (
    <div className="bg-limestone text-foreground font-sans min-h-screen">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 px-6 md:px-10 py-5 flex justify-between items-center mix-blend-difference text-white">
        <a href="#top" className="font-serif text-2xl tracking-tight">
          Josepha
        </a>
        <div className="hidden md:flex gap-8 text-[11px] uppercase tracking-[0.2em] font-medium">
          <a href="#storia" className="hover:text-lemon transition-colors">
            La Storia
          </a>
          <a href="#camere" className="hover:text-lemon transition-colors">
            Ambienti
          </a>
          <a href="#galleria" className="hover:text-lemon transition-colors">
            Galleria
          </a>
          <a href="#servizi" className="hover:text-lemon transition-colors">
            Servizi
          </a>
          <a href="#posizione" className="hover:text-lemon transition-colors">
            Posizione
          </a>
          <a href="#recensioni" className="hover:text-lemon transition-colors">
            Recensioni
          </a>
        </div>
        <a
          href={BOOKING_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-white text-stone-900 px-5 py-2 text-[11px] uppercase tracking-widest font-semibold hover:bg-lemon transition-colors"
        >
          Prenota
        </a>
      </nav>

      {/* Hero */}
      <section
        id="top"
        className="relative w-full flex items-center justify-center overflow-hidden bg-stone-900 h-screen min-h-[560px] sm:h-auto sm:min-h-0 sm:aspect-[16/10] md:h-screen md:aspect-auto"
      >
        {/* Mobile — trittico: cortile / ingresso / colazione, per riempire lo schermo senza spazi vuoti */}
        <div className="sm:hidden absolute inset-0 flex flex-col">
          <div className="flex-1 overflow-hidden">
            <img
              src="/images/cortile-esterno.webp"
              alt=""
              aria-hidden="true"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="w-full aspect-[1920/1280] shrink-0 overflow-hidden">
            <img
              src={heroPortaAsset.url}
              alt="Arco di Porta Messina con insegna del B&B Josepha, Vico Zecca 31 Taormina"
              className="w-full h-full object-cover"
              width={1920}
              height={1280}
            />
          </div>
          <div className="flex-1 overflow-hidden">
            <img
              src="/images/colazione-pancake.webp"
              alt=""
              aria-hidden="true"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Tablet/Desktop — foto piena */}
        <img
          src={heroPortaAsset.url}
          alt="Arco di Porta Messina con insegna del B&B Josepha, Vico Zecca 31 Taormina"
          className="hidden sm:block absolute inset-0 w-full h-full object-contain md:object-cover"
          width={1920}
          height={1280}
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 text-center text-white px-4">
          <p className="text-[10px] sm:text-[11px] uppercase tracking-[0.4em] mb-4 sm:mb-6 opacity-90">
            Boutique Bed &amp; Breakfast
          </p>
          <h1 className="font-serif text-4xl sm:text-6xl md:text-8xl mb-4 sm:mb-6 leading-none">
            Josepha Taormina
          </h1>
          <div className="flex items-center justify-center gap-4">
            <span className="h-px w-12 bg-white/60" />
            <p className="italic font-serif text-base sm:text-lg md:text-xl">
              Via Vico Zecca, 31
            </p>
            <span className="h-px w-12 bg-white/60" />
          </div>
        </div>
        <div className="absolute bottom-6 sm:bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/70">
          <span className="text-[10px] uppercase tracking-widest">
            Scopri di più
          </span>
          <div className="w-px h-12 bg-white/40" />
        </div>
      </section>

      {/* Rating badge */}
      <div className="flex justify-center -mt-8 relative z-20">
        <a
          href={BOOKING_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-majolica text-white px-8 py-4 flex items-center gap-4 shadow-2xl hover:bg-majolica/90 transition-colors"
        >
          <div className="text-3xl font-serif">9,2</div>
          <div className="h-8 w-px bg-white/25" />
          <div className="text-[10px] uppercase tracking-widest leading-tight">
            Eccellente
            <br />
            Booking.com
          </div>
        </a>
      </div>

      {/* Story */}
      <section
        id="storia"
        className="max-w-7xl mx-auto px-6 py-28 md:py-32 grid md:grid-cols-2 gap-16 md:gap-20 items-center"
      >
        <div className="space-y-8">
          <span className="text-[11px] uppercase tracking-[0.3em] text-terracotta font-medium">
            La nostra storia
          </span>
          <h2 className="font-serif text-5xl md:text-6xl text-terracotta leading-[1.05] italic">
            L'accoglienza di
            <br />
            Laura e Davide.
          </h2>
          <div className="text-muted-foreground space-y-4 leading-relaxed max-w-md">
            <p>
              Siamo felici di ospitarvi nella nostra casa, nel cuore pulsante di
              Taormina, a pochi passi dall'Arco di Porta Messina. Per motivi di
              lavoro potremmo non essere sempre fisicamente presenti, ma
              troverete il nostro staff pronto a rispondere a ogni vostra
              esigenza.
            </p>
            <p>
              La nostra casa è davvero silenziosa, nonostante si trovi
              praticamente sul Corso Umberto: un angolo di pace prima di
              tuffarvi nelle meraviglie della città, tra musica, cocktail, luci
              e sapori siciliani. Vi aspettiamo.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4 border-t border-border pt-8">
            <div>
              <span className="block text-2xl font-serif">2 Doppie</span>
              <span className="text-[10px] uppercase tracking-widest text-muted-foreground">
                Camere matrimoniali
              </span>
            </div>
            <div>
              <span className="block text-2xl font-serif">2 Singole</span>
              <span className="text-[10px] uppercase tracking-widest text-muted-foreground">
                Camere individuali
              </span>
            </div>
          </div>
        </div>
        <div className="relative">
          <img
            src={balconyAsset.url}
            alt="Balcone del B&B Josepha con lanterna tradizionale siciliana"
            className="aspect-[4/5] w-full object-cover shadow-lg"
            width={800}
            height={1000}
            loading="lazy"
          />
          <div className="absolute -bottom-6 -left-6 bg-lemon px-6 py-3 font-serif italic text-lg text-stone-900 shadow-md hidden md:block">
            Benvenuti a casa
          </div>
        </div>
      </section>

      {/* Ambienti / Spaces */}
      <section id="camere" className="bg-stone-900 text-white py-28 md:py-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row md:justify-between md:items-end mb-16 gap-6">
            <div className="max-w-lg">
              <span className="text-[11px] uppercase tracking-[0.3em] text-lemon font-medium mb-4 block">
                Gli ambienti
              </span>
              <h2 className="font-serif text-5xl md:text-6xl italic leading-tight">
                Ambienti unici
              </h2>
            </div>
            <p className="text-stone-400 max-w-sm">
              Su due piani, tra un ampio soggiorno, due terrazze panoramiche e
              quattro camere silenziose. Ogni spazio riflette l'anima di
              Taormina, tra comfort contemporaneo e dettagli storici.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="group">
              <div className="aspect-[3/4] overflow-hidden mb-6">
                <img
                  src={bathroomAsset.url}
                  alt="Bagno del B&B Josepha rivestito in maioliche siciliane blu"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  width={800}
                  height={1000}
                  loading="lazy"
                />
              </div>
              <h3 className="font-serif text-2xl mb-2">Dettagli di pregio</h3>
              <p className="text-stone-400 text-sm">
                Bagni privati rifiniti con maioliche siciliane, dotati di bidet,
                doccia, asciugacapelli e set di cortesia.
              </p>
            </div>
            <div className="group md:translate-y-12">
              <div className="aspect-[3/4] overflow-hidden mb-6">
                <img
                  src={terraceAsset.url}
                  alt="Terrazza del B&B Josepha con bougainvillea e sedute mediterranee"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  width={800}
                  height={1000}
                  loading="lazy"
                />
              </div>
              <h3 className="font-serif text-2xl mb-2">Terrazza panoramica</h3>
              <p className="text-stone-400 text-sm">
                Uno spazio all'aperto tra bougainvillea e sedute mediterranee,
                perfetto per una pausa nel cuore di Taormina.
              </p>
            </div>
            <div className="group">
              <div className="aspect-[3/4] overflow-hidden mb-6">
                <img
                  src={archAsset.url}
                  alt="Vicolo in pietra accanto all'Arco di Porta Messina, Taormina"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  width={1000}
                  height={1280}
                  loading="lazy"
                />
              </div>
              <h3 className="font-serif text-2xl mb-2">Scorci di storia</h3>
              <p className="text-stone-400 text-sm">
                Fuori dalla porta, i vicoli in pietra di Taormina: l'Arco di
                Porta Messina, il Corso Umberto e il Teatro Antico a pochi passi.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Galleria camere e struttura */}
      <section id="galleria" className="py-28 md:py-32 bg-limestone">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-[11px] uppercase tracking-[0.3em] text-majolica font-medium mb-4 block">
              Uno sguardo dentro casa
            </span>
            <h2 className="font-serif text-5xl md:text-6xl italic text-majolica">
              Le camere e la struttura
            </h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
            {GALLERY_IMAGES.map((img) => (
              <figure
                key={img.src}
                className="relative aspect-[4/3] overflow-hidden group first:col-span-2 first:aspect-[16/9] md:first:col-span-1 md:first:aspect-[4/3]"
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                <figcaption className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent text-white text-[10px] uppercase tracking-widest px-4 py-3">
                  {img.label}
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* Colazione */}
      <section className="py-28 md:py-32 bg-white border-t border-border">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-[11px] uppercase tracking-[0.3em] text-terracotta font-medium mb-4 block">
              Ogni mattina
            </span>
            <h2 className="font-serif text-5xl md:text-6xl italic mb-4">
              La colazione
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Colazione a buffet dolce e salata preparata dalla signora Lucia,
              con prodotti freschi e agrumi siciliani.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {BREAKFAST_IMAGES.map((img) => (
              <figure
                key={img.src}
                className="relative aspect-[4/5] overflow-hidden group"
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                <figcaption className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent text-white text-[10px] uppercase tracking-widest px-4 py-3">
                  {img.label}
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* Servizi & Regole */}
      <section id="servizi" className="py-28 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 md:gap-24">
          <div>
            <span className="text-[11px] uppercase tracking-[0.3em] text-majolica font-medium mb-4 block">
              Comfort
            </span>
            <h2 className="font-serif text-4xl md:text-5xl mb-12 italic text-majolica">
              Servizi &amp; comfort
            </h2>
            <div className="grid grid-cols-2 gap-y-6 gap-x-4">
              {[
                "WiFi gratuito",
                "Aria condizionata",
                "Riscaldamento",
                "Colazione a buffet",
                "Camere non fumatori",
                "Camere familiari",
                "Bagno privato con bidet",
                "Cassaforte in camera",
                "Terrazza panoramica",
                "Deposito bagagli",
                "Check-in con chiavi",
                "Banco escursioni",
              ].map((s) => (
                <div key={s} className="flex items-center gap-3">
                  <div className="size-2 bg-lemon shrink-0" />
                  <span className="text-xs uppercase tracking-widest">
                    {s}
                  </span>
                </div>
              ))}
            </div>
            <p className="mt-10 text-sm text-muted-foreground max-w-md leading-relaxed">
              Su richiesta: tour a piedi, escursioni sull'Etna con la nostra
              Guida Vulcanologica, massaggi corpo, piedi, collo e schiena.
            </p>
          </div>

          <div id="regole" className="bg-limestone p-10 md:p-12">
            <span className="text-[11px] uppercase tracking-[0.3em] text-terracotta font-medium mb-4 block">
              Informazioni utili
            </span>
            <h2 className="font-serif text-4xl md:text-5xl mb-10 italic text-terracotta">
              Regole della casa
            </h2>
            <ul className="space-y-5 text-sm">
              <li className="flex justify-between border-b border-border pb-3">
                <span className="text-muted-foreground">Check-in</span>
                <span className="font-semibold">14:00 — 23:30</span>
              </li>
              <li className="flex justify-between border-b border-border pb-3">
                <span className="text-muted-foreground">Check-out</span>
                <span className="font-semibold">Entro le 10:00</span>
              </li>
              <li className="flex justify-between border-b border-border pb-3">
                <span className="text-muted-foreground">Ore di silenzio</span>
                <span className="font-semibold">23:00 — 07:00</span>
              </li>
              <li className="flex justify-between border-b border-border pb-3">
                <span className="text-muted-foreground">Bambini</span>
                <span className="font-semibold">Tutte le età benvenute</span>
              </li>
              <li className="flex justify-between border-b border-border pb-3">
                <span className="text-muted-foreground">Animali</span>
                <span className="font-semibold">Non ammessi</span>
              </li>
              <li className="flex justify-between border-b border-border pb-3">
                <span className="text-muted-foreground">Fumo</span>
                <span className="font-semibold">Vietato</span>
              </li>
              <li className="flex justify-between pb-3">
                <span className="text-muted-foreground">Feste / eventi</span>
                <span className="font-semibold">Non consentiti</span>
              </li>
            </ul>
            <p className="mt-8 text-xs text-muted-foreground leading-relaxed">
              Vi chiediamo cortesemente di comunicare in anticipo l'orario di
              arrivo. Lingue parlate: italiano, inglese, tedesco.
            </p>
          </div>
        </div>
      </section>

      {/* Posizione */}
      <section id="posizione" className="py-28 md:py-32 border-t border-border">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-[11px] uppercase tracking-[0.3em] text-terracotta font-medium mb-4 block">
              Dove siamo
            </span>
            <h2 className="font-serif text-5xl md:text-6xl italic mb-4">
              A pochi passi dal mito
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Via Vico Zecca 31 — un pittoresco vicolo adiacente all'Arco di
              Porta Messina, a un passo dal Corso Umberto.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center mb-16">
            {[
              { d: "150 m", l: "Funivia Taormina" },
              { d: "1,5 km", l: "Spiaggia di Spisone" },
              { d: "1,6 km", l: "Mazzarò · Isola Bella" },
              { d: "58 km", l: "Aeroporto Catania" },
            ].map((x) => (
              <div key={x.l} className="space-y-2">
                <div className="text-3xl font-serif text-terracotta">{x.d}</div>
                <p className="text-[11px] uppercase tracking-widest text-muted-foreground">
                  {x.l}
                </p>
              </div>
            ))}
          </div>
          <div className="text-center">
            <a
              href={GOOGLE_MAPS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block text-xs uppercase tracking-[0.25em] font-semibold text-majolica border-b border-majolica pb-1 hover:text-terracotta hover:border-terracotta transition-colors"
            >
              Apri su Google Maps →
            </a>
          </div>

          {/* Testimonial cards */}
          <div className="grid md:grid-cols-2 gap-6 mt-12 text-left">
            {[
              {
                text: "Posto in pieno centro a Taormina. Stanza grande e dotata di ogni comfort. L'accoglienza della proprietaria indiscussa, super disponibile! Ottima colazione grazie alla signora Lucia che ogni mattina...",
                name: "Martyna",
                country: "Italia",
              },
              {
                text: "Silenziosa, molto pulita e personale estremamente gentile e disponibile. Sono stata accolta in modo eccellente.",
                name: "Serena",
                country: "Italia",
              },
              {
                text: "Tutto! La struttura è in pieno centro. Laura è stata gentilissima nell'accoglierci in anticipo, fornendoci tante informazioni su come muoverci in città e i punti di maggiore interesse.",
                name: "Laura",
                country: "Italia",
              },
              {
                text: "La struttura si trova al centro di Taormina, vicino alla funivia e dal terminal degli autobus. Davide è stato molto gentile e disponibile a ogni richiesta fatta, e ci ha raccontato varie esperienze...",
                name: "Serena",
                country: "Italia",
              },
            ].map((r, i) => (
              <figure
                key={i}
                className="bg-white border border-border p-8 flex flex-col gap-5"
              >
                <div className="text-lemon text-lg tracking-widest" aria-label="5 stelle su 5">
                  ★★★★★
                </div>
                <blockquote className="font-serif italic text-lg leading-relaxed text-stone-800">
                  «{r.text}»
                </blockquote>
                <figcaption className="flex items-center gap-3 mt-auto pt-4 border-t border-border">
                  <div className="size-9 rounded-full bg-terracotta text-white flex items-center justify-center font-serif text-sm">
                    {r.name.charAt(0)}
                  </div>
                  <div className="text-sm">
                    <div className="font-semibold">{r.name}</div>
                    <div className="text-xs uppercase tracking-widest text-muted-foreground">
                      {r.country}
                    </div>
                  </div>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* Recensioni */}
      {/* Esperienze */}
      <section className="py-28 md:py-32 bg-white border-t border-border">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-[11px] uppercase tracking-[0.3em] text-majolica font-medium mb-4 block">
              A un passo dalla porta
            </span>
            <h2 className="font-serif text-5xl md:text-6xl italic text-majolica">
              Vivere Taormina
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-10">
            <div className="space-y-3">
              <div className="text-[10px] uppercase tracking-widest text-terracotta">01 · Cultura</div>
              <h3 className="font-serif text-2xl">Il Teatro Antico</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Percorrete il Corso Umberto fino al Teatro Antico: greci, romani
                e la vista sull'Etna in un unico sguardo.
              </p>
            </div>
            <div className="space-y-3">
              <div className="text-[10px] uppercase tracking-widest text-terracotta">02 · Mare</div>
              <h3 className="font-serif text-2xl">Isola Bella</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                A 1,6 km, raggiungibile in funivia: una riserva naturale
                affacciata su acque cristalline, tra le più fotografate di Sicilia.
              </p>
            </div>
            <div className="space-y-3">
              <div className="text-[10px] uppercase tracking-widest text-terracotta">03 · Avventura</div>
              <h3 className="font-serif text-2xl">Escursioni sull'Etna</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Organizziamo escursioni con la nostra Guida Vulcanologica sul
                vulcano attivo più alto d'Europa. Su richiesta anche tour a piedi
                e massaggi.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="recensioni" className="py-28 md:py-32 bg-limestone">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <span className="text-[11px] uppercase tracking-[0.3em] text-terracotta font-medium mb-4 block">
            La voce dei nostri ospiti
          </span>
          <h2 className="font-serif text-5xl md:text-6xl italic mb-8">
            Amati dai nostri ospiti
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto mb-12">
            9,2 su Booking.com e 4,9 su 5 su Google: le recensioni dei nostri
            ospiti raccontano l'accoglienza, la posizione e la cura per il
            dettaglio del B&amp;B Josepha.
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            <a
              href={GOOGLE_REVIEWS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="border border-border bg-white p-8 hover:border-terracotta transition-colors group"
            >
              <div className="text-[11px] uppercase tracking-widest text-muted-foreground mb-3">
                Google
              </div>
              <div className="font-serif text-3xl mb-3">
                <span className="text-terracotta">4,9</span>
                <span className="text-muted-foreground text-xl"> / 5</span>
              </div>
              <div className="text-xs uppercase tracking-widest text-terracotta group-hover:underline">
                Leggi su Google →
              </div>
            </a>
            <a
              href={TRIPADVISOR_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="border border-border bg-white p-8 hover:border-terracotta transition-colors group"
            >
              <div className="text-[11px] uppercase tracking-widest text-muted-foreground mb-3">
                Tripadvisor
              </div>
              <div className="font-serif text-3xl mb-3">Recensioni ospiti</div>
              <div className="text-xs uppercase tracking-widest text-terracotta group-hover:underline">
                Leggi su Tripadvisor →
              </div>
            </a>
            <a
              href={BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="border border-border bg-majolica text-white p-8 hover:bg-majolica/90 transition-colors group"
            >
              <div className="text-[11px] uppercase tracking-widest text-white/60 mb-3">
                Booking.com
              </div>
              <div className="font-serif text-3xl mb-3">
                <span className="text-lemon">9,2</span> Eccellente
              </div>
              <div className="text-xs uppercase tracking-widest text-lemon group-hover:underline">
                Leggi &amp; prenota →
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* CTA Footer */}
      <footer className="bg-terracotta text-white py-24 text-center">
        <div className="max-w-2xl mx-auto px-6">
          <h2 className="font-serif text-5xl md:text-6xl mb-8 italic">
            Vivi l'essenza di Taormina
          </h2>
          <p className="mb-12 text-white/85 leading-relaxed font-light">
            Siamo pronti ad accogliervi nel calore della nostra casa siciliana.
            Prenotate il vostro soggiorno tramite Booking.com per la migliore
            tariffa garantita.
          </p>
          <a
            href={BOOKING_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-white text-terracotta px-12 py-5 text-xs uppercase tracking-[0.25em] font-bold hover:bg-lemon hover:text-stone-900 transition-colors"
          >
            Verifica disponibilità
          </a>
          <div className="mt-16 pt-10 border-t border-white/15 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] uppercase tracking-widest opacity-70">
            <span>© {new Date().getFullYear()} Bed and Breakfast Josepha</span>
            <span>Via Vico Zecca 31, Taormina (ME), Sicilia</span>
            <span>Licenza IT083097C1EPQW58HW</span>
          </div>
        </div>
      </footer>
    </div>
  );
}

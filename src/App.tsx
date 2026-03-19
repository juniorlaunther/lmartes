/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion, useScroll, useSpring } from "motion/react";
import { 
  Phone, 
  Instagram, 
  Facebook, 
  Menu, 
  X, 
  ChevronRight, 
  ChevronLeft,
  ShieldCheck, 
  Clock, 
  MapPin, 
  Wrench, 
  Home, 
  Lock, 
  Layers,
  Star,
  MessageCircle,
  Image as ImageIcon
} from "lucide-react";
import React, { useState, useEffect } from "react";

const COLORS = {
  primary: "#2b3276",
  accent: "#3d46a1"
};

const LOGO_URL = "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiGHqJgjBXyJd36Yp5KoTdjfT1YwlAvsB22d0gGvRsrwmw5uAmRlMKd6i_EXgD6iIw_LZmnSub6Pjp8KMW6eoCJp2eE-jFJF0-gtMhrNzixgLnFzSad8lY3uIDHkdrFCTVpykZrAp74YozNSrF2rCLWk-Si1lwNJw7kukbi9vq5y1yPIeTqT-Bg0hGdFpw/s320/logo%20LM%20(fundo%20transparente%20e%20logo%20em%20azul).png";
const HERO_IMG = "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgMa-sJIQXSgBczVRvqKfXbmFBhvCZKqEYnY7KeefzbSeuPIGhTUtudLFjg7-SVGpcS3eZNn02OzIs_Z0TBQ7D4mWvE1f1g2ck7q_cr7m3aWDhyphenhyphenyFmT-EeoQhCyQqjnD8E08JclqexglZbsqVcc8f167YCVH7D98oW3BPalYLVxR-AVDchICWZNcBUyMRc/s16000/imagem%20sessao%20hero%20amarelada.png";
const ABOUT_IMG = "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhP5uYUIxvNdxsUekgA8hrYJjtPzCzGkln-801RdP5RKRw5Jr7hErPcwwRYGJT43GzxZM6DefjdJES9q6CcK3rskVDZXL2Q_CwMBRTOy4nqLB6oYZ_qMdl6aNJumu5Nq6jcnHQx9fqgADkvOgSV8A1wvrl4Lppc0g_w83aiS9Z-aA6NALeKDbM5qa7ppo0/w426-h640/sobre.png";

const WHATSAPP_LINK = "https://wa.me/5515996413455";

const GALLERY_IMAGES = [
  "https://scontent.fcpq7-1.fna.fbcdn.net/v/t39.30808-6/634887707_1485583236787714_2113799507054680305_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=107&ccb=1-7&_nc_sid=7b2446&_nc_eui2=AeFhGOlgkiEtz2AdjLgnrTW3d2cNrJLkTq13Zw2skuROrSjkw89am2e2Ahn__HrppzxXqyJ1s-Sj2qrJbHCpef1j&_nc_ohc=cea960rBEqEQ7kNvwG2OZB4&_nc_oc=AdpHX8yoatN-vrkIYeQeUBTnpdf_o2CEiDiuhd4_8A3ImuOs4RJGiOXvtMDcvtRQdRM&_nc_zt=23&_nc_ht=scontent.fcpq7-1.fna&_nc_gid=lnYQQuUUoi391l0XwqsBJQ&_nc_ss=7a30f&oh=00_AfxMr56e-52-AtR6Dd_seFwMLZE8m8ExyQ6vo0po8YD01Q&oe=69C24610",
  "https://scontent.fcpq7-1.fna.fbcdn.net/v/t39.30808-6/636160388_1485580386787999_8660439842109637263_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=104&ccb=1-7&_nc_sid=7b2446&_nc_eui2=AeF8fye_y5Zbvpahy17mMheNPedEMeveisI950Qx696Kwj1Kl8ohRuXGLZ-8CMIMiGrVjxa6SEVWuXq6HIEm0QkV&_nc_ohc=BNztsx4eblMQ7kNvwFpiPOu&_nc_oc=AdpV5-tpxDYwPU_Fvx1TkzZaUh2LM43j1OV7GlhLi0m9ovntqpBvqn1ygssXwD-8jWw&_nc_zt=23&_nc_ht=scontent.fcpq7-1.fna&_nc_gid=oYyfzZUgcrPF2N2L8ZCZ7Q&_nc_ss=7a30f&oh=00_AfxhkvWrdXIsvuUpTOWaV6XO2EvKEGUDTeID-wgAzTK9LA&oe=69C23A44",
  "https://scontent.fcpq7-1.fna.fbcdn.net/v/t39.30808-6/491201884_1222181986461175_571115679673660238_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=107&ccb=1-7&_nc_sid=7b2446&_nc_eui2=AeEzN7W35OE6MW9Yj66rpBKdoeWdA0rx0NWh5Z0DSvHQ1VNbripm6Sh-Dyx0NGlxcBFmgdyYIquNcsRA0Ymlqv_z&_nc_ohc=vD8KKraNRJoQ7kNvwEgrRmt&_nc_oc=AdoVvmkKvww6InTAm8Sw8v8GGRsILxO_-EEL4ppDvB1soGd4ERRfC-CskdsDYNRineg&_nc_zt=23&_nc_ht=scontent.fcpq7-1.fna&_nc_gid=e8dyw2a-VZ3zgv-UzCwCaw&_nc_ss=7a30f&oh=00_AfyEwolGGm51OU5L88UIB5tX9z2BORyGGMVPmbFqe6qaig&oe=69C23873",
  "https://scontent.fcpq7-1.fna.fbcdn.net/v/t39.30808-6/488791956_1211934104152630_9214429630397292079_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=102&ccb=1-7&_nc_sid=7b2446&_nc_eui2=AeF3Uk7vJmEHUppRUH3tLP2F16LT6gr1iMDXotPqCvWIwERtel0z9G89t16WskVe2AdNOEPP-Ugx6vHlLfNyHkkW&_nc_ohc=J4G8IVDVFB4Q7kNvwGB6faY&_nc_oc=AdqTp4-uyk1pnQMobxHj71QFwXbZu92YBSWR4RqtcHLBmcyH4ELgBNqHEDpAZK8tWYc&_nc_zt=23&_nc_ht=scontent.fcpq7-1.fna&_nc_gid=xq7AHNWgdEJeFZzUoJ3jOg&_nc_ss=7a30f&oh=00_AfzVKjn1peGg1dOLzeS9z981vDhMZ1wupmKww6ZtyH71mw&oe=69C230CE",
  "https://scontent.fcpq7-1.fna.fbcdn.net/v/t39.30808-6/488184718_1206189081393799_3076745272565479234_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=7b2446&_nc_eui2=AeHgQEEd8Dzml8taGjQp046p0Cm5FqraIGjQKbkWqtogaPHk4MP-gZlAO_qjFwmlP0PLoEfMAihxfgzs6WLIf5Sb&_nc_ohc=aRyhxhtpvNEQ7kNvwET1LEy&_nc_oc=Adq6Zs00yl-uuCbhp43uT9bCSfos5dKI_fSyuUzkufWu-LT7KwRkZVNG3Jr1DllIBxk&_nc_zt=23&_nc_ht=scontent.fcpq7-1.fna&_nc_gid=odnGLBU0D3pg5xQUbZx9qQ&_nc_ss=7a30f&oh=00_AfzaLDkVaAkx9d1BsHDxebt-cjZ_pfHRWS_kY7xsU0iBog&oe=69C24348",
  "https://scontent.fcpq7-1.fna.fbcdn.net/v/t39.30808-6/486438933_1200142735331767_487295761534162877_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=7b2446&_nc_eui2=AeGuejLyRsGGnpauchwj0o7TgLQaNFKrxQaAtBo0UqvFBlkTVNQivIWsugPqt6Oxiip48bm1-RhinEm_mLrKALvT&_nc_ohc=I_QPliEIRxoQ7kNvwGNecqq&_nc_oc=AdrzbbVSZRt7sptqwzJ5-Wi49G3M9sIOpzR2baE6ApzkFk4I6io7tEv4wNsBBp_W2YQ&_nc_zt=23&_nc_ht=scontent.fcpq7-1.fna&_nc_gid=ILo2esmH4szJie6xcxpmvw&_nc_ss=7a30f&oh=00_AfxyWGqFKK7G8PA6osoPxmb7VLJkbhqZBGDFZW5soBz1YA&oe=69C25666"
];

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  const staggerContainer = {
    initial: { opacity: 0 },
    whileInView: { opacity: 1 },
    viewport: { once: true },
    transition: { staggerChildren: 0.1 }
  };

  const nextImage = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    if (selectedImageIndex !== null) {
      setSelectedImageIndex((selectedImageIndex + 1) % GALLERY_IMAGES.length);
    }
  };

  const prevImage = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    if (selectedImageIndex !== null) {
      setSelectedImageIndex((selectedImageIndex - 1 + GALLERY_IMAGES.length) % GALLERY_IMAGES.length);
    }
  };

  return (
    <div className="relative min-h-screen bg-white selection:bg-primary/10 selection:text-primary">
      {/* Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-primary z-50 origin-left"
        style={{ scaleX }}
      />

      {/* Header */}
      <header 
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          scrolled ? "glass py-3 shadow-sm" : "bg-transparent py-6"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          <a href="#" className="flex items-center gap-2">
            <img src={LOGO_URL} alt="LM Arte's Logo" className="h-12 sm:h-14 w-auto object-contain" />
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {["Início", "Serviços", "Diferenciais", "Sobre", "Contato"].map((item) => (
              <a 
                key={item} 
                href={`#${item.toLowerCase()}`} 
                className={`text-sm font-semibold transition-all hover:scale-110 relative group ${
                  scrolled ? "text-slate-700 hover:text-primary" : "text-white hover:text-blue-200"
                }`}
              >
                {item}
                <span className={`absolute -bottom-1 left-0 w-0 h-0.5 bg-current transition-all group-hover:w-full`} />
              </a>
            ))}
            <a 
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-primary text-white px-6 py-2.5 rounded-full text-sm font-semibold hover:bg-primary-light transition-all shadow-lg shadow-primary/20"
            >
              Orçamento Grátis
            </a>
          </nav>

          {/* Mobile Toggle */}
          <button 
            className={`md:hidden p-2 ${scrolled ? "text-slate-700" : "text-white"}`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden absolute top-full left-0 right-0 bg-white border-t border-slate-100 shadow-xl p-4 flex flex-col gap-4"
          >
            {["Início", "Serviços", "Diferenciais", "Sobre", "Contato"].map((item) => (
              <a 
                key={item} 
                href={`#${item.toLowerCase()}`} 
                className="text-lg font-medium text-slate-700 py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                {item}
              </a>
            ))}
            <a 
              href={WHATSAPP_LINK}
              className="bg-primary text-white text-center py-3 rounded-xl font-bold"
            >
              Falar no WhatsApp
            </a>
          </motion.div>
        )}
      </header>

      {/* Hero Section */}
      <section id="início" className="relative h-screen min-h-[600px] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src={HERO_IMG} 
            alt="Serralheria Profissional" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary-dark/90 via-primary-dark/60 to-transparent" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl pt-12 md:pt-24"
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md text-white text-xs font-bold tracking-widest uppercase mb-8 border border-white/20">
              Excelência em Estruturas Metálicas
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-[1.1] mb-6 text-balance">
              Transformando Metal em <span className="text-blue-400">Segurança e Arte</span> para seu Imóvel
            </h1>
            <p className="text-lg text-slate-200 mb-10 max-w-lg leading-relaxed">
              Especialistas em portões automáticos, coberturas e estruturas sob medida em Sorocaba e região. Qualidade que dura gerações.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href={WHATSAPP_LINK}
                className="group bg-white text-primary px-8 py-4 rounded-full font-bold flex items-center justify-center gap-2 hover:bg-slate-100 transition-all"
              >
                Solicitar Orçamento
                <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
              <a 
                href="#serviços"
                className="px-8 py-4 rounded-full font-bold text-white border border-white/30 hover:bg-white/10 transition-all text-center"
              >
                Nossos Serviços
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-8 md:py-10 bg-slate-50 border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { label: "Anos de Mercado", value: "7+", icon: Clock },
              { label: "Projetos Entregues", value: "1.2k+", icon: ShieldCheck },
              { label: "Clientes Satisfeitos", value: "100%", icon: Star },
              { label: "Cidade e Região", value: "Sorocaba", icon: MapPin },
            ].map((stat, i) => (
              <motion.div 
                key={i} 
                animate={{ 
                  y: [0, -6, 0],
                  scale: [1, 1.04, 1]
                }}
                transition={{ 
                  duration: 3, 
                  repeat: Infinity, 
                  ease: "easeInOut", 
                  delay: i * 0.2 
                }}
                className="flex flex-col items-center text-center group cursor-default"
              >
                <motion.div 
                  whileHover={{ rotate: [0, -10, 10, 0], scale: 1.1 }}
                  className="w-12 h-12 rounded-2xl bg-white shadow-sm border border-slate-100 flex items-center justify-center text-primary mb-4 transition-colors group-hover:bg-primary group-hover:text-white"
                >
                  <stat.icon className="w-6 h-6" />
                </motion.div>
                <span className="text-3xl font-bold text-slate-900 mb-1 tracking-tight">{stat.value}</span>
                <span className="text-[10px] text-slate-400 font-bold uppercase tracking-[0.2em]">{stat.label}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="serviços" className="py-10 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-8 md:mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-3">Soluções em Serralheria</h2>
            <p className="text-sm text-slate-600">Fabricação e automação com acabamento premium e durabilidade garantida.</p>
          </div>

          <motion.div 
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {[
              { title: "Portões e Automação", desc: "Basculantes e deslizantes com motores de alta performance.", icon: Lock },
              { title: "Estruturas Metálicas", desc: "Treliças, coberturas e mezaninos de máxima resistência.", icon: Layers },
              { title: "Segurança Residencial", desc: "Grades, travas elétricas e concertinas para proteção total.", icon: ShieldCheck },
              { title: "Esquadrias e Janelas", desc: "Janelas e portas sob medida com design moderno.", icon: Home },
              { title: "Corrimãos e Sacadas", desc: "Acabamentos refinados em ferro e aço para varandas.", icon: MapPin },
              { title: "Manutenção Geral", desc: "Reparos e ajustes técnicos em qualquer estrutura.", icon: Wrench },
            ].map((service, i) => (
              <motion.div 
                key={i} 
                variants={fadeInUp}
                whileHover={{ y: -5, borderColor: "rgba(43, 50, 118, 0.3)" }}
                className="p-6 rounded-2xl bg-white border border-slate-100 shadow-sm hover:shadow-lg transition-all flex flex-col items-start"
              >
                <div className="w-11 h-11 rounded-xl bg-primary text-white flex items-center justify-center mb-4 shrink-0">
                  <service.icon className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">{service.title}</h3>
                <p className="text-sm text-slate-600 leading-snug">{service.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Bento Grid Diferenciais */}
      <section id="diferenciais" className="py-12 md:py-20 bg-slate-900 text-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-10 md:mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Por que escolher a LM Arte's?</h2>
            <p className="text-slate-400 max-w-2xl">Combinamos técnica artesanal com tecnologia de ponta para entregar resultados superiores.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <motion.div 
              variants={fadeInUp}
              initial="initial"
              whileInView="whileInView"
              className="md:col-span-2 p-8 rounded-3xl bg-primary/20 border border-white/10 flex flex-col justify-between min-h-[300px]"
            >
              <div>
                <h3 className="text-2xl font-bold mb-4">Experiência Comprovada</h3>
                <p className="text-slate-300">Mais de 7 anos atuando no mercado de Sorocaba, construindo uma reputação baseada em honestidade e qualidade técnica inquestionável.</p>
              </div>
              <div className="flex gap-4 mt-8">
                <div className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-xs font-bold">SOROCABA/SP</div>
                <div className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-xs font-bold">7 ANOS+</div>
              </div>
            </motion.div>

            <motion.div 
              variants={fadeInUp}
              initial="initial"
              whileInView="whileInView"
              className="p-8 rounded-3xl bg-slate-800 border border-white/10 flex flex-col items-center text-center justify-center"
            >
              <div className="w-16 h-16 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-400 mb-6">
                <ShieldCheck className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold mb-2">Garantia Total</h3>
              <p className="text-sm text-slate-400">Todos os nossos serviços possuem garantia de fabricação e instalação.</p>
            </motion.div>

            <motion.div 
              variants={fadeInUp}
              initial="initial"
              whileInView="whileInView"
              className="p-8 rounded-3xl bg-slate-800 border border-white/10"
            >
              <h3 className="text-xl font-bold mb-4">Atendimento Ágil</h3>
              <p className="text-slate-400 text-sm">Orçamentos rápidos e prazos de entrega respeitados rigorosamente.</p>
            </motion.div>

            <motion.div 
              variants={fadeInUp}
              initial="initial"
              whileInView="whileInView"
              className="md:col-span-2 p-8 rounded-3xl bg-gradient-to-br from-primary to-primary-dark border border-white/10"
            >
              <div className="flex flex-col md:flex-row gap-8 items-center">
                <div className="flex-1">
                  <h3 className="text-2xl font-bold mb-4">Tecnologia em Automação</h3>
                  <p className="text-slate-200">Trabalhamos com as melhores marcas de motores e sistemas de segurança eletrônica do mercado.</p>
                </div>
                <div className="grid grid-cols-2 gap-4 w-full md:w-auto">
                  <div className="p-4 rounded-2xl bg-white/10 text-center font-bold">PPA</div>
                  <div className="p-4 rounded-2xl bg-white/10 text-center font-bold">ROSSI</div>
                  <div className="p-4 rounded-2xl bg-white/10 text-center font-bold">PECCININ</div>
                  <div className="p-4 rounded-2xl bg-white/10 text-center font-bold">GAREN</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="sobre" className="py-12 md:py-20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex-1 relative"
            >
              <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl">
                <img src={ABOUT_IMG} alt="Nossa Oficina" className="w-full h-auto" />
              </div>
              <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-primary rounded-3xl -z-0" />
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex-1"
            >
              <span className="text-primary font-bold tracking-widest uppercase text-sm mb-4 block">Nossa História</span>
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-6">Compromisso com a Qualidade e a Satisfação do Cliente</h2>
              <p className="text-slate-600 mb-6 leading-relaxed">
                A LM Arte's Serralheria nasceu da paixão pelo trabalho em metal e do desejo de oferecer soluções que unam estética e funcionalidade. Localizada em Sorocaba, nossa empresa se destaca pelo atendimento personalizado e pela busca constante pela perfeição em cada solda, em cada corte.
              </p>
              <p className="text-slate-600 mb-8 leading-relaxed">
                Entendemos que cada projeto é único. Por isso, trabalhamos lado a lado com nossos clientes, desde a concepção da ideia até a instalação final, garantindo que o resultado supere as expectativas.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="flex items-start gap-3">
                  <div className="mt-1 text-primary"><ShieldCheck className="w-5 h-5" /></div>
                  <div>
                    <h4 className="font-bold text-slate-900">Missão</h4>
                    <p className="text-xs text-slate-500">Prover segurança e beleza através do aço.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="mt-1 text-primary"><Star className="w-5 h-5" /></div>
                  <div>
                    <h4 className="font-bold text-slate-900">Valores</h4>
                    <p className="text-xs text-slate-500">Ética, pontualidade e excelência.</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-12 md:py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 md:mb-16">
            <h2 className="text-3xl font-bold text-slate-900">O que dizem nossos clientes</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: "Ricardo Silva", text: "Excelente trabalho no meu portão basculante. Rápido, limpo e o motor é super silencioso. Recomendo muito!", role: "Residencial", img: "https://images.pexels.com/photos/20097462/pexels-photo-20097462.png" },
              { name: "Ana Paula", text: "Fizeram a cobertura da minha garagem e ficou impecável. Atendimento nota 10 do início ao fim.", role: "Residencial", img: "https://images.pexels.com/photos/8558898/pexels-photo-8558898.jpeg" },
              { name: "Marcos Oliveira", text: "Serralheria de confiança. Cumprem o prazo e o acabamento é superior a qualquer outro que já contratei.", role: "Comercial", img: "https://images.pexels.com/photos/7752807/pexels-photo-7752807.jpeg" },
            ].map((item, i) => (
              <motion.div 
                key={i} 
                variants={fadeInUp}
                initial="initial"
                whileInView="whileInView"
                className="p-8 rounded-3xl bg-white shadow-sm border border-slate-100"
              >
                <div className="flex items-center gap-4 mb-6">
                  <img src={item.img} alt={item.name} className="w-12 h-12 rounded-full object-cover border-2 border-primary/10" />
                  <div>
                    <h4 className="font-bold text-slate-900">{item.name}</h4>
                    <span className="text-xs text-slate-400 uppercase font-bold tracking-wider">{item.role}</span>
                  </div>
                </div>
                <div className="flex gap-1 text-yellow-400 mb-4">
                  {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-current" />)}
                </div>
                <p className="text-slate-600 italic">"{item.text}"</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pocket Gallery */}
      <section className="py-12 md:py-20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 md:mb-16 gap-6">
            <div className="max-w-xl">
              <span className="text-primary font-bold tracking-widest uppercase text-sm mb-4 block">Portfólio Real</span>
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">Serviços Realizados</h2>
              <p className="text-slate-600">Confira alguns de nossos trabalhos recentes entregues com excelência em Sorocaba e região.</p>
            </div>
          </div>

          <motion.div 
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            className="grid grid-cols-3 md:grid-cols-3 gap-1 md:gap-6"
          >
            {GALLERY_IMAGES.map((img, i) => (
              <motion.div 
                key={i}
                variants={fadeInUp}
                whileHover={{ scale: 1.02 }}
                onClick={() => setSelectedImageIndex(i)}
                className="relative group aspect-square rounded-sm md:rounded-3xl overflow-hidden shadow-sm md:shadow-md cursor-pointer"
              >
                <img 
                  src={img} 
                  alt={`Serviço realizado ${i + 1}`} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white">
                    <ImageIcon className="w-5 h-5" />
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div 
            variants={fadeInUp}
            initial="initial"
            whileInView="whileInView"
            className="mt-10 md:mt-16 flex justify-center"
          >
            <a 
              href="https://www.instagram.com/l.m.artesserralheria" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group flex items-center gap-3 bg-slate-900 text-white px-8 py-4 rounded-full font-bold hover:bg-primary transition-all shadow-lg hover:shadow-primary/20"
            >
              <Instagram className="w-5 h-5" />
              Veja mais no Instagram
            </a>
          </motion.div>
        </div>
      </section>

      {/* Lightbox */}
      {selectedImageIndex !== null && (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-4 md:p-10"
          onClick={() => setSelectedImageIndex(null)}
        >
          <button 
            className="absolute top-6 right-6 text-white/70 hover:text-white transition-colors z-[110]"
            onClick={() => setSelectedImageIndex(null)}
          >
            <X className="w-8 h-8" />
          </button>

          <button 
            className="absolute left-4 md:left-10 text-white/70 hover:text-white transition-colors z-[110] p-2 bg-white/5 rounded-full backdrop-blur-sm"
            onClick={prevImage}
          >
            <ChevronLeft className="w-8 h-8" />
          </button>

          <motion.div 
            key={selectedImageIndex}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="relative max-w-5xl w-full h-full flex items-center justify-center"
          >
            <img 
              src={GALLERY_IMAGES[selectedImageIndex]} 
              alt="Visualização ampliada" 
              className="max-w-full max-h-full object-contain rounded-lg shadow-2xl"
              referrerPolicy="no-referrer"
            />
          </motion.div>

          <button 
            className="absolute right-4 md:right-10 text-white/70 hover:text-white transition-colors z-[110] p-2 bg-white/5 rounded-full backdrop-blur-sm"
            onClick={nextImage}
          >
            <ChevronRight className="w-8 h-8" />
          </button>

          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/50 text-sm font-medium">
            {selectedImageIndex + 1} / {GALLERY_IMAGES.length}
          </div>
        </motion.div>
      )}


      {/* Final CTA */}
      <section id="contato" className="py-12 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative rounded-[2.5rem] bg-primary overflow-hidden p-8 sm:p-16 text-center text-white">
            <div className="absolute inset-0 opacity-10 pointer-events-none">
              <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white via-transparent to-transparent" />
            </div>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative z-10 max-w-2xl mx-auto"
            >
              <h2 className="text-3xl sm:text-5xl font-bold mb-6">Pronto para iniciar seu projeto?</h2>
              <p className="text-lg text-blue-100 mb-10">
                Entre em contato agora mesmo e solicite um orçamento sem compromisso. Atendemos Sorocaba e toda a região com agilidade.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                <a 
                  href={WHATSAPP_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto bg-white text-primary px-10 py-5 rounded-full font-bold text-lg hover:bg-slate-100 transition-all flex items-center justify-center gap-3 shadow-2xl shadow-black/20"
                >
                  <MessageCircle className="w-6 h-6" />
                  Chamar no WhatsApp
                </a>
                <div className="flex flex-col items-start sm:items-center">
                  <span className="text-blue-200 text-sm mb-1">Ou ligue para:</span>
                  <a href="tel:15996413455" className="text-xl font-bold hover:text-blue-200 transition-colors">
                    (15) 99641-3455
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-400 py-10 md:py-16 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
            <div className="lg:col-span-1 bg-white p-8 rounded-3xl shadow-sm border border-slate-100">
              <img src={LOGO_URL} alt="LM Arte's" className="h-14 mb-6 object-contain" />
              <p className="text-sm leading-relaxed mb-6 text-slate-600">
                Especialistas em serralheria de alto padrão. Segurança, durabilidade e design para sua residência ou empresa.
              </p>
              <div className="flex gap-4">
                <a href="https://www.instagram.com/l.m.artesserralheria" target="_blank" className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center hover:bg-primary hover:text-white transition-colors text-slate-600">
                  <Instagram className="w-5 h-5" />
                </a>
                <a href="https://web.facebook.com/L.M.Luanmonteiro" target="_blank" className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center hover:bg-primary hover:text-white transition-colors text-slate-600">
                  <Facebook className="w-5 h-5" />
                </a>
              </div>
            </div>

            <div className="hidden md:block">
              <h4 className="text-white font-bold mb-6">Links Rápidos</h4>
              <ul className="space-y-4 text-sm">
                <li><a href="#início" className="hover:text-white transition-colors">Início</a></li>
                <li><a href="#serviços" className="hover:text-white transition-colors">Serviços</a></li>
                <li><a href="#diferenciais" className="hover:text-white transition-colors">Diferenciais</a></li>
                <li><a href="#sobre" className="hover:text-white transition-colors">Sobre Nós</a></li>
              </ul>
            </div>

            <div className="hidden md:block">
              <h4 className="text-white font-bold mb-6">Nossos Serviços</h4>
              <ul className="space-y-4 text-sm">
                <li>Portões Automáticos</li>
                <li>Estruturas Metálicas</li>
                <li>Coberturas e Treliças</li>
                <li>Grades e Segurança</li>
                <li>Esquadrias Sob Medida</li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-bold mb-6">Onde Estamos</h4>
              <ul className="space-y-4 text-sm">
                <li className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-primary shrink-0" />
                  <span>Av. Cecília Meireles, 523<br />Cidade Jardim, Sorocaba - SP</span>
                </li>
                <li className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-primary shrink-0" />
                  <span>(15) 99641-3455</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-medium uppercase tracking-widest">
            <p>© 2026 LM ARTE'S SERRALHERIA. Todos os direitos reservados.</p>
            <p>Sorocaba - São Paulo</p>
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp */}
      <a 
        href={WHATSAPP_LINK}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 w-16 h-16 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-transform animate-bounce"
      >
        <MessageCircle className="w-8 h-8 fill-current" />
      </a>
    </div>
  );
}

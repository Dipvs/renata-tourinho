import React from 'react';
import { Mail, Phone, MapPin, ExternalLink, Brain, Heart, Clock, Award } from 'lucide-react';
import './App.css';

// importa a imagem da pasta src/assets
import renataPhoto from './assets/renata-photo.jpg';

function App() {
  return (
    <div className="App">
      {/* Header/Hero Section */}
      <header className="hero">
        <div className="hero-content">
          <div className="profile-section">
            <div className="profile-image">
              <img 
                src={renataPhoto}   // usa a variável importada
                alt="Renata Tourinho" 
                className="profile-photo"
              />
            </div>
            <div className="profile-info">
              <h1 className="name">Renata Tourinho</h1>
              <h2 className="title">Psicóloga Clínica</h2>
              <p className="credentials">
                Pós-Graduada em Neuropsicologia •  Terapia Cognitivo-Comportamental
              </p>
              <div className="hero-buttons">
                <a 
                  href="https://docs.google.com/forms/d/e/1FAIpQLScg2noolQ0dz-aCSHrJqc8OpiQRQBrAYOfwQAnj89jb8viAWw/viewform" 
                  className="cta-button primary"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <ExternalLink size={20} />
                  Pré-cadastro
                </a>
                <a 
                  href="#contato" 
                  className="cta-button secondary"
                >
                  Contato
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="hero-bg"></div>
      </header>

      {/* About Section */}
      <section id="sobre" className="section about-section">
        <div className="container">
          <div className="section-header">
            <h2>Sobre Mim</h2>
            <div className="section-divider"></div>
          </div>
          <div className="about-content">
            <div className="about-text">
              <p>
                Sou <strong>Renata Tourinho</strong>, psicóloga clínica com formação em <strong>Terapia Cognitivo-Comportamental (TCC)</strong> e 
                <strong> especialização em Neuropsicologia</strong>. Minha missão é oferecer um atendimento humanizado, baseado em evidências 
                científicas, que ajude cada pessoa a encontrar seus próprios recursos para superar desafios e conquistar qualidade de vida.
              </p>
              <p>
                Além da minha atuação profissional, carrego valores e experiências que me tornam quem sou:
              </p>
              
              <div className="personal-values">
                <div className="values-grid">
                  <div className="value-item">
                    <span className="value-highlight">🏡 Paraibana raiz</span>
                    <p>apaixonada pela minha terra e cultura.</p>
                  </div>
                  <div className="value-item">
                    <span className="value-highlight">👨‍👩‍👧‍👦 Mãe atípica e mãe de pet</span>
                    <p>o que me ensinou ainda mais sobre amor, resiliência e empatia.</p>
                  </div>
                  <div className="value-item">
                    <span className="value-highlight">❤️ Família em primeiro lugar</span>
                    <p>sendo a base que me fortalece diariamente.</p>
                  </div>
                  <div className="value-item">
                    <span className="value-highlight">🙏 Cristã</span>
                    <p>acredito na importância de viver com fé, princípios e propósito.</p>
                  </div>
                  <div className="value-item">
                    <span className="value-highlight">📚 Amor pelo conhecimento</span>
                    <p>sempre em busca de aprender e crescer.</p>
                  </div>
                  <div className="value-item">
                    <span className="value-highlight">💪 Persistente e resiliente</span>
                    <p>não desisto diante das dificuldades.</p>
                  </div>
                  <div className="value-item">
                    <span className="value-highlight">☕ Simplicidade</span>
                    <p>amo um bom cafezinho e a alegria de viajar.</p>
                  </div>
                  <div className="value-item">
                    <span className="value-highlight">🤝 Prestativa</span>
                    <p>acredito que ajudar o próximo transforma o mundo.</p>
                  </div>
                </div>
              </div>
              
              <p className="commitment-text">
                Meu compromisso é acolher cada paciente de forma única, respeitando sua história, valores e objetivos, 
                para juntos construirmos caminhos de mudança e bem-estar.
              </p>

              <div className="qualifications">
                <div className="qualification-item">
                  <Award className="qual-icon" />
                  <span>Psicóloga Clínica CRP-13/13442</span>
                </div>
                <div className="qualification-item">
                  <Brain className="qual-icon" />
                  <span>Terapia Cognitivo-comportamental(TCC)</span>
                </div>
                <div className="qualification-item">
                  <Heart className="qual-icon" />
                  <span>Especialização em Neuropsicologia</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TCC Approach Section */}
      <section className="section tcc-section">
        <div className="container">
          <div className="section-header">
            <h2>Abordagem TCC</h2>
            <div className="section-divider"></div>
          </div>
          <div className="tcc-content">
            <div className="tcc-intro">
              <p>
                A Terapia Cognitivo-Comportamental é uma abordagem terapêutica baseada em evidências 
                científicas que foca na relação entre pensamentos, sentimentos e comportamentos.
              </p>
            </div>
            <div className="tcc-features">
              <div className="feature-card">
                <div className="feature-icon">
                  <Brain size={32} />
                </div>
                <h3>Foco no Presente</h3>
                <p>
                  Trabalhamos com questões atuais, desenvolvendo estratégias práticas 
                  para lidar com desafios do dia a dia.
                </p>
              </div>
              <div className="feature-card">
                <div className="feature-icon">
                  <Clock size={32} />
                </div>
                <h3>Processo Estruturado</h3>
                <p>
                  Sessões organizadas com objetivos claros, permitindo acompanhar 
                  seu progresso de forma concreta.
                </p>
              </div>
              <div className="feature-card">
                <div className="feature-icon">
                  <Heart size={32} />
                </div>
                <h3>Colaborativa</h3>
                <p>
                  Você é participante ativo do processo terapêutico, desenvolvendo 
                  autonomia e autoconhecimento.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contato" className="section contact-section">
        <div className="container">
          <div className="section-header">
            <h2>Contato</h2>
            <div className="section-divider"></div>
          </div>
          <div className="contact-content">
            <div className="contact-info">
              <div className="contact-card">
                <div className="contact-icon">
                  <Mail size={24} />
                </div>
                <div className="contact-details">
                  <h3>E-mail</h3>
                  <a href="mailto:renatastourinho@gmail.com">
                    renatastourinho@gmail.com
                  </a>
                </div>
              </div>
              <div className="contact-card">
                <div className="contact-icon">
                  <Phone size={24} />
                </div>
                <div className="contact-details">
                  <h3>WhatsApp</h3>
                  <a 
                    href="https://wa.me/5583988855765" 
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    (83) 9 8885-5765
                  </a>
                </div>
              </div>
            </div>
            <div className="contact-form-section">
              <h3>Agende sua consulta</h3>
              <p>Preencha o pré-cadastro para iniciarmos seu processo terapêutico.</p>
              <a 
                href="https://docs.google.com/forms/d/e/1FAIpQLScg2noolQ0dz-aCSHrJqc8OpiQRQBrAYOfwQAnj89jb8viAWw/viewform" 
                className="cta-button primary large"
                target="_blank"
                rel="noopener noreferrer"
              >
                <ExternalLink size={20} />
                Fazer Pré-cadastro
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section className="section location-section">
        <div className="container">
          <div className="section-header">
            <h2>Localização</h2>
            <div className="section-divider"></div>
          </div>
          <div className="location-content">
            <div className="location-info">
              <div className="location-details">
                <MapPin className="location-icon" />
                <div>
                  <h3>Empresarial Maximum</h3>
                  <p>João Pessoa, Paraíba</p>
                  <a 
                    href="https://www.google.com/maps/place/Psic%C3%B3loga+Renata+Tourinho/@-7.1209153,-34.8653492,17z/data=!3m1!4b1!4m6!3m5!1s0x7ace7e42244d5a3:0xfc22a97f711913e0!8m2!3d-7.1209153!4d-34.8653492!16s%2Fg%2F11xw83brkz?entry=ttu&g_ep=EgoyMDI1MDkxMC4wIKXMDSoASAFQAw%3D%3D"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="map-link"
                  >
                    Ver no Google Maps
                  </a>
                </div>
              </div>
            </div>
<div className="map-container">
  <iframe
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3958.540448425757!2d-34.86777472411978!3d-7.120915292911004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7ace7e42244d5a3%3A0xfc22a97f711913e0!2sPsic%C3%B3loga%20Renata%20Tourinho!5e0!3m2!1spt-BR!2sbr!4v1726341500000!5m2!1spt-BR!2sbr"
    width="100%"
    height="300"
    style={{ border: 0 }}
    allowFullScreen=""
    loading="lazy"
    referrerPolicy="no-referrer-when-downgrade"
    title="Localização - Psicóloga Renata Tourinho"
  ></iframe>
</div>

          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-info">
              <h3>Renata Tourinho</h3>
              <p>Psicóloga Clínica • CRP-13/13442</p>
            </div>
            <div className="footer-links">
              <a href="#sobre">Sobre</a>
              <a href="#contato">Contato</a>
              <a href="https://docs.google.com/forms/d/e/1FAIpQLScg2noolQ0dz-aCSHrJqc8OpiQRQBrAYOfwQAnj89jb8viAWw/viewform" target="_blank" rel="noopener noreferrer">
                Pré-cadastro
              </a>
            </div>
          </div>
          <div className="footer-bottom">
            <p>&copy; 2025 Renata Tourinho. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
import React from "react";
import "../../Styles/HomePage/HomePage.css";

function home() {
  return (
    <div>
      <h1 className="title-home">Süper Güçlerle Donatılmış CSS</h1>
      <div className="subtitle">
        <div className="left-title">
          Sass, dünyadaki en kararlı, güçlü ve profesyonel CSS uzantı dilidir.
        </div>
        <div className="right-glass">
          <img
            src="https://sass-lang.com/assets/img/illustrations/glasses-2087d741.svg"
            alt="sass-glass"
          />
        </div>
      </div>
      <div className="release-info">
        Mevcut Sürümler:
        <ul>
          <li>Dart Sass 1.38.2</li>
          <li>LibSass 3.6.5</li>
          <li>Ruby Sass ⚰️</li>
          <li>
            <a href="https://sass-lang.com/implementation">Uygulama Kılavuzu</a>
          </li>
        </ul>
      </div>
      <div className="cards">
        <ul>
          {/* Card 1 */}
          <li>
            <h2>CSS Uyumlu</h2>
            <p>
              Sass, CSS'in tüm sürümleriyle tamamen uyumludur. Mevcut CSS
              kitaplıklarını sorunsuz bir şekilde kullanabilmeniz için bu
              uyumluluğu ciddiye alıyoruz.
            </p>
          </li>
          {/* Card 2 */}
          <li>
            <h2>Zengin İçerik</h2>
            <p>
              Sass, diğer tüm CSS uzantı dillerinden daha fazla özellik ve
              yeteneğe sahiptir. Sass Çekirdek Ekibi sadece ayak uydurmak için
              değil, aynı zamanda önde olmak için durmadan çalışıyor.
            </p>
          </li>
          {/* Card 3 */}
          <li>
            <h2>Yetkin</h2>
            <p>
              Sass, Çekirdek Ekibi tarafından yaklaşık 15 yıldır aktif olarak
              desteklenmektedir.
            </p>
          </li>
          {/* Card 4 */}
          <li>
            <h2>Sektör Onaylı</h2>
            <p>Sektör, önde gelen CSS uzantı dili olarak Sass'ı seçiyor.</p>
          </li>
          {/* Card 5 */}
          <li>
            <h2>Geniş Topluluk</h2>
            <p>
              Sass, birkaç teknoloji şirketi ve yüzlerce geliştiriciden oluşan
              bir konsorsiyum tarafından aktif olarak desteklenmekte ve
              geliştirilmektedir.
            </p>
          </li>
          {/* Card 6 */}
          <li>
            <h2>Frameworks</h2>
            <p>
              Sass ile oluşturulmuş sonsuz sayıda framework vardır.{" "}
              <a href="http://compass-style.org/" target="_blank">
                Compass
              </a>
              , <a href="https://www.bourbon.io/">Bourbon</a>, ve{" "}
              <a href="https://www.oddbird.net/susy/">Susy</a> bunlardan
              yalnızca birkaçı.
            </p>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default home;

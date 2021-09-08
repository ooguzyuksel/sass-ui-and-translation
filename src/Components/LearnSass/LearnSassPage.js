import React from "react";
import "../../Styles/LearnSass/LearnSass.css";

function LearnSassPage() {
  return (
    <>
      <h1 className="title-home">Sass'ın Temelleri</h1>

      {/* Header for Learn Sass Page */}
      <div className="container-learnSass">
        {/* Cards and Topics */}
        <p>
          Sass'ı kullanmadan önce projenizde kurmanız gerekir. Bu sayfayı
          incelemek istiyorsanız devam edebilirsiniz, ancak öncelikle Sass'ı
          yüklemenizi öneririz. Daha fazla bilgi için{" "}
          <a href="https://sass-lang.com/install" target="_blank">Buraya Gidin</a>
        </p>
      </div>
      <div className="container-card">
        {/* Section 1 */}
        <section id="topic-1">
          <h2>Ön İşleme ( Preprocessing )</h2>{" "}
          <p>
            CSS kendi başına eğlenceli olabilir, ancak stil sayfaları git gide
            daha büyük, daha karmaşık ve başa çıkılması zor bir hal alıyor. Bir
            ön işlemcinin size yardımcı olabileceği yer tam da burası. Sass,
            henüz CSS'de bulunmayan "nesting", "mixin", "inheritance" gibi
            sağlam ve sürdürülebilir CSS yazmanıza yardımcı olan şık özelliklere
            sahiptir.
          </p>{" "}
          <p>
            Sass ile uğraşmaya başladığınızda, Sass sizin önceden işlenmiş
            dosyanızı alacak ve web sitenizde kullanabileceğiniz normal bir CSS
            dosyasına dönüştürecektir.
          </p>{" "}
          <p>
            Bunu gerçekleştirmenin en doğrudan yolu terminal ile yapmaktır. Sass
            dosyası kurulduktan sonra, Sass komutunu kullanarak Sass'ınızı CSS'e
            derleyebilirsiniz. Sass'a hangi dosyadan oluşturulacağını ve CSS'in
            nereye çıkarılacağını söylemeniz gerekecek. Örneğin, sass input.scss
            dosyasını terminalinizden çalıştırmak, tek bir Sass dosyası alır ve
            bu dosyayı output.css olarak derler.
          </p>{" "}
          <p>
            --watch dizisi ile tek tek dosyaları veya dizinleri de
            izleyebilirsiniz. Watch dizisi, Sass'a değişiklikler için kaynak
            dosyalarınızı izlemesini ve Sass'ınızı her kaydettiğinizde CSS'i
            yeniden derlemesini söyler. input.scss dosyanızı (manuel olarak
            oluşturmak yerine) izlemek istiyorsanız, komutunuza --watch dizisini
            şu şekilde eklemeniz yeterlidir:
          </p>
          <pre class="highlight plaintext">
            <code>sass --watch input.scss output.css</code>
          </pre>{" "}
          <p>
            Klasör yollarını girdi ve çıktı olarak kullanarak ve iki nokta ile
            ayırarak dizinleri izleyebilir ve çıktı alabilirsiniz. Bu örnekte:
          </p>{" "}
          <pre class="highlight plaintext">
            <code>sass --watch app/sass:public/stylesheets</code>
          </pre>{" "}
          <p>
            Sass, app/sass klasöründeki tüm dosyaları değişiklikler için takip
            eder ve CSS'i public/stylesheets klasörüne derler.
          </p>{" "}
          <hr />
        </section>

        {/* Section 2 */}
        <section id="topic-2">
          {" "}
          <h2>Değişkenler ( Variables ) </h2>{" "}
          <p>
            Değişkenleri, stil sayfanızda yeniden kullanmak istediğiniz
            bilgilerin depolandığı alan olarak düşünün. Renkler, yazı tipleri
            veya yeniden kullanmak isteyeceğinizi düşündüğünüz herhangi bir CSS
            değeri gibi şeyleri saklayabilirsiniz. Sass, bir şeyi değişken
            yapmak için $ sembolünü kullanır. İşte bir örnek:
          </p>{" "}
          <div className="double-code">
            <pre>
              <code>
                {`$font-stack:Helvetica, sans-serif;\n$primary-color: #333;\nbody { \n font: 100% $font-stack;\n color: $primary-color;\n     }`}
              </code>
            </pre>
            <pre>
              <code>
                {`body {\nfont: 100% Helvetica, sans-serif;\ncolor: #333;\n}`}
              </code>
            </pre>
          </div>
          <p>
            Sass işlendiğinde, $font-stack ve $primary-color için tanımladığımız
            değişkenleri alır ve CSS'e yerleştirilen değişken değerlerimizle
            normal CSS dosyası oluşturulur. Kullanılan bu yöntem sayesinde,
            renklerle çalışırken ve bu renkleri site genelinde kullanırken
            oldukça tutarlı sonuçlar alırız.
          </p>{" "}
          <hr />
        </section>

        {/* Section 3 */}

        <section id="topic-3">
          {" "}
          <h2>Yuvalama ( Nesting )</h2>{" "}
          <p>
            HTML’in iç içe yazılan ve görsel bir hiyerarşiye sahip olduğunu fark
            etmişsinizdir. Ancak bu açıdan CSS, HTML’de olduğu gibi iç içe
            görünen bir görsel hiyerarşiye sahip değildir.
          </p>{" "}
          <p>
            İşte bu noktada Sass, CSS seçicilerinizi HTML'de bulunan görsel
            hiyerarşiyi takip edecek şekilde yerleştirmenize olanak sağlar.
            Ancak aşırı iç içe kullanımın, bakımı zor olabilecek ve genellikle
            kötü uygulama olarak kabul edilen CSS sonuçları doğurduğunu da
            unutmayın.
          </p>{" "}
          <p>
            Bu sebeple, aşağıda iyi bir örnek uygulama olabilecek bir kod dizimi
            bulabilirsiniz:
          </p>
          <div className="double-code">
            <pre>
              <code>
                {`nav {
  ul {
    margin: 0;
    padding: 0;
    list-style: none;
  }

  li { display: inline-block; }

  a {
    display: block;
    padding: 6px 12px;
    text-decoration: none;
  }
}`}
              </code>
            </pre>
            <pre>
              <code>
                {`nav ul {
  margin: 0;
  padding: 0;
  list-style: none;
}
nav li {
  display: inline-block;
}
nav a {
  display: block;
  padding: 6px 12px;
  text-decoration: none;
}`}
              </code>
            </pre>
          </div>
          <p>
            ul, li ve a seçicilerinin navigasyon içinde, iç içe olduğunu fark
            edeceksiniz. Bu, CSS'inizi daha okunabilir hale getirmenin harika
            bir yoludur.
          </p>{" "}
          <hr />
        </section>

        {/* Section 4 */}

        <section id="topic-4">
          {" "}
          <h2>Kısmi Sass Dosyası ( Partials )</h2>{" "}
          <p>
            Farklı Sass dosyalarına ekleyebileceğiniz ve küçük CSS parçacıkları
            içeren kısmi Sass dosyaları oluşturabilirsiniz. Bu, CSS'inizi
            modülerleştirmenin ve işleri kolaylaştırmanın harika bir yoludur. Bu
            Kısmi Sass Dosyaları, başında alt çizgi ile başlayan bir dosyadır.
            Bu dosyalara _partial.scss gibi bir isim verebilirsiniz. Alt çizgi,
            Sass'ın dosyanın yalnızca kısmi bir dosya olduğunu ve bir CSS
            dosyasında oluşturulmaması gerektiğini haber verir. Ve Sass
            bölümleri @use kuralıyla kullanılır.
          </p>{" "}
          <hr />
        </section>

        {/* Section 5 */}

        <section id="topic-5">
          {" "}
          <h2>Modül Yapısı ( Modules )</h2>{" "}
          <p>
            Tüm Sass Kodlarınızı tek bir dosyaya yazmanız gerekmez. @use kuralı
            ile istediğiniz gibi bölebilirsiniz. Bu kural, bir modül olarak
            başka bir Sass dosyasını yükler. Bu sayede Sass dosyanızdaki
            değişkenlere, mixinlere ve fonksiyonlara bir ad alanı ile
            başvurabileceğiniz anlamına gelir. Unutmadan, dosya kullanmak,
            derlenmiş çıktınızda oluşan CSS'i de içerecektir.
          </p>
          <div className="double-code">
            <pre>
              <code>
                {`// _base.scss
$font-stack:    Helvetica, sans-serif;
$primary-color: #333;

body {
  font: 100% $font-stack;
  color: $primary-color;
}
// styles.scss
@use 'base';

.inverse {
  background-color: base.$primary-color;
  color: white;
}`}
              </code>
            </pre>
            <pre>
              <code>
                {`body {
  font: 100% Helvetica, sans-serif;
  color: #333;
}

.inverse {
  background-color: #333;
  color: white;
}
`}
              </code>
            </pre>
          </div>
          <p>
            style.scss dosyasında, @use 'base' olarak kullandığımıza dikkat
            edin. Bir dosya kullandığınızda dosya uzantısını eklemeniz gerekmez.
            Sass bunu sizin için çözecektir.
          </p>{" "}
        </section>

        {/* Section 6 */}

        <section id="topic-6">
          {" "}
          <h2>Mixinler ( Mixins ) </h2>{" "}
          <p>
            CSS'deki bazı şeyleri yazmak bazen sıkıcı olabiliyor. Mixinler,
            sitenizde yeniden kullanmak istediğiniz CSS yapılarını oluşturmanıza
            olanak tanır. Mixin’lerinizi daha esnek hale getirmek için parametre
            bile geçebilirsiniz. İşte Mixin kullanımı için bir örnek:
          </p>
          <div className="double-code">
            <pre>
              <code>
                {`@mixin theme($theme: DarkGray) {
  background: $theme;
  box-shadow: 0 0 1px rgba($theme, .25);
  color: #fff;
}

.info {
  @include theme;
}
.alert {
  @include theme($theme: DarkRed);
}
.success {
  @include theme($theme: DarkGreen);
}
`}
              </code>
            </pre>
            <pre>
              <code>
                {`.info {
  background: DarkGray;
  box-shadow: 0 0 1px rgba(169, 169, 169, 0.25);
  color: #fff;
}

.alert {
  background: DarkRed;
  box-shadow: 0 0 1px rgba(139, 0, 0, 0.25);
  color: #fff;
}

.success {
  background: DarkGreen;
  box-shadow: 0 0 1px rgba(0, 100, 0, 0.25);
  color: #fff;
}
`}
              </code>
            </pre>
          </div>
          <p>
            Bir mixin oluşturmak için @mixin yönergesini kullanın ve bir isim
            verin. Kullandığımız örnekte Mixin’imize Theme ismini verdik. Ayrıca
            parantez içinde $theme değişkenini kullanıyoruz, böylece istediğimiz
            herhangi parametreyi Mixin’imize geçebiliriz. Ardından Mixin’i
            kullanmak için, @include ön eki ile çağırabilir ve bir CSS bildirimi
            olarak kullanabilirsiniz.
          </p>{" "}
          <hr />
        </section>

        {/* Section 7 */}

        <section id="topic-7">
          {" "}
          <h2>Genişletme ve Kalıtım ( Extend/Inheritance ) </h2>{" "}
          <p>
            Bu, Sass'ın en kullanışlı özelliklerinden biridir. @extend
            kullanmak, bir seçiciden diğerine bir dizi CSS özelliği paylaşmanıza
            olanak tanır. Sass'ınızı oldukça basit ve temiz tutmanıza yardımcı
            olur. Örneğimizde genişletme ( extend ) özelliğini, yer tutucu
            sınıflarla birlikte kullanarak hata, uyarı ve başarı bildirimi için
            basit bir mesajlaşma örneği oluşturacağız. Yer tutucu sınıf,
            yalnızca genişletildiğinde yazdırılan özel bir sınıf türüdür ve
            derlenmiş CSS'inizi düzenli ve temiz tutmanıza yardımcı olur.
          </p>{" "}
          <div className="double-code">
            <pre className="full">
              <code>
                {`/* This CSS will print because %message-shared is extended. */
%message-shared {
  border: 1px solid #ccc;
  padding: 10px;
  color: #333;
}

// This CSS won't print because %equal-heights is never extended.
%equal-heights {
  display: flex;
  flex-wrap: wrap;
}

.message {
  @extend %message-shared;
}

.success {
  @extend %message-shared;
  border-color: green;
}

.error {
  @extend %message-shared;
  border-color: red;
}

.warning {
  @extend %message-shared;
  border-color: yellow;
}
`}
              </code>
            </pre>
          </div>
          <p>
            Yukarıdaki kodun yaptığı, .message, .success, .error ve .warning'e
            %message-shared gibi davranmalarını söyler. Bu, %message-shared'in
            göründüğü her yerde, .message, .success, .error ve .warning'in de
            görüneceği anlamına gelir. İşte burada büyüleyici nokta, oluşturulan
            CSS'de gerçekleşir, sınıfların her biri %message-shared ile aynı CSS
            özelliklerini alır. Bu, HTML öğelerine birden çok sınıf adı yazmak
            zorunda kalmamanıza sağlar.
          </p>{" "}
          <p>
            %equal-heights hiçbir zaman genişletilmediği için %equal-heights
            içindeki CSS'nin oluşturulmadığını unutmayın.
          </p>{" "}
          <hr />{" "}
        </section>

        {/* Section 8 */}
        <section id="topic-8">
          {" "}
          <h2>Operatörler ( Operators )</h2>{" "}
          <p>
            CSS'de matematik hesaplarıyla değişiklikler yapmak çok faydalıdır.
            Sass, +, -, *, / ve % gibi bir çok standart matematik operatörüne
            sahiptir. Örneğimizde, bir {"<article> "}ve {"<aside>"}’a{" "}
            {"<width>"} hesaplamak için basit bir matematik işlemi yapacağız.
          </p>{" "}
          <div className="double-code">
            <pre>
              <code>
                {`.container {
  width: 100%;
}

article[role="main"] {
  float: left;
  width: 600px / 960px * 100%;
}

aside[role="complementary"] {
  float: right;
  width: 300px / 960px * 100%;
}
`}
              </code>
            </pre>
            <pre>
              <code>
                {`.container {
  width: 100%;
}

article[role="main"] {
  float: left;
  width: 62.5%;
}

aside[role="complementary"] {
  float: right;
  width: 31.25%;
}
`}
              </code>
            </pre>
          </div>
          <p>
            960 piksele dayalı çok basit bir grid oluşturduk. Sass'taki
            işlemler, piksel değerlerini almak ve bunları fazla güçlük çekmeden
            yüzdelere dönüştürmek gibi bir şey yapmamıza izin veriyor.
          </p>{" "}
          <hr />
        </section>
      </div>
    </>
  );
}

export default LearnSassPage;

# React Nedir ?

- React facebook tarafından oluşturulmuş bir javascript kütüphanesidir.Klasik web sitelerine göre daha performanslı siteler oluşturmamızı sağlar.Bunun yanında çok geniş bir kütüphane desteği bulunur.

# React Uygulaması Nasıl Oluşturulur ?

- Bir react projesi oluşturmak için ilk olarak pc'ye nodejs kurmalıyız.Bu kurulumu `https://nodejs.org/en` sitesinden yaparız.Nodejs pc'ye kurulduğunda yanında npm (node package manager) adında bir paket yöneticiside indirilir.

- Yukarıdaki kurulumlar yapıldıktan sonra bir react projesi oluşturulabilir.React projesi projenin indirilmesi istenen dizine cd dizin adı ile ulaşıldıktan sonra `npx create-react-app projeAdı` komutu ile oluşturulur.Oluşturulan bu uygulama hazır bir template ile gelir.Şimdi ise bu dosyalara birlikte bakalım:

# React Dosya Yapısı:

1. `node-modules:` React projesi ile alakalı bağımlılıkları bir arada tutan dosyadır.İndirilen ve başlangıçta mevcut olan bağımlılıklar bu klasör içerisinde yer alır.React projesinin çalışması için bu dosya olmazsa olmazdır.Yani bu dosya olmadan react uygulaması ayağa kalkamaz.Neredeyse tüm projenin tamamına yakın bir dosya boyutuna sahiptir.React projesi githuba gönderildiğinde bu dosya githuba gönderilmeyecektir.Bu dosya kesinlikle elle müdahelede bulunmayacağız.Paket indirme,silme,güncelleme için ayrı ayrı komutlar vardır.Bu komutları kullanarak ilgili işlemleri yapacağız.

2. `public:` Proje içerisinde herkesin erişebileceği dosyaları bir arada tutar.Bu dosya içerisinde resimler,fontlar,iconlar,... gibi dosyalar bulunur.

3. `src:` Bu dosya react projesinin kaynak kodlarını barındıran dosyadır.Proje içerisinde yapılacak geliştirmeler bu dosya içerisinde yapılır.Bu dosya içerisinde başlangıçta hazır gelen bazı dosyalar mevcut şimdi bunların detaylı incelemesini yapalım:

-- App.css: App.js içerisinde oluşturulan elemanların stillendirmesinin yapıldığı css dosyasıdır.

-- App.js:Bu dosya içerisinde yazılı olan elemanlar proje ayağa kaldırılıdığında arayüzde render edilecektir.

-- index.js:Bu dosya react projesinin temel dosyasıdır.Bu dosya Html dosyası içerisinde yer alan root id'li elemanı alıp bu elemanın içerisine App.js içerisinde oluşturulan elemanların render edilmesini sağlar.

-- index.css: React projesindeki ana stillendirmenin yapıldığı css dosyasıdır.

4. `gitignore:` React projesi github'a gönderildiğinde githuba gönderilmesi istenmeyen dosyaların yazı olduğu bir listedir.Bu dosya içerisinde ismi yazı olan dosyalar githuba gönderilmez.

5. `package.json:` React projesinin adı,sürümü,proje ile alakalı komutlar,projede kullanılan kütüphanelerin sürümleri ve projenin bağımlılıklarının yazılı olduğu dosyadır.

6. `package-lock.json:` Tıpkı package.json dosyasında olduğu gibi bu dosyadada projenin bağımlılıkları ve sürümleri yazılıdır.package.json dosyasında farklı olarak bu dosya daha detaylı bilgiler yer alır(node sürümü,lisans bilgileri,...)

# React Projesi Nasıl Ayağa Kaldırılır ?

- React içerisindeki dosyaları incelerken package.json dosyasını incelerken bu dosya içerisinde yer alan bazı komutlardan bahsetmiştik.Bu komutlardan biride start komutudur.Bu npm start komutu react projesinin ayağa kaldırılmasını sağlar.Fakat bu ayağa kaldırılma işlemi sırasında terminalin konumlu olduğu dizin package.json dosyası ile aynı dizinde olmalıdır.Aksi halde uygulama ayağa kalkmaz.

# JSX Nedir ?

- JSX (JavaScript XML) react'a özgü html ve javascript kodlarının bir arada yazılmasını sağlayan bir dosya yapısıdır.

- - Html ve JSX arasındaki farklar:

- Html elemanlarını özelleştirmek istersek bunu class ile yapabiliyorduk.JSX dosyası içerisinde hem html hemde js kodu yazılacağından bu özelleştirmeyi class yerine className ile yapacağız.Css kısmında bu class'a erişirken herhangi farklı bir durum söz konusu değildir.(.class adı ile yapılır.)

- label elemanlarını input'lar ile eşlemek için kullanılan for attribute'ü yeribe htmlFor attribute'ü kullanılır.

- img,input,br,... gibi self-closing etiketler için kapanışı belirten "/" konulmazsa bu html'de bir sorun oluşturmazken bunu jsx dosyası içerisinde yapamayız yani "/" işaretini koymak zorundayız.

- JSX dosyası içerisinde yer alan tüm elemanların bir kapsayıcısı muhakkak olmalıdır.Eğer bir kapsayıcı yoksa hata verecektir.Bu kapsayıcı eleman için herhangi bir html elemanı oluşturulamadıysa eğer bu noktada boş bir fragment kullanılabilir. (<> <>)

# React Component Yapısı

- React component mimarisine sahip bir kütüphanedir.Component yapısı ile birlikte daha düzenli kod yazarız ve proje içerisinde tekrar tekrar kullanılacak yapıları kod tekrarına düşmeden daha kolay bir şekilde oluştururuz.

  # Bir React Component'i Nasıl Oluşturulur ?

- React component'i temelinde bir html içeriği döndüren javascript fonksiyonuna benzetilebilir.Bir react component'i oluşturmak için src klasörü içinde sağ tık > dosya oluştur ile yeni bir dosya oluşturulur.Bu dosya adı büyük harfle başlamalıdır ve .jsx uzantılı olmalıdır.Oluşturulan bu jsx uzantılı dosya içerisine gelindiğinde ise oluşturulan dosya isminde bir javascript fonksiyonu oluşturulur.Bu fonksiyonu klasik bir javascript fonksiyonundan ayırıp react bileşenine çevirmek içinse içerisine return () oluşturmalı ve () içerisinde bu bileşenin render etmesi istenen Html kodu yazılmalıdır.

- JSX dosyası içerisinde hem javascript hemde html kodlaması yapılabildiğini söylemiştik.Javascript içerisinde yer alan değişken,fonksiyon,obje gibi yapıların tanımlanması ise bileşen içerisinde return satırının dışında yapılır.

- React uygulamasında arayüzde gösterilecek elemanların render edilebilmesi için App.jsx dosyası içerisinde çağırılması gerekir.Bu çağırma işleminin yapıla bilmesi içinse ilk olarak bu bileşen export edilmeli App.jsx içerisinde ise import edilmelidir.İmport edilip kullanılacak component bir self-closing etiket şeklinde çağırılmalıdır.

# Bir React Bileşenini Stillendirmesi

- Bir react bileşeneni

1. İnline Stillendirme: Bir bileşeni satır içerisinde stillendirme yöntemidir.Bu yöntemde stil verilecek elemanın içerisinde style={{}} yazılır ve içerideki {} içerisinde gerekli stillendirme yapılır.Html'deki inline stillendirmeden farklı olarak react bileşeni içerisinde stil özellikleri eğer birden fazla kelimeden oluşuyorsa bunu camelCase'e uygun şekilde stillendiririz.Still özelliğine karşılık px cinsinden değer girilecekse bunun için px kullanmadan direkt birim yazılır.

2. External Stillendirme: Bir bileşeni css uzantılı dosyalarda stillendirme işlemidir.Bunun için bir css uzantılı dosya oluşturulur.Bu dosyada gerekli stillendirme işlemleri yapılır.Yapılan bu stillendirmenin elemanlara etki etmesi için bileşen içerisinde css dosyası import edilmelidir.

3. Harici Stillendirme Kütüphaneleri İle Stillendirme: Bir react bileşenin stillendirmesini stillendirme kütüphaneleri ile yapma işlemidir.Bu kurs kapsamında bootstrap kullanımını öğreneceğiz.

# Bir React Projesine Nasıl Paket Kurulur?

- Bir react projesine paket indirmek için `npm install [paketAdı]` komutu kullanılır.Buradaki paket adı kısmında belirtilen paket react projesine indirilecektir.

- Paketler ile ilgili işlemleri yaparken uygulamayı ayağa kaldırdığımız terminal'in haricinde bir terminal kullanmamız gerekir.

- Bir react kütüphanesinin sürümleri olacaktır.Bu sürümler arasında özellik bakımından farklılıklar bulunur.Bir kütüphaneyi projemize indirirken sürüm belirtmezsek en son sürüm indirilir.Ama illa spesifik bir sürüm indirmek istersek yukarıda yazılı olan paket indirme komutunun sonuna indirilmek istenen sürüm yazılır.`npm install [paketAdı@sürümNo]`

# Bir Paket Sürümünü Güncelleme

- React'da bir paket sürümünü güncellemek için `npm install [paketAdı@paketSürümü]` komutu kullanılır.

# React'ın Temel Konuları

- Bir react projesi oluştururken bilinmesi gereken temel konular şunlardır:

- component: React component temelli bir mimariye sahiptir.Bir component oluşturma kısmına yukarıda bakmıştık.

- props: Props react componentleri arasında veri aktarımı sağlar.Bir component'e props geçerek onu dinamik hale getirebiliriz.Bir component'de props kullanabilmek için ilk olarak çağırıldığı yerde o component'e props geçmemiz akabinde ise component içerisinde o propsu yakalamamız gerekir.

- Çoklu Renderlama:React bileşenlerinin bir noktada birden fazla kez render edilmesine çoklu renderlama denir.Çoklu renderlama için javascript dizileri ve map metodunu kullanırız.

- JSX Dosyası İçerisinde Dinamik İşlemler: Jsx dosyası içerisinde hem html hemde js kodu yazabildiğimizi söylemiştik.Bileşen içerisinde html kodunu return satırı içinde yazarız.Javascript'deki dinamik değer tanımlama işlemlerini ise return satırının dışında bileşen içerisinde yaparız.Eğer bileşen içerisindeki bir elemana olay izleyicisi ekleyeceksek bunu ilgili olayı verilmek istenen elemana doğrudan yazarak ekleriz.

- useState

- Koşullu Renderlama:

- useEffect

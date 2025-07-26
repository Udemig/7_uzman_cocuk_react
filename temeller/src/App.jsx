import Header from "./Header";
import UserCard from "./UserCard";
import Form from "./Form";
function App() {
  const kullanıcılar = [
    { isim: "Yusuf", soyisim: "YAMAN", yaş: 23, id: 1 },
    { isim: "Hakan", soyisim: "Aydoğmuş", yaş: 44, id: 2 },
    { isim: "Enes", soyisim: "Özkan", yaş: 15, id: 3 },
    { isim: "Mehmet", soyisim: "Seyhan", yaş: 35, id: 4 },
    { isim: "Ali", soyisim: "Kaya", yaş: 24, id: 5 },
  ];
  return (
    <div className="App">
      <Header />

      <h1 className="container mt-3">Kullanıcılar:</h1>

      <div className="cards-wrapper">
        {/* Bir react componentini dinamik hale getirmek için ilk olarak props geçilir.Sonrasında ise component içerisinde geçilen propslar karşılanır. */}

        {/*  Çoklu renderlama sırasında react her elemanı birbirinden ayırt etmek için uniqe bir key değeri ister. */}

        {kullanıcılar.map((kullanıcı) => (
          <UserCard
            isim={kullanıcı.isim}
            soyisim={kullanıcı.soyisim}
            yaş={kullanıcı.yaş}
            key={kullanıcı.id}
          />
        ))}

        <Form />
      </div>
    </div>
  );
}

export default App;

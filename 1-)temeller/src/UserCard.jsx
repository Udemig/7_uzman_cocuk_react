function UserCard({ isim, soyisim, yaş }) {
  // Bileşene geçilen prop'lar component'de props objesi olarak karşılanır.Bu obje içerisindeki değerler alınıp component içerisinde kullanılır.

  // ! Bir bileşene geçilen props'ları bileşen içerisinde kullanırken her seferinde props.geçilenPropAdı şeklinde uzun uzun yazmak yerine obje dağıtma özelliği kullanılabilir.

  //   const { isim, soyisim, yaş } = props;

  // Kullanıcı Detay butonuna tıklanınca çalışacak fonksiyon

  const kullanıcıTanıtım = () => {
    alert(`${isim} ismindeki kullanıcı ${yaş} yaşındadır.`);
  };

  return (
    <div className="card">
      <img
        src="https://picsum.photos/200"
        alt="user-image"
        className="card-image-top img-fluid "
      />

      <div className="mt-3 container">
        <h1 className="fs-3">
          Kullanıcı adı:
          <span className="text-primary fw-bold">{isim}</span>
        </h1>
        <h1 className="fs-3">
          Kullanıcı soyadı:
          <span className="text-primary fw-bold">{soyisim}</span>
        </h1>
        <h1 className="fs-3">
          Kullanıcı yaş:
          <span className="text-primary fw-bold">{yaş}</span>
        </h1>

        <button onClick={() => kullanıcıTanıtım()} className="btn btn-primary">
          Kullanıcı Detay
        </button>
      </div>
    </div>
  );
}

export default UserCard;

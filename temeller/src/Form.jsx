const Form = () => {
  // Form gönderildiğinde çalışacak fonksiyon
  const handleSubmit = (e) => {
    // Sayfa yenilemesini engelle
    e.preventDefault();

    // Form içerisindeki değerlere eriş

    const isim = e.target[0].value;
    const soyisim = e.target[1].value;

    console.log(isim);
    console.log(soyisim);
  };
  return (
    <form
      onSubmit={(e) => handleSubmit(e)}
      className="d-flex flex-column gap-4 rounded  shadow p-3"
    >
      <h1 className="text-center">Giriş Formu</h1>
      <input
        type="text"
        className="form-control"
        placeholder="İsim giriniz..."
      />
      <input
        type="password"
        className="form-control"
        placeholder="Şifre giriniz..."
      />
      <button type="submit" className="btn btn-primary">
        Giriş Yap
      </button>
    </form>
  );
};

export default Form;

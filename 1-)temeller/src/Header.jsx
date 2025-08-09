// Css dosyasını import et
import header from "./header.css";

// Bir React bileşeni oluştur
function Header() {
  return (
    <header>
      <h1>Logo</h1>

      <nav>
        <a href="#">Home</a>
        <a href="#">About</a>
        <a href="#">Contact</a>
        <a href="#">Basket</a>
      </nav>
    </header>
  );
}

// Oluşturulan React bileşenini export et

export default Header; // default

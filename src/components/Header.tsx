import Logo from "./Logo";
import Nav from "./Nav";
import ContactBtn from "./ContactBtn";

export default function Header() {
  return (
    <header >
      <div>
        <Logo />
        <div>
          <Nav />
          <ContactBtn />
        </div>
      </div>
    </header>
  );
}

import Banner from "components/Banner";
import Card from "components/Card";
import Titulo from "components/Titulo";
import styles from "./Favoritos.module.css";

function Favoritos({ children }) {
  return (
    <>
      <Banner imagem="favoritos"></Banner>
      <Titulo>
        <h1>Meus Favoritos</h1>
      </Titulo>
      <section className={styles.container}>
        <Card
          id="2"
          titulo="Gato bonifácio"
          capa="https://images.unsplash.com/photo-1589998059171-988d887df646?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGJvb2t8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
        />
      </section>
    </>
  );
}

export default Favoritos;

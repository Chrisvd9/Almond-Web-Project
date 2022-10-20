import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const Footer = () => {
  return (
    <footer className="text-center text-lg-start bg-light text-muted">
      <Container>
        <Row>
          <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
            <div className="me-5 d-none d-lg-block">
              <span>
                Conéctate con nosotros y síguenos por nuestras redes sociales:
              </span>
            </div>

            <div>
              <a href="" className="me-4 text-reset">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="" className="me-4 text-reset">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="" className="me-4 text-reset">
                <i className="fab fa-google"></i>
              </a>
              <a href="" className="me-4 text-reset">
                <i className="fab fa-instagram"></i>
              </a>
            </div>
          </section>

          <section className="">
            <div className="container text-center text-md-start mt-5">
              <div className="row mt-3">
                <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                  <h6 className="text-uppercase fw-bold mb-4">Productos</h6>
                  <p>
                    <a href="#!" className="text-reset">
                      Aceite de almendras
                    </a>
                  </p>
                  <p>
                    <a href="#!" className="text-reset">
                      Lufas orgánicas
                    </a>
                  </p>
                  <p>
                    <a href="#!" className="text-reset">
                      Jabones naturales
                    </a>
                  </p>
                  <p>
                    <a href="#!" className="text-reset">
                      Aceite de jojoba
                    </a>
                  </p>
                </div>

                <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                  <h6 className="text-uppercase fw-bold mb-4">
                    Enlaces útiles
                  </h6>
                  <p>
                    <a href="#!" className="text-reset">
                      Precios
                    </a>
                  </p>
                  <p>
                    <a href="#!" className="text-reset">
                      Ajustes
                    </a>
                  </p>
                  <p>
                    <a href="#!" className="text-reset">
                      Pedidos
                    </a>
                  </p>
                  <p>
                    <a href="#!" className="text-reset">
                      Ayuda
                    </a>
                  </p>
                </div>

                <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                  <h6 className="text-uppercase fw-bold mb-4">Contacto</h6>
                  <p>
                    <i className="fas fa-home me-3"></i>Av.Española 344,
                    Valparaíso, V región
                  </p>
                  <p>
                    <i className="fas fa-envelope me-3"></i>
                    emanaturalcosmetic@gmail.com
                  </p>
                  <p>
                    <i className="fas fa-phone me-3"></i> +56 9 3456 7112
                  </p>
                </div>
              </div>
            </div>
          </section>
          <Col className="text-center py-3">
            Copyright &copy; 2022 Emma's Shop. Todos los derechos reservados
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;

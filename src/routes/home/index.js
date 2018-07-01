import { h, Component } from "preact";
import Head from "preact-head";

export default class Home extends Component {
  render(props, {}) {
    console.log("parent props:", props);
    const { menuOpen, toggleMenu } = props;
    return (
      <div class="page">
        <Head>
          <title>Home - Chengho PWA</title>
          <meta name="description" content="Progressive Web App using PreactJS" />
          <meta name="keywords" content="pwa, preact, unistore, code-splitting, hot-reload" />
          <meta name="author" content="Azul" />
        </Head>
        <div class="homepage-archie">
          <div id="mySidenav" class="sidenav" style={{ width: menuOpen ? "250px" : "0px" }}>
            <div class="sidenav-title">
              <div class="row">
                <div class="col-sm-9">
                  <p>John Doe</p>
                  <p>John@gmail.com</p>
                  <p>081289800092</p>
                </div>
                <div class="col-sm-3">
                  <a href="#" class="closebtn" name="close-sidenav" onClick={toggleMenu}>
                    <img src="assets/img/menu.png" alt="sidebar menu" />
                  </a>
                </div>
              </div>
            </div>
            <a href="#">Bantuan</a>
            <a href="#">Tukar Poin</a>
            <a href="#">Kupon Saya</a>
            <a href="#">Ringkasan Transaksi</a>
            <a href="#">Pengaturan Pin</a>
            <a href="#">Riwayat Transaksi</a>
            <a href="#">Riwayat Transaksi</a>
            <a href="#">Kredit</a>
            <a href="#">Pengaturan Printer</a>
            <a href="#">Keluar Aplikasi</a>
          </div>

          <div class="header-bg">
            <div class="header-nav clearfix">
              <div class="nav-left">
                <a onClick={toggleMenu}>
                  <img src="assets/img/menu.png" width="24" alt="burger menu" />
                  <span>Pulsa47</span>
                </a>
              </div>
              <div class="call-right">
                <a onClick={props.authenticate}>
                  <img src="assets/img/phone-receiver.png" width="10" alt="customer care" />
                  <span>Telp Customer Care</span>
                </a>
              </div>
            </div>
          </div>

          <div class="container">
            <div class="body-product">
              <div class="row">
                <div class="col-sm-4">
                  <div class="col-product">
                    <a href="#">
                      <div class="product-middle">
                        <img src="assets/img/phone.png" width="24" alt="product pulsa" />
                        <span>Isi Pulsa</span>
                      </div>
                    </a>
                  </div>
                </div>
                <div class="col-sm-4">
                  <div class="col-product">
                    <a>
                      <div class="product-middle">
                        <img src="assets/img/phone.png" width="24" alt="product data" />
                        <span>Paket Data</span>
                      </div>
                    </a>
                  </div>
                </div>
                <div class="col-sm-4">
                  <div class="col-product">
                    <a>
                      <div class="product-middle">
                        <img src="assets/img/pln.png" width="23" alt="product pln" />
                        <span>Listrik PLN</span>
                      </div>
                    </a>
                  </div>
                </div>
                <div class="col-sm-4">
                  <div class="col-product">
                    <a>
                      <div class="product-middle">
                        <img src="assets/img/bpjs.png" width="30" alt="product bpjs" />
                        <span>BPJS Kesehatan</span>
                      </div>
                    </a>
                  </div>
                </div>
                <div class="col-sm-4">
                  <div class="col-product">
                    <a>
                      <div class="product-middle">
                        <img src="assets/img/telkom.png" width="36" alt="product telkom" />
                        <span>Tagihan Telkom</span>
                      </div>
                    </a>
                  </div>
                </div>
                <div class="col-sm-4">
                  <div class="col-product">
                    <a>
                      <div class="product-middle">
                        <img src="assets/img/pln.png" width="23" alt="product cicilan" />
                        <span>Bayar Cicilan</span>
                      </div>
                    </a>
                  </div>
                </div>
                <div class="col-sm-4">
                  <div class="col-product">
                    <a>
                      <div class="product-middle">
                        <img src="assets/img/bpjs.png" width="30" alt="product pdam" />
                        <span>Tagihan PDAM</span>
                      </div>
                    </a>
                  </div>
                </div>
                <div class="col-sm-4">
                  <div class="col-product">
                    <a>
                      <div class="product-middle">
                        <p class="label">Soon</p>
                      </div>
                    </a>
                  </div>
                </div>
                <div class="col-sm-4">
                  <div class="col-product">
                    <a>
                      <div class="product-middle">
                        <p class="label">Soon</p>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

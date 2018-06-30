// import { h } from "preact";
// import style from "./style";

const Login = props => (
  <div class="page">
    <div class="homepage-archie splash">
      <div class="login-page">
        <h3>Hi</h3>
        <p class="title">Partner Pulsa47</p>
        <p class="command">Silahkan login untuk melakukan transaksi</p>
        <div class="content-form mt20">
          <form action="#">
            <div class="p__field-container p__field-bg field-log-phone">
              <input type="text" class="p__field" id="input_phone" />
              <label for="input_phone">Nomor Handphone</label>
              <span class="focus-border" />
            </div>
            <div class="p__field-container p__field-bg field-log-password mt10">
              <input type="password" class="p__field" id="input_password" />
              <label for="input_password">Password</label>
              <span class="focus-border" />
            </div>

            <div class="clearfix mt15">
              <a href="#" class="float-right" id="link_lupa_password">
                Lupa Password?
              </a>
            </div>
            <div class="clearfix mt15">
              <button type="submit" class="btn-login" id="btn_login" onClick={props.authenticate}>
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
);

export default Login;

import { decorate, observable, action } from "mobx";
import { getItem, setItem, General } from "app/utils";
import { RequestGet } from "../general/HttpClient";
import { clearAll } from "../general/Storage";

class UserSession {
  data = null;
  setData(val) {
    this.data = val;
    setItem("access_token", val.access_token);
    setItem("session_timeout", val.session_timeout);
    setItem("list_lob", JSON.stringify(val.list_lob));
    setItem("default_lob", val.default_lob);
  }

  initData = () => {
    if (getItem("access_token")) {
      this.data = {
        access_token: getItem("access_token"),
        session_timeout: getItem("session_timeout")
      };
      return this.data;
    } else {
      return null;
    }
  };

  destroy = async isLogout => {
    await RequestGet("logout")
      .then(r => {
        if (r) {
          General.setMenu(null);
          clearAll();
          isLogout = true;
        } else {
          isLogout = false;
        }
      })
      .catch(e => {
        console.log(e);
        isLogout = false;
      });

    return isLogout;
  };
}
const userSession = decorate(UserSession, {
  data: observable,
  destroy: action
});
export default new userSession();

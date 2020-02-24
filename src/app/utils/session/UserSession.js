import { decorate, observable, action } from 'mobx';
import { getItem, setItem, removeItem } from 'app/utils';


class UserSession {

    data = null;
    setData(val) {
        setItem("session", val).then((v) => {
            if (v) {
                getItem("session").then((s) => {
                    if (s) {
                        this.data = s;
                        return true;
                    }
                    else {
                        this.data = null;
                        return false;
                    }
                }).catch((err) => {
                    return false;
                })
            }
        }).catch((e) => {
            return false;
        })
    }

    initData = async (data) => {
        await this.getData();
        data = this.data;
        return data;
    }

    getData() {
        if (this.data) {
            console.log("Direct UserSession", true);
            return this.data;
        }
        else {
            getItem("session").then((s) => {
                if (s) {
                    this.data = s;
                    return this.data;
                }
                else {
                    this.data = null;
                    return false;
                }
            }).catch((err) => {
                return false;
            })
        }
    }

    destroy = async (isLogout) => {
        await removeItem("session").then((v) => {
            if (v) {
                this.data = null;
                isLogout = true;
            }
            else {
                isLogout = true;
            }
            return true;
        }).catch((e) => {
            isLogout = true;
        })
        return isLogout;

    }

}
const userSession = decorate(UserSession, {
    data: observable,
    destroy: action
});
export default new userSession;


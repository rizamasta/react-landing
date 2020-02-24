import { decorate, observable } from 'mobx';
class General {
    pageTitle = null;
}
const general = decorate(General, {
    pageTitle: observable
})
export default general;
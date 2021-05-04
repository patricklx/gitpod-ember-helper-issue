import Controller from "@ember/controller";
import MyHelper from "../helpers/my-helper";

export default class AppController extends Controller {
    myHelper = MyHelper;
}
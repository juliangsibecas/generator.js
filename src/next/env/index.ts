import { CustomGenerator } from "../../utils/CustomGenerator";

export default class extends CustomGenerator {
  writing() {
    this.helpers.copyTpl("./types/env.ejs", "./types/env.d.ts");
    this.copyDestination(this.templatePath(".*"), this.destinationPath());
  }
}

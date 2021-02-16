import { CustomGenerator } from '../utils/CustomGenerator'

export default class extends CustomGenerator {
  writing(): void {
    this.copyDestination(
      this.templatePath('tsconfig.json'),
      this.destinationPath('tsconfig.json')
    )
  }
}

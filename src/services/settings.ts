export class SettingsService {
  private toggle: boolean = false;

  setToggle(value: boolean) {
    this.toggle = value;
  }

  getToggle(): boolean {
    return this.toggle;
  }
}

import { customElement, property } from '@polymer/decorators';
import { html, PolymerElement } from '@polymer/polymer';
import '../components/hero/simple-hero';
import '../components/markdown/remote-markdown';
import '../elements/footer-block';
import { mapPage, heroSettings } from '../utils/data';
import { updateMetadata } from '../utils/metadata';

@customElement('map-page')
export class MapPage extends PolymerElement {
  static get template() {
    return html`
      <style>
        :host {
          display: block;
        }
      </style>

      <simple-hero page="map"></simple-hero>

      <remote-markdown path="[[source]]"></remote-markdown>

      <footer-block></footer-block>
    `;
  }

  private heroSettings = heroSettings.map;

  @property({ type: String })
  source = mapPage;

  override connectedCallback() {
    super.connectedCallback();
    updateMetadata(this.heroSettings.title, this.heroSettings.metaDescription);
  }
}

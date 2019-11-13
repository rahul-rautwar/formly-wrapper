import { Component, Prop, h } from '@stencil/core';
import { format } from '../../utils/utils';

@Component({
  tag: 'my-component',
  styleUrl: 'my-component.css',
  shadow: false
})
export class MyComponent {

  /** componentSchema */
  componentSchema: any = []

  /**
   * The first name
   */
  @Prop() first: string;

  /**
   * The middle name
   */
  @Prop() middle: string;

  /**
   * The last name
   */
  @Prop() last: string;

  /**
     * componentWillLoad method
     */
  componentWillLoad() {
    this.componentSchema = [
      {
        key: 'name',
        type: 'input',
        defaultValue: '',
        className: 'col-6',
        templateOptions: {
          label: 'NAME',
          description: 'Input Field Label',
          placeholder: 'some text',
          required: true,
          type: 'text',
          change: () => {
            //want to do some opration here
            console.log('i am changed')
          }
        }
      },
      {
        key: 'line2',
        type: 'input',
        defaultValue: '',
        className: 'col-6',
        templateOptions: {
          label: 'Address line 1',
          description: 'Input Field Label',
          placeholder: 'some text',
          required: true,
          blur: () => {
            //want to do some opration here
            console.log('i am blured')
          }
        }
      },
      {
        key: 'country',
        type: 'select',
        className: 'col-6',
        templateOptions: {
          label: 'Country',
          description: 'Input Field Label',
          options: [{ name: 'Afghanistan', code: 'AF' },
          { name: 'land Islands', code: 'AX' }],
          valueProp: 'code',
          labelProp: 'name',
          change: () => {
            //want to do some opration here
            console.log('country changed')
          }
        }
      }
    ]
  }

  private getText(): string {
    return format(this.first, this.middle, this.last);
  }

  render() {
    return <div>Hello, World! I'm {this.getText()}

      {<script
        src="https://unpkg.com/formly-wrapper-angular-element@latest/dist/angular-custom-elements/custom-formly-wrapper.js">
      </script>}
      <p>Formly Wrapper</p>
      {this.componentSchema && <app-formly-wrapper input={JSON.stringify(this.componentSchema)}></app-formly-wrapper>}
    </div>;
  }
}

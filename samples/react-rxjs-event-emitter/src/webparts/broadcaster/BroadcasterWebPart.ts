import * as React from 'react';
import * as ReactDom from 'react-dom';
import { Version } from '@microsoft/sp-core-library';
import {
  BaseClientSideWebPart,
  IPropertyPaneConfiguration,
  PropertyPaneTextField
} from '@microsoft/sp-webpart-base';

import * as strings from 'broadcasterStrings';
import { IBroadcasterWebPartProps } from './IBroadcasterWebPartProps';
import { IBroadcasterProps } from './components/IBroadcasterProps';
import Broadcaster from './components/Broadcaster';

export default class BroadcasterWebPart extends BaseClientSideWebPart<IBroadcasterWebPartProps> {

  public render(): void {

    const element: React.ReactElement<IBroadcasterProps> = React.createElement(Broadcaster);

    ReactDom.render(element, this.domElement);
  }

  protected get dataVersion(): Version {
    return Version.parse('1.0');
  }

  protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration {
    return {
      pages: [
        {
          header: {
            description: strings.PropertyPaneDescription
          },
          groups: [
            {
              groupName: strings.BasicGroupName,
              groupFields: [
                PropertyPaneTextField('description', {
                  label: strings.DescriptionFieldLabel
                })
              ]
            }
          ]
        }
      ]
    };
  }
}

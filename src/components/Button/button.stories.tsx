import { storiesOf } from '@storybook/react';
import * as React from 'react';
import { action } from '@storybook/addon-actions';
import Button from './index';

storiesOf("Button", module)
  .add("Button", () => (
    <React.Fragment>
      <Button onClick={action('clicked')} >Button</Button>
      <Button to="/" >link</Button>
    </React.Fragment>
  ))
  .add("Buttons colored", () => (
    <React.Fragment>
      <Button primary>Button</Button>
      <Button primary to="/" >link</Button>
      <br />
      <Button secondary>Button</Button>
      <Button secondary to="/" >link</Button>
      <br />
      <Button success>Button</Button>
      <Button success to="/" >link</Button>
      <br />
      <Button danger>Button</Button>
      <Button danger to="/" >link</Button>
      <br />
      <Button warning>Button</Button>
      <Button warning to="/" >link</Button>
      <br />
      <Button info>Button</Button>
      <Button info to="/" >link</Button>
    </React.Fragment>
  ))
  .add("Buttons colored framed", () => (
    <React.Fragment>
      <Button primary framed>Button</Button>
      <Button primary framed to="/" >link</Button>
      <br />
      <Button secondary framed>Button</Button>
      <Button secondary framed to="/" >link</Button>
      <br />
      <Button success framed>Button</Button>
      <Button success framed to="/" >link</Button>
      <br />
      <Button danger framed>Button</Button>
      <Button danger framed to="/" >link</Button>
      <br />
      <Button warning framed>Button</Button>
      <Button warning framed to="/" >link</Button>
      <br />
      <Button info framed>Button</Button>
      <Button info framed to="/" >link</Button>
    </React.Fragment>
  ));
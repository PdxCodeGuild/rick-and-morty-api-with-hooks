import React from "react";

import { Card, Media, Content, Heading } from "react-bulma-components";

const Character = props => (
  <Card>
    <Card.Image
      size="1by1"
      src={props.data.image}
    />
    <Card.Content>
      <Media>
        <Media.Item>
          <Heading size={4}>{props.data.name}</Heading>
        </Media.Item>
      </Media>
      <Content>
        <p>{props.data.status}</p>
        <p><b>{props.data.species}</b>: <i>{props.data.gender}</i></p>
      </Content>
    </Card.Content>
  </Card>
);


export default Character;
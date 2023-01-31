import React, { useState } from "react";
import { Segment, Grid, Button, Label, Header } from "semantic-ui-react";

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <>
    <Segment  style={{ margin: "10% 40%", textAlign: "center", fontSize: "22px", boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px", padding: "3% 1%", borderRadius: "8px" }}>
      <Grid columns={2}>
         <Grid.Row>
          <Grid.Column>
            <Label >Count</Label>
            <Header as='h3'>{count}</Header>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column>
            <Button
              positive
              onClick={() => setCount(count + 1)}
              content="Increment"
              style={{backgroundColor: "green", color: "white", margin: "10px", padding: "2%" ,cursor: "pointer", border:"ridge"}}
            />
             <Button
              negative
              disabled={count === 0}
              onClick={() => setCount(count > 0 ? count - 1 : 0)}
              content="Decrement"
              style={{backgroundColor: "red", color: "white", margin: "10px", padding: "2%" ,cursor: "pointer",border : "ridge"}}

            />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Segment>
  <center>  <Label textAlign="center">Done By Pranjal Gupta  - 12008999</Label> </center>
    </>
  );
}

export default Counter;

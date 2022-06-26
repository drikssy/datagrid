import './App.css';
import { Grid, GridColumn } from "@progress/kendo-react-grid";
import { process, State } from "@progress/kendo-data-query";
import products from './products.json';
import * as React from 'react';
import {getPools} from "./db/repository";
import {connectToDb, disconnectFromDb} from "./db/connection";
import {useEffect} from "react";
import {PoolInterface} from "./models/models";

const initialDataState: State = {
  sort: [
    {
      field: "code",
      dir: "asc",
    },
  ],
  take: 20,
  skip: 0,
};

const CustomCell = (props) => {
  const field = props.field || "";
  const value = props.dataItem[field];
  const bgColorRender = value ? "#2ecc71" : "#e74c3c"
  return (
    <td style={{'background': bgColorRender}}>
            {/* <input disabled={true} type="checkbox" checked={value} /> */}
      </td>
  );
};


const App = () => {
  const [dataState, setDataState] = React.useState(initialDataState);
  const [pools, setPools] = React.useState([] as PoolInterface[]);
  useEffect(() => {
    const searchPools = async() => {
      await connectToDb();
      const pools = await getPools();
      setPools(pools);
      await disconnectFromDb();
      console.log(pools)
    }
      searchPools();

  }, [])
  return (
    <Grid
      pageable={true}
      sortable={true}
      filterable={true}
      // style={{
      //   height: "400px",
      // }}
      data={process(products, dataState)}
      {...dataState}
      onDataStateChange={(e) => {
        setDataState(e.dataState);
      }}
    >
      <GridColumn field="ProductID" title="ID" width="80px" filterable={false} />
      <GridColumn field="ProductName" title="Name" />
      <GridColumn field="UnitPrice" title="Price" filter="numeric" width="250px" />
      <GridColumn
        field="UnitsInStock"
        title="In stock"
        filter="numeric"
        width="250px"
      />
      <GridColumn
        field="Discontinued" filter="boolean" width="250px" cell={(props) => (
          <td>
            <input
              disabled={true}
              type="checkbox"
              checked={props.dataItem[props.field || ""]}
            />
          </td>
        )}
      />
      <GridColumn
        field="Discontinued" title="custom field" width="250px" filter="boolean" cell={CustomCell}
      />
    </Grid>
  );
};

export default App;

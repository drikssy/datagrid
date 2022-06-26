import './App.css';
import { Grid, GridColumn } from "@progress/kendo-react-grid";
import { process, State } from "@progress/kendo-data-query";
import products from './products.json';
import * as React from 'react';
import {getPools} from "./db/repository";
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

const CustomCell = (props: any) => {
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
      const pools = await getPools();
      setPools(pools);
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
      data={process(pools, dataState)}
      {...dataState}
      onDataStateChange={(e) => {
        setDataState(e.dataState);
      }}
    >
      <GridColumn field="blockchain" title="Blockchain" filterable={false} />
      <GridColumn field="projectName" title="Protocol" filterable={false} />
      <GridColumn field="pairId" title="Pair" filterable={false} />
      <GridColumn field="liquidity" title="TVL" width="250px"/>
      <GridColumn field="APR30d" title="APR 30D" filter="numeric" width="250px" />
      <GridColumn field="vol30d" title="Volume 30D" filter="numeric" width="250px" />
      <GridColumn field="addLiquidityLink" title="Link" width="500px" />
      {/*<GridColumn*/}
      {/*  field="UnitsInStock"*/}
      {/*  title="In stock"*/}
      {/*  filter="numeric"*/}
      {/*  width="250px"*/}
      {/*/>*/}
      {/*<GridColumn*/}
      {/*  field="Discontinued" filter="boolean" width="250px" cell={(props) => (*/}
      {/*    <td>*/}
      {/*      <input*/}
      {/*        disabled={true}*/}
      {/*        type="checkbox"*/}
      {/*        checked={props.dataItem[props.field || ""]}*/}
      {/*      />*/}
      {/*    </td>*/}
      {/*  )}*/}
      {/*/>*/}
      {/*<GridColumn*/}
      {/*  field="Discontinued" title="custom field" width="250px" filter="boolean" cell={CustomCell}*/}
      {/*/>*/}
    </Grid>
  );
};

export default App;

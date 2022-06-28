import './App.css';
import { Grid, GridColumn } from "@progress/kendo-react-grid";
import { process, State } from "@progress/kendo-data-query";
import * as React from 'react';
import {getPools} from "./service/pool";
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

const AddLiquidityCell = (props: any) => {
  const field = props.field || "";
  const value = props.dataItem[field];
  return (
    <a target={"_blank"} href={value}>
            <button>Add Liquidity Now</button>
      </a>
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
      <GridColumn field="blockchain" title="Blockchain" width="150px" filterable={false} />
      <GridColumn field="projectName" title="Protocol" width="150px" filterable={false} />
      <GridColumn field="pairId" title="Pair" width="150px" filterable={false} />
      <GridColumn field="liquidity" title="TVL" width="200px"/>
      <GridColumn field="APR30d" title="APR 30D" width="120px" />
      <GridColumn field="APR7d" title="APR 7D" width="120px" />
      <GridColumn field="APR24h" title="APR 24H" width="120px" />
      <GridColumn field="vol30d" title="Volume 30D" width="200px" />
      <GridColumn field="vol7d" title="Volume 7D" width="200px" />
      <GridColumn field="vol24h" title="Volume 24H" width="200px" />
      <GridColumn field="totalRatePercentage" title="Total Fees" width="120px" />
      <GridColumn field="addLiquidityLink" title="Link" width="200px" cell={AddLiquidityCell}/>
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

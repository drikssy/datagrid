import './App.css';
import { Grid, GridColumn } from "@progress/kendo-react-grid";
import { process } from "@progress/kendo-data-query";
import products from './products.json';
import * as React from 'react';

const initialDataState = {
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

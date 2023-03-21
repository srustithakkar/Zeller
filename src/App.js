import "./App.css";
import { useEffect, useState } from "react";
import { API, graphqlOperation } from "aws-amplify";
import { ListZellerCustomers } from "./graphql/queries";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import Card from "./components/Card";

function App() {
  const [userType, setuserType] = useState("ADMIN");
  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchTodos() {
      try {
        const { data } = await API.graphql(
          graphqlOperation(ListZellerCustomers)
        );
        setData(data.listZellerCustomers.items)
      } catch (error) {
        console.log("Error fetching data", error);
      }
    }
    fetchTodos();
  }, []);

  const onOptionChange = async (e) => {
    await setuserType(e.target.value);
  };

  return (
    <div className="App">
      <FormControl>
        <FormLabel id="demo-controlled-radio-buttons-group">
          User Types
        </FormLabel>
        <RadioGroup
          aria-labelledby="demo-controlled-radio-buttons-group"
          name="controlled-radio-buttons-group"
          value={userType}
          onChange={onOptionChange}
        >
          <FormControlLabel value="ADMIN" control={<Radio />} label="ADMIN" />
          <FormControlLabel
            value="MANAGER"
            control={<Radio />}
            label="MANAGER"
          />
        </RadioGroup>
      </FormControl>
      <Card data={data} userType={userType} />
    </div>
  );
}

export default App;

import React, {useContext } from "react";
import { Grid } from "semantic-ui-react";
import ActivityList from "./ActivityList";
import ActivityDetails from "../details/ActivityDetails";
import ActivityForm from "../form/ActivityForm";
import { observer } from "mobx-react-lite";
import ActivityStore from "../../../app/stores/activityStore";


const ActivityDashboard: React.FC = () => {
  //bring in activity store
  const activityStore = useContext(ActivityStore);
  const {editMode, activity} = activityStore
  return (
    <Grid>
      <Grid.Column width={10}>
        <ActivityList
        />
      </Grid.Column>
      <Grid.Column width={6}>
      <h2> Activity Filters </h2>
      </Grid.Column>
    </Grid>
  );
};

export default observer(ActivityDashboard);
import React, { useContext, useEffect  } from "react";
import { Grid } from "semantic-ui-react";
import ActivityList from "./ActivityList";
import { observer } from "mobx-react-lite";
import ActivityStore from '../../../app/stores/activityStore';
import LoadingComponent from "../../../app/layout/LoadingComponent";

const ActivityDashboard: React.FC = () => {
  const activityStore = useContext(ActivityStore);

  //where we get activities
  useEffect(() => {
    //use method from store to bring in activities
    activityStore.loadActivities();
  }, [activityStore]); //dependency array for activitystore.loadactivity function

  if (activityStore.loadingInitial)
    return <LoadingComponent content="Loading Activities..." />;
  //bring in activity store
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
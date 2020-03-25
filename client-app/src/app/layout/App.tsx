import React, { useEffect, Fragment, useContext } from "react";
import { Container } from "semantic-ui-react";
import NavBar from "../../features/nav/NavBar";
import LoadingComponent from "./LoadingComponent";
import ActivityStore from "../stores/activityStore";
import { observer } from "mobx-react-lite";
import ActivityDashboard from "../../features/activities/dashboard/ActivityDashboard";

//Define state by passing the type parameter
const App = () => {
  const activityStore = useContext(ActivityStore);

  //where we get activities
  useEffect(() => {
    //use method from store to bring in activities
    activityStore.loadActivities();
  }, [activityStore]); //dependency array for activitystore.loadactivity function

  if (activityStore.loadingInitial)
    return <LoadingComponent content="Loading Activities..." />;
  return (
    <Fragment>
      <NavBar />
      <Container style={{ marginTop: "7em" }}>
        <ActivityDashboard />
      </Container>
    </Fragment>
  );
};

export default observer(App);

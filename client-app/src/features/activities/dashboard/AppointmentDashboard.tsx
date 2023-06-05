import React from "react";
import { Grid } from "semantic-ui-react";
import ActivityList from "./AppointmentList";
import AppointmentDetail from "../details/AppointmentDetail";
import AppointmentForm from "../form/AppointmentForm";
import { useStore } from "../../../app/stores/store";
import { observer } from "mobx-react-lite";

//destructure activity properties that we passing down
export default observer(function ActivityDashboard() {
    
    const {appointmentStore} = useStore()
    const {selectedAppointment, editMode } = appointmentStore
    
    return (
        <Grid>
            <Grid.Column width='10'>
                <ActivityList></ActivityList>
            </Grid.Column>
            <Grid.Column width='6'>
                {/* anything to the right will execute as long the left isnt null or undefined */}
                {selectedAppointment && !editMode &&
                <AppointmentDetail 
                />}
                {editMode &&  
                <AppointmentForm 
                ></AppointmentForm> }          
            </Grid.Column>
        </Grid>
    )
})
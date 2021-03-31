 <template>
  <div>
    <md-app>
      <md-app-toolbar class="md-primary">
        <span class="md-title">Make an Appointment</span>
      </md-app-toolbar>

      <md-app-drawer md-permanent="card">
        <md-list>
          <md-list-item>
            <md-icon>
               move_to_inbox
              </md-icon>
            <span class="md-list-item-text" md-theme="selection-orange">
               <router-link to="/appt" name=Appt>Appointment</router-link>
              </span>
          </md-list-item>

          <md-list-item>
            <md-icon>send</md-icon>
            <span class="md-list-item-text">Sent Mail</span>
          </md-list-item>

          <md-list-item>
            <md-icon>delete</md-icon>
            <span class="md-list-item-text">Trash</span>
          </md-list-item>

          <md-list-item>
            <md-icon>error</md-icon>
            <span class="md-list-item-text">Spam</span>
          </md-list-item>
        </md-list>
      </md-app-drawer>

      <md-app-content >
        Click for Appointment:
        {{ msg }}
    <md-speed-dial md-event="click" md-direction="bottom">
      <md-speed-dial-target class="md-primary">
        <md-icon>my_location</md-icon>
      </md-speed-dial-target>

      <md-speed-dial-content>
        <md-button class="md-icon-button">
          <md-icon>directions</md-icon>
      
        </md-button>

        <md-button class="md-icon-button" >
          <md-icon >streetview</md-icon>
        </md-button>
      </md-speed-dial-content>
    </md-speed-dial>
      </md-app-content>
    </md-app>
 
  </div>
</template>

<script>
  export default {
    props: {
    msg: String
  },
    name: 'PermanentCard',
    Name: 'EventTriggers',
  methods: {
    customClick () {
      window.alert('You can have a custom click inside the target!')
    }
  }
  }
</script>

<style scoped>
  .md-app {
    min-height: 850px;
    border: 1px solid rgba(#000, .12);
    
  }

  
  .md-drawer {
    width: 230px;
    max-width: calc(100vw - 125px);
    background-color: darkgrey;
  }
</style>

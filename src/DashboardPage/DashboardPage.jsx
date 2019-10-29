import React from 'react';

import { userService, authenticationService } from '@/_services';

class DashboardPage extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            currentUser: authenticationService.currentUserValue
        }
    }
}
import React from 'react';

import { userService, venueService, authenticationService } from '@/_services';

class HomePage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            currentUser: authenticationService.currentUserValue,
            venues: null
        };
    }

    componentDidMount() {
        //userService.getAll().then(users => this.setState({ users }));
        venueService.getAll().then(venues => this.setState({ venues }))
    }

    render() {
        const { venues } = this.state;
        return (
            <div>
                <h1>Welcome.</h1>
                <h3>Your venues:</h3>
                {venues &&
                    <ul>
                        {venues.map(venue =>
                            <a key={venue.id} href={"venue/" + venue.id}><li > {venue.name}</li></a>
                        )}
                    </ul>}
                    <p>Create a new venue:</p>
                    <button type="button" class="btn btn-primary">Add Venue</button>
            </div>
        );
    }
}

export { HomePage };
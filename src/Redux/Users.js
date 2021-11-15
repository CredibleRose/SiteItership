import React from 'react';

import axios from 'axios';

export default class PersonList extends React.Component {
    state = {
        persons: []
    }

    componentDidMount() {
        axios.get(`https://stoplight.io/mocks/kode-education/trainee-test/25143926/users`)
            .then(res => {
                const persons = res.data;
                this.setState({ persons });
            })
    }
}
import React, { Component } from 'react';

class HeaderComponent extends Component {

    constructor(props){
        super(props)
        this.state = {

        }
    }

    render() {
        return (
            <div>
                <header>
                    <nav className="navbar navbar-dark bg-dark">
                        <div className='headerClass'>Employee Management App</div>
                    </nav>
                </header>
            </div>
        );
    }
}

export default HeaderComponent;
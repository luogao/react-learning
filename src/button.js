import React, {
    Component
} from 'react';

class Button extends Component {
    constructor(props) {
        super(props);
        this.state = {
            liked: false
        };
    }

    handleClick(e) {
        this.setState({
            liked: !this.state.liked
        });
    }
    render() {
        const text = this.state.liked ? 'like' : 'dislike';
        return ( 
            <button style={{cursor:'pointer',}} onClick={this.handleClick.bind(this)}> {text} </button>
        )
    }
}

export default Button;
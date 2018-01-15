import React, {Component} from 'react';
let placeholder = document.createElement("li");
placeholder.className = "placeholder";
class SortableList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: this.props.data,
            nodePlacement: null
        }
        this.dragOver = this
            .dragOver
            .bind(this)
        this.dragEnd = this
            .dragEnd
            .bind(this)
        this.dragStart = this
            .dragStart
            .bind(this)
    }
    dragEnd(e) {
        this.dragged.style.display = 'block'
        if (!this.dragged.parentNode.contains(placeholder)) {
            return
        }
        this.dragged.parentNode.removeChild(placeholder);
        // Update state
        var data = this.state.data;
        var from = Number(this.dragged.dataset.id);
        var to = Number(this.over.dataset.id);
        if (from < to) 
            to--;
        if (this.nodePlacement === "after") 
            to++;
        data.splice(to, 0, data.splice(from, 1)[0]);
        this.setState({data: data});
    }
    dragOver(e) {
        e.preventDefault();
        this.dragged.style.display = 'none'
        if (e.target.className === "placeholder") 
            return;
        this.over = e.target;
        // Inside the dragOver method
        var relY = e.clientY - this.over.offsetTop;
        var height = this.over.offsetHeight / 2;
        var parent = e.target.parentNode;

        if (relY > height) {
            this.nodePlacement="after"
            parent.insertBefore(placeholder, e.target.nextElementSibling);
        } else if (relY < height) {
            this.nodePlacement="before"
            parent.insertBefore(placeholder, e.target);
        }
    }
    dragStart(e) {
        this.dragged =  e.currentTarget
        e.dataTransfer.effectAllowed = 'move';
        // Firefox requires calling dataTransfer.setData for the drag to properly work
        e.dataTransfer.setData("text/html", e.currentTarget);
    }
    render() {
        return (
            <ul onDragOver={this.dragOver} className="sortable-list">
                {this
                    .state
                    .data
                    .map((item, i) => {
                        return <li
                            data-id={i}
                            key={i}
                            draggable="true"
                            onDragEnd={this.dragEnd}
                            onDragStart={this.dragStart}>{item}</li>;
                    })}
            </ul>
        )
    }
}

export default SortableList
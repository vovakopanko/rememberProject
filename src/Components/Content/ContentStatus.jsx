import React from "react";

class ContentStaus extends React.Component {
  constructor(props) {
    super(props);
  }
  state = {
    editMode: true,
  };

  activatedEditMode = () => {
    // this.state.editMode = false;
    // this.forceUpdate();
    this.setState({
      editMode: false,
    });
  };

  deActivatedEditMode = () => {
    this.setState({
      editMode: true,
    });
  };
  render() {
    return (
      <>
        {this.state.editMode ? (
          <div>
            <span onDoubleClick={this.activatedEditMode}>
              {this.props.status}
            </span>
          </div>
        ) : (
          <div>
            <input
              onBlur={this.deActivatedEditMode}
              autoFocus={true}
              value={this.props.status}
            />
          </div>
        )}
      </>
    );
  }
}

export default ContentStaus;

import React from "react";

class ContentStaus extends React.Component {

  state = {
    editMode: true,
    status: this.props.getStatus,
  };

  activatedEditMode = () => {
    this.setState({
      editMode: false,
    });
  };

  deActivatedEditMode = () => {
    this.setState({
      editMode: true,
    });
    this.props.updateStatusThunk(this.state.status)
  };

  onChangeStatus = (e) => {
    this.setState({
      status: e.currentTarget.value
    })
  }
componentDidUpdate(prevProps,){
  if(prevProps.status !== this.props.getStatus) {
    this.setState({
      status: this.props.getStatus
    })
  }
}

  render() {
    return (
      <>
        {this.state.editMode ? (
          <div>
            <span onDoubleClick={this.activatedEditMode}>
              {this.props.status || "-----"}
            </span>
          </div>
        ) : (
          <div>
            <input
              onBlur={this.deActivatedEditMode}
              onChange={this.onChangeStatus}
              autoFocus={true}
              value={this.state.status}
            />
          </div>
        )}
      </>
    );
  }
}

export default ContentStaus;
